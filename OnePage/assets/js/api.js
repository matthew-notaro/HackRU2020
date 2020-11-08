var dhSelection = "none"
var timeSelection = "none"
var restrictions = "none"
var scrapeResults = {};
var numRestrictions = 4;
var restrictionsChosen = new Array(numRestrictions).fill(false);
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
        scrape(dhSelection, timeSelection);
        //makeCorsRequest(buildQuery());
        document.getElementById("submit").setAttribute("class", "submit-clicked");
    }
}

function scrape() {
    $.ajax({
        type: "POST",
        url: "/scrape.py",
        data: {
            location: dhSelection,
            meal: timeSelection
        }
    }).done(function(o) {
        readTextFile("test.json");
    });
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

function buildQuery() {
    var items = scrapeResults.meals.genres.items;
    var ingredients = [];
    var recipe = "";
    for (var i = 0 in items) {
        recipe = '{ "title": "' + items[i].name + '", "ingr": [ ';
        for (var j = 0 in ingredients) {
            if (j = ingredients.length - 1) {
                recipe += '"1 ' + ingredients[j];
            } else {
                recipe += '"1 ' + ingredients[j] + ',"';
            }
        }
        recipe += ' ] }';
        makeCorsRequest(recipe);
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