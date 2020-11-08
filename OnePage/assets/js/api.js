var dhSelection = "none"
var timeSelection = "none"
var restrictions = ["VEGAN", "VEGETARIAN", "TREE_NUT_FREE", "PEANUT_FREE"];
var scrapeResults = {};
var numRestrictions = 4;
var restrictionsChosen = new Array(numRestrictions).fill(false);
var lastItem = null;
var appID = "88cdd7f2";
var key = "ba3e5208cfa9ff841e0a36b3eff4fc04";

function selectDh(dh) {
    document.getElementById("Brower").setAttribute("class", "icon-box");
    document.getElementById("Busch").setAttribute("class", "icon-box");
    document.getElementById("Livingston").setAttribute("class", "icon-box");
    document.getElementById("Neilson").setAttribute("class", "icon-box");
    document.getElementById(dh).setAttribute("class", "box-clicked");
    dhSelection = dh;
}

function selectTime(time) {
    document.getElementById("Breakfast").setAttribute("class", "icon-box");
    document.getElementById("Lunch").setAttribute("class", "icon-box");
    document.getElementById("Dinner").setAttribute("class", "icon-box");
    document.getElementById("Knight_Room").setAttribute("class", "icon-box");
    document.getElementById(time).setAttribute("class", "box-clicked");
    timeSelection = time;
}

function selectRestriction(id) {
    var i = id.charAt(id.length - 1);
    if (restrictionsChosen[i]) {
        document.getElementById(id).setAttribute("class", "icon-box");
    } else {
        document.getElementById(id).setAttribute("class", "box-clicked");
    }
    restrictionsChosen[i] = !restrictionsChosen[i];
}

function submitQuery() {
    if (dhSelection == "none" || timeSelection == "none") {
        document.getElementById("error").innerHTML = "<h2>Please select a dining hall and a meal type!</h2>";
    } else {
        document.getElementById("submit").setAttribute("class", "submit-clicked");
        document.getElementById("error").innerHTML = "";
        scrape();
        readTextFile("test.txt");
        buildAndSendQuery();
    }
}

function scrape() {
    let util = require('child_process')
    let subproc = util.execSync('python scrape.py ' + dhSelection + ' ' + timeSelection);
}

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                scrapeResults = JSON.parse(rawFile.responseText);;
                alert(rawFile.responseText);
            }
        }
    }
    rawFile.send(null);
}

function buildAndSendQuery() {
    var items = scrapeResults.meals.genres.items;
    var ingredients = [];
    var recipe = "";
    for (var i = 0 in items) {
        lastItem = items[i];
        recipe = '{ "title": "' + items[i].name + '", "ingr": [ ';
        for (var j = 0 in items[i].ingredients) {
            if (j == ingredients.length - 1) {
                recipe += '"1 ' + ingredients[j];
            } else {
                recipe += '"1 ' + ingredients[j] + ',"';
            }
        }
        recipe += ' ] }';
        makeCorsRequest(recipe);
        if (i == 3) {
            break;
        }
    }
}


// Create the XHR object.
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}

// Make the actual CORS request.
function makeCorsRequest(recipe) {
    //let recipe = '{ "title": "Fresh Ham Roasted With Rye Bread and Dried Fruit Stuffing", "ingr": [ "1 fresh ham, about 18 pounds, prepared by your butcher (See Step 1)", "7 cloves garlic, minced", "1 tablespoon caraway seeds, crushed", "4 teaspoons salt", "Freshly ground pepper to taste", "1 teaspoon olive oil", "1 medium onion, peeled and chopped", "3 cups sourdough rye bread, cut into 1/2-inch cubes", "1 1/4 cups coarsely chopped pitted prunes", "1 1/4 cups coarsely chopped dried apricots", "1 large tart apple, peeled, cored and cut into 1/2-inch cubes", "2 teaspoons chopped fresh rosemary", "1 egg, lightly beaten", "1 cup chicken broth, homemade or low-sodium canned" ] }';
    let pre = document.getElementById('response');

    var url = 'https:\//api.edamam.com/api/nutrition-details?app_id=' + appID + '&app_key=' + key;

    var xhr = createCORSRequest('POST', url);
    if (!xhr) {
        alert('CORS not supported');
        return;
    }

    // Response handlers.
    xhr.onload = function() {
        var text = xhr.responseText;
        console.log(text);
        const obj = JSON.parse(text);
        checkRestrictions(obj);
        console.log(obj);
        pre.innerHTML = text;
    };

    xhr.onerror = function() {
        alert('Woops, there was an error making the request.');
    };

    pre.innerHTML = 'Loading...';
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(recipe);
}

function checkRestrictions(obj) {
    boolean flag = false;
    for (var i = 0 in restrictionsChosen) {
        if (restrictionsChosen[i] && obj.healthLabels.contains(restrictions[i])) {
            flag = true;
            if (document.getElementById("results").innerHTML == "") {
                document.getElementById("results").innerHTML += '<section id="faq" class="faq section-bg"> <div class="container" data-aos="fade-up"> <div class="faq-list"> <ul>';
            } else {
                document.getElementById("results").innerHTML += '<li data-aos="fade-up"> <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" class="collapse" href="#faq-list-1">';
                document.getElementById("results").innerHTML += lastItem.name;
                document.getElementById("results").innerHTML += '<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a> <div id="faq-list-1" class="collapse show" data-parent=".faq-list"> <p>';
                for (var j = 0 in items[i].ingredients) {
                    if (j == items[i].ingredients.length - 1) {
                        document.getElementById("results").innerHTML += lastItem.ingredients;
                    } else {
                        document.getElementById("results").innerHTML += lastItem.ingredients + ', ';
                    }

                }
                document.getElementById("results").innerHTML += '</p></div></li>';
            }
        }
    }

    if (flag) {
        document.getElementById("results").innerHTML += '</ul></div></div></section>';
    }

}