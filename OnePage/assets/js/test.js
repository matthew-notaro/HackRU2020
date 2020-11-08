var dhSelection = "none"
var timeSelection = "none"
var restrictions = "none"
var scrapeResults = {};
var numRestrictions = 4;
var restrictionsChosen = new Array(numRestrictions).fill(false);
var appID = "88cdd7f2";
var key = "ba3e5208cfa9ff841e0a36b3eff4fc04";

function selectDh(dh) {
    console.log(dh);
    document.getElementById("Brower").setAttribute("class", "icon-box");
    document.getElementById("Busch").setAttribute("class", "icon-box");
    document.getElementById("Livingston").setAttribute("class", "icon-box");
    document.getElementById("Neilson").setAttribute("class", "icon-box");
    document.getElementById(dh).setAttribute("class", "box-clicked");
    dhSelection = dh;
}

function selectTime(time) {
    console.log(time);
    document.getElementById("Breakfast").setAttribute("class", "icon-box");
    document.getElementById("Lunch").setAttribute("class", "icon-box");
    document.getElementById("Dinner").setAttribute("class", "icon-box");
    document.getElementById("Knight_Room").setAttribute("class", "icon-box");
    document.getElementById(time).setAttribute("class", "box-clicked");
    timeSelection = time;
}

function selectRestriction(id) {
    console.log(id);
    var i = id.charAt(id.length - 1);
    if (restrictionsChosen[i]) {
        document.getElementById(id).setAttribute("class", "icon-box");
    } else {
        document.getElementById(id).setAttribute("class", "box-clicked");
    }
    restrictionsChosen[i] = !restrictionsChosen[i];
}

function submitQuery() {
    console.log(dhSelection, timeSelection);
    if (dhSelection == "none" || timeSelection == "none") {
        document.getElementById("error").innerHTML = "<h2>Please select a dining hall and a meal type!</h2>";
    } else {
        scrape();
        //makeCorsRequest(buildQuery());
        document.getElementById("submit").setAttribute("class", "submit-clicked");
    }
}

function scrape() {
    let util = require('child_process')
    let subproc = util.execSync('python scrape.py test.txt ' + dhSelection + ' ' + timeSelection);
}