var dhSelection = "none";
var timeSelection = "none";
var restrictions = ["VEGAN", "VEGETARIAN", "TREE_NUT_FREE", "PEANUT_FREE"];
var scrapeResults = {};
var numRestrictions = 4;
var restrictionsChosen = new Array(numRestrictions).fill(false);
var lastItem = null;
var appID = "88cdd7f2";
var key = "ba3e5208cfa9ff841e0a36b3eff4fc04";
var data = '{ "location_name": "Busch Dining Hall", "meals": { "genres": [ { "items": [ { "serving": "1 EACH", "calories": 143, "ingredients": [ "PINEAPPLE CUT FRSH", "STRAWBERRIES", "BLUEBERRIES" ] }, { "serving": "12 OZ", "calories": 513, "ingredients": [ "LOWFAT VANILLA YOGURT", "LOWFAT STRAWBERRY YOGURT", "BLUEBERRIES", "STRAWBERRIES", "NATURE VALLEY GRANOLA" ] } ], "genre_name": "BREAKFAST MISC" }, { "items": [ { "serving": "4 OZ", "calories": 276, "ingredients": [ "NATURAL CUT POTATO FRIES", "CANOLA OIL" ] } ], "genre_name": "STARCH &  POTATOES" }, { "items": [ { "serving": "3 OZL", "calories": 227, "ingredients": [ "GAL MILK", "GRATED PARMESAN CHEESE ", "CHEESE CULTURE", "SALT", "ENZYMES", "WHEY POWDER", "POWDERED CELLULOSE", "BUTTER", "FLOUR ALL PURPOSE (BLEACHED WHEAT FLOUR, NIACIN (A B VITAMIN)", "IRON", "THIAMINE MONONITRATE (VITAMIN B1)", "RIBOFLAVIN (VITAMIN B2)", "ENZYMES", "FOLIC ACID (A B VITAMIN))", "WHITE GROUND PEPPER" ] }, { "serving": "4 OZ", "calories": 43, "ingredients": [ "WATER", "BROCCOLI FLORETTES 4/3#", "OLIVE OIL", "SALT" ] }, { "serving": "3 OZ", "calories": 166, "ingredients": [ "CHICKEN STRIP", "OIL OLIVE" ] }, { "serving": "3 OZ", "calories": 71, "ingredients": [ "TOFU" ] }, { "serving": "4 OZ", "calories": 215, "ingredients": [ "WATER", "PASTA", "WHEAT FLOUR", "VITAMIN B3", "IRON", "VITAMIN B1", "VITAMIIN B2" ] }, { "serving": "4 OZ", "calories": 90, "ingredients": [ "WATER", "PEAS" ] }, { "serving": "4 OZ", "calories": 316, "ingredients": [ "BEEF MEATBALL", "WHEY POWDER", "YEAST EXTRACT", "LACTIC ACID", "SALT", "DRIED GARLIC", "SPICES", "PARSLEY FLAKES", "BROWN SUGAR", "BREADCRUMBS", "EGG WHITES", "FLAVORING", "CORN OIL", "SALT", "SPICES", "PRD ONION SPANISH DRY", "OIL WESSON CANOLA 4/1GAL", "OREGANO LEAVES", "PRD GARLIC PEELED FRESH GAL", "BASIL LEAF", "THYME LEAVES", "CRUSHED RED PEPPER FLAKES" ] }, { "serving": "4 OZ", "calories": 41, "ingredients": [ "TOMATO", "ONION", "PEELED GARLIC", "FRESH BASIL", "OIL OLIVE", "SALT", "BLACK PEPPER" ] } ], "genre_name": "COOK TO ORDER BAR" } ], "meal_name": "Lunch" } }'
var apiResponse = '{"uri":"http://www.edamam.com/ontologies/edamam.owl#recipe_9dfee3b20ae64dcf86b3eca3e3d6970b","yield":2.0,"calories":457,"totalWeight":919.7933333333333,"dietLabels":["LOW_FAT"],"healthLabels":["VEGAN","VEGETARIAN","PEANUT_FREE","TREE_NUT_FREE","ALCOHOL_FREE","SULPHITE_FREE"],"cautions":["SULFITES"],"totalNutrients":{"ENERC_KCAL":{"label":"Energy","quantity":457.57386666666673,"unit":"kcal"},"FAT":{"label":"Fat","quantity":1.1307880000000001,"unit":"g"},"FASAT":{"label":"Saturated","quantity":0.0838458,"unit":"g"},"FAMS":{"label":"Monounsaturated","quantity":0.12406553333333334,"unit":"g"},"FAPU":{"label":"Polyunsaturated","quantity":0.3848072666666667,"unit":"g"},"CHOCDF":{"label":"Carbs","quantity":119.964744,"unit":"g"},"FIBTG":{"label":"Fiber","quantity":12.971306666666667,"unit":"g"},"SUGAR":{"label":"Sugars","quantity":89.93484600000001,"unit":"g"},"PROCNT":{"label":"Protein","quantity":4.987067333333334,"unit":"g"},"CHOLE":{"label":"Cholesterol","quantity":0.0,"unit":"mg"},"NA":{"label":"Sodium","quantity":9.197933333333335,"unit":"mg"},"CA":{"label":"Calcium","quantity":119.88093333333333,"unit":"mg"},"MG":{"label":"Magnesium","quantity":110.42793333333334,"unit":"mg"},"K":{"label":"Potassium","quantity":1008.0502,"unit":"mg"},"FE":{"label":"Iron","quantity":2.6833846666666665,"unit":"mg"},"ZN":{"label":"Zinc","quantity":1.1069826666666667,"unit":"mg"},"P":{"label":"Phosphorus","quantity":75.78720000000001,"unit":"mg"},"VITA_RAE":{"label":"Vitamin A","quantity":27.325133333333337,"unit":"µg"},"VITC":{"label":"Vitamin C","quantity":440.62072,"unit":"mg"},"THIA":{"label":"Thiamin (B1)","quantity":0.7186772000000001,"unit":"mg"},"RIBF":{"label":"Riboflavin (B2)","quantity":0.2931129333333333,"unit":"mg"},"NIA":{"label":"Niacin (B3)","quantity":4.582537466666667,"unit":"mg"},"VITB6A":{"label":"Vitamin B6","quantity":1.0206208666666667,"unit":"mg"},"FOLDFE":{"label":"Folate equivalent (total)","quantity":166.2056,"unit":"µg"},"FOLFD":{"label":"Folate (food)","quantity":166.2056,"unit":"µg"},"FOLAC":{"label":"Folic acid","quantity":0.0,"unit":"µg"},"VITB12":{"label":"Vitamin B12","quantity":0.0,"unit":"µg"},"VITD":{"label":"Vitamin D","quantity":0.0,"unit":"µg"},"TOCPHA":{"label":"Vitamin E","quantity":0.2277086666666667,"unit":"mg"},"VITK1":{"label":"Vitamin K","quantity":6.893013333333333,"unit":"µg"},"WATER":{"label":"Water","quantity":791.6628726666668,"unit":"g"}},"totalDaily":{"ENERC_KCAL":{"label":"Energy","quantity":22.878693333333338,"unit":"%"},"FAT":{"label":"Fat","quantity":1.7396738461538463,"unit":"%"},"FASAT":{"label":"Saturated","quantity":0.41922899999999996,"unit":"%"},"CHOCDF":{"label":"Carbs","quantity":39.988248,"unit":"%"},"FIBTG":{"label":"Fiber","quantity":51.88522666666667,"unit":"%"},"PROCNT":{"label":"Protein","quantity":9.974134666666668,"unit":"%"},"CHOLE":{"label":"Cholesterol","quantity":0.0,"unit":"%"},"NA":{"label":"Sodium","quantity":0.3832472222222223,"unit":"%"},"CA":{"label":"Calcium","quantity":11.988093333333332,"unit":"%"},"MG":{"label":"Magnesium","quantity":26.292365079365084,"unit":"%"},"K":{"label":"Potassium","quantity":21.44787659574468,"unit":"%"},"FE":{"label":"Iron","quantity":14.907692592592591,"unit":"%"},"ZN":{"label":"Zinc","quantity":10.063478787878788,"unit":"%"},"P":{"label":"Phosphorus","quantity":10.82674285714286,"unit":"%"},"VITA_RAE":{"label":"Vitamin A","quantity":3.0361259259259263,"unit":"%"},"VITC":{"label":"Vitamin C","quantity":489.57857777777775,"unit":"%"},"THIA":{"label":"Thiamin (B1)","quantity":59.88976666666669,"unit":"%"},"RIBF":{"label":"Riboflavin (B2)","quantity":22.547148717948716,"unit":"%"},"NIA":{"label":"Niacin (B3)","quantity":28.640859166666672,"unit":"%"},"VITB6A":{"label":"Vitamin B6","quantity":78.50929743589744,"unit":"%"},"FOLDFE":{"label":"Folate equivalent (total)","quantity":41.5514,"unit":"%"},"VITB12":{"label":"Vitamin B12","quantity":0.0,"unit":"%"},"VITD":{"label":"Vitamin D","quantity":0.0,"unit":"%"},"TOCPHA":{"label":"Vitamin E","quantity":1.518057777777778,"unit":"%"},"VITK1":{"label":"Vitamin K","quantity":5.744177777777778,"unit":"%"}},"ingredients":[{"text":"1 PINEAPPLE CUT FRSH","parsed":[{"quantity":1.0,"measure":"whole","foodMatch":"PINEAPPLE","food":"pineapple","foodId":"food_b5maw38amr54vpat8d5vhbgmqfxn","weight":905.0,"retainedWeight":905.0,"nutrients":{"VITD":{"label":"Vitamin D","quantity":0.0,"unit":"IU"},"ENERC_KCAL":{"label":"Energy","quantity":452.5,"unit":"kcal"},"FASAT":{"label":"Fatty acids, total saturated","quantity":0.08145,"unit":"g"},"VITA_RAE":{"label":"Vitamin A, RAE","quantity":27.15,"unit":"µg"},"PROCNT":{"label":"Protein","quantity":4.8870000000000005,"unit":"g"},"TOCPHA":{"label":"Vitamin E (alpha-tocopherol)","quantity":0.18100000000000002,"unit":"mg"},"CHOLE":{"label":"Cholesterol","quantity":0.0,"unit":"mg"},"CHOCDF":{"label":"Carbohydrate, by difference","quantity":118.73599999999999,"unit":"g"},"FAT":{"label":"Total lipid (fat)","quantity":1.0859999999999999,"unit":"g"},"FIBTG":{"label":"Fiber, total dietary","quantity":12.67,"unit":"g"},"RIBF":{"label":"Riboflavin","quantity":0.2896,"unit":"mg"},"THIA":{"label":"Thiamin","quantity":0.7149500000000001,"unit":"mg"},"FAPU":{"label":"Fatty acids, total polyunsaturated","quantity":0.36200000000000004,"unit":"g"},"NIA":{"label":"Niacin","quantity":4.525,"unit":"mg"},"VITC":{"label":"Vitamin C, total ascorbic acid","quantity":432.59,"unit":"mg"},"FAMS":{"label":"Fatty acids, total monounsaturated","quantity":0.11764999999999999,"unit":"g"},"VITB6A":{"label":"Vitamin B-6","quantity":1.0136,"unit":"mg"},"VITB12":{"label":"Vitamin B-12","quantity":0.0,"unit":"µg"},"WATER":{"label":"Water","quantity":778.3,"unit":"g"},"K":{"label":"Potassium, K","quantity":986.45,"unit":"mg"},"P":{"label":"Phosphorus, P","quantity":72.4,"unit":"mg"},"NA":{"label":"Sodium, Na","quantity":9.05,"unit":"mg"},"ZN":{"label":"Zinc, Zn","quantity":1.0859999999999999,"unit":"mg"},"SUGAR":{"label":"Sugars, total","quantity":89.1425,"unit":"g"},"CA":{"label":"Calcium, Ca","quantity":117.65,"unit":"mg"},"MG":{"label":"Magnesium, Mg","quantity":108.6,"unit":"mg"},"FE":{"label":"Iron, Fe","quantity":2.6245,"unit":"mg"},"VITK1":{"label":"Vitamin K (phylloquinone)","quantity":6.335,"unit":"µg"},"FOLFD":{"label":"Folate, food","quantity":162.9,"unit":"µg"},"FOLAC":{"label":"Folic acid","quantity":0.0,"unit":"µg"},"FOLDFE":{"label":"Folate, DFE","quantity":162.9,"unit":"µg"}},"measureURI":"http://www.edamam.com/ontologies/edamam.owl#Measure_unit","status":"OK"}]},{"text":"1 STRAWBERRIES","parsed":[{"quantity":1.0,"measure":"whole","foodMatch":"STRAWBERRIES","food":"strawberries","foodId":"food_b4s2ibkbrrucmbabbaxhfau8ay42","weight":13.433333333333334,"retainedWeight":13.433333333333334,"nutrients":{"VITD":{"label":"Vitamin D","quantity":0.0,"unit":"IU"},"ENERC_KCAL":{"label":"Energy","quantity":4.298666666666667,"unit":"kcal"},"FASAT":{"label":"Fatty acids, total saturated","quantity":0.002015,"unit":"g"},"VITA_RAE":{"label":"Vitamin A, RAE","quantity":0.13433333333333333,"unit":"µg"},"PROCNT":{"label":"Protein","quantity":0.09000333333333334,"unit":"g"},"TOCPHA":{"label":"Vitamin E (alpha-tocopherol)","quantity":0.03895666666666667,"unit":"mg"},"CHOLE":{"label":"Cholesterol","quantity":0.0,"unit":"mg"},"CHOCDF":{"label":"Carbohydrate, by difference","quantity":1.03168,"unit":"g"},"FAT":{"label":"Total lipid (fat)","quantity":0.0403,"unit":"g"},"FIBTG":{"label":"Fiber, total dietary","quantity":0.26866666666666666,"unit":"g"},"RIBF":{"label":"Riboflavin","quantity":0.0029553333333333332,"unit":"mg"},"THIA":{"label":"Thiamin","quantity":0.0032240000000000003,"unit":"mg"},"FAPU":{"label":"Fatty acids, total polyunsaturated","quantity":0.02082166666666667,"unit":"g"},"NIA":{"label":"Niacin","quantity":0.05185266666666667,"unit":"mg"},"VITC":{"label":"Vitamin C, total ascorbic acid","quantity":7.8988,"unit":"mg"},"FAMS":{"label":"Fatty acids, total monounsaturated","quantity":0.005776333333333333,"unit":"g"},"VITB6A":{"label":"Vitamin B-6","quantity":0.006313666666666666,"unit":"mg"},"VITB12":{"label":"Vitamin B-12","quantity":0.0,"unit":"µg"},"WATER":{"label":"Water","quantity":12.217616666666668,"unit":"g"},"K":{"label":"Potassium, K","quantity":20.553,"unit":"mg"},"P":{"label":"Phosphorus, P","quantity":3.2239999999999998,"unit":"mg"},"NA":{"label":"Sodium, Na","quantity":0.13433333333333333,"unit":"mg"},"ZN":{"label":"Zinc, Zn","quantity":0.01880666666666667,"unit":"mg"},"SUGAR":{"label":"Sugars, total","quantity":0.65689,"unit":"g"},"CA":{"label":"Calcium, Ca","quantity":2.1493333333333333,"unit":"mg"},"MG":{"label":"Magnesium, Mg","quantity":1.7463333333333333,"unit":"mg"},"FE":{"label":"Iron, Fe","quantity":0.05507666666666666,"unit":"mg"},"VITK1":{"label":"Vitamin K (phylloquinone)","quantity":0.29553333333333337,"unit":"µg"},"FOLFD":{"label":"Folate, food","quantity":3.2239999999999998,"unit":"µg"},"FOLAC":{"label":"Folic acid","quantity":0.0,"unit":"µg"},"FOLDFE":{"label":"Folate, DFE","quantity":3.2239999999999998,"unit":"µg"}},"measureURI":"http://www.edamam.com/ontologies/edamam.owl#Measure_unit","status":"OK"}]},{"text":"1 BLUEBERRIES","parsed":[{"quantity":1.0,"measure":"whole","foodMatch":"BLUEBERRIES","food":"blueberries","foodId":"food_bgkl0cuasoeomtbolalmcauhha54","weight":1.36,"retainedWeight":1.36,"nutrients":{"VITD":{"label":"Vitamin D","quantity":0.0,"unit":"IU"},"ENERC_KCAL":{"label":"Energy","quantity":0.7752000000000001,"unit":"kcal"},"FASAT":{"label":"Fatty acids, total saturated","quantity":3.8080000000000004E-4,"unit":"g"},"VITA_RAE":{"label":"Vitamin A, RAE","quantity":0.0408,"unit":"µg"},"PROCNT":{"label":"Protein","quantity":0.010064,"unit":"g"},"TOCPHA":{"label":"Vitamin E (alpha-tocopherol)","quantity":0.007752,"unit":"mg"},"CHOLE":{"label":"Cholesterol","quantity":0.0,"unit":"mg"},"CHOCDF":{"label":"Carbohydrate, by difference","quantity":0.19706400000000002,"unit":"g"},"FAT":{"label":"Total lipid (fat)","quantity":0.004488000000000001,"unit":"g"},"FIBTG":{"label":"Fiber, total dietary","quantity":0.03264,"unit":"g"},"RIBF":{"label":"Riboflavin","quantity":5.576E-4,"unit":"mg"},"THIA":{"label":"Thiamin","quantity":5.032000000000001E-4,"unit":"mg"},"FAPU":{"label":"Fatty acids, total polyunsaturated","quantity":0.0019856,"unit":"g"},"NIA":{"label":"Niacin","quantity":0.0056848,"unit":"mg"},"VITC":{"label":"Vitamin C, total ascorbic acid","quantity":0.13192,"unit":"mg"},"FAMS":{"label":"Fatty acids, total monounsaturated","quantity":6.392E-4,"unit":"g"},"VITB6A":{"label":"Vitamin B-6","quantity":7.072000000000001E-4,"unit":"mg"},"VITB12":{"label":"Vitamin B-12","quantity":0.0,"unit":"µg"},"WATER":{"label":"Water","quantity":1.145256,"unit":"g"},"K":{"label":"Potassium, K","quantity":1.0472000000000001,"unit":"mg"},"P":{"label":"Phosphorus, P","quantity":0.1632,"unit":"mg"},"NA":{"label":"Sodium, Na","quantity":0.013600000000000001,"unit":"mg"},"ZN":{"label":"Zinc, Zn","quantity":0.002176,"unit":"mg"},"SUGAR":{"label":"Sugars, total","quantity":0.13545600000000002,"unit":"g"},"CA":{"label":"Calcium, Ca","quantity":0.0816,"unit":"mg"},"MG":{"label":"Magnesium, Mg","quantity":0.0816,"unit":"mg"},"FE":{"label":"Iron, Fe","quantity":0.0038080000000000006,"unit":"mg"},"VITK1":{"label":"Vitamin K (phylloquinone)","quantity":0.26248,"unit":"µg"},"FOLFD":{"label":"Folate, food","quantity":0.0816,"unit":"µg"},"FOLAC":{"label":"Folic acid","quantity":0.0,"unit":"µg"},"FOLDFE":{"label":"Folate, DFE","quantity":0.0816,"unit":"µg"}},"measureURI":"http://www.edamam.com/ontologies/edamam.owl#Measure_unit","status":"OK"}]}],"totalNutrientsKCal":{"ENERC_KCAL":{"label":"Energy","quantity":458,"unit":"kcal"},"PROCNT_KCAL":{"label":"Calories from protein","quantity":18,"unit":"kcal"},"FAT_KCAL":{"label":"Calories from fat","quantity":9,"unit":"kcal"},"CHOCDF_KCAL":{"label":"Calories from carbohydrates","quantity":431,"unit":"kcal"}}}'



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

        document.getElementById("error").innerHTML = "";
        //scrape();
        //readTextFile("test.txt");
        buildAndSendQuery();
				const obj = JSON.parse(apiResponse);
				console.log(obj);
        checkRestrictions(obj);
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
        console.log("scrape successful");
    });
}

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                scrapeResults = JSON.parse(rawFile.responseText);
								console.log(scrapeResults);
                //alert(rawFile.responseText);
            }
        }
    }
    rawFile.send(null);
}
function buildAndSendQuery() {
    scrapeResults = JSON.parse(data);
    //console.log(scrapeResults);
    var items = scrapeResults.meals.genres;
    //console.log(items);
    var ingredients = [];
    var recipe = "";
    for (var i = 0 in items) {
			//console.log(items[i]);
			for(var j = 0 in items[i].items){
	       recipe = '{ "title": "' + items[i].items[j].name + '", "ingr": [ ';
				 for(var k = 0 in items[i].items[j].ingredients){
		       ingredients = items[i].items[j].ingredients;
					 //console.log(ingredients[k]);
		       if (k == ingredients.length - 1) {
		          recipe += '"1 ' + ingredients[k] + '"';
		       } else {
		          recipe += '"1 ' + ingredients[k] + '",';
		       }
				}
				recipe += ' ] }';
	 		 //console.log(recipe);
	 		 makeCorsRequest(recipe);
			 if(i == 1){
				 break;
			 }
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
				console.log(obj);
        checkRestrictions(obj);
    };

    xhr.onerror = function() {
        alert('Woops, there was an error making the request.');
    };

    
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(recipe);
}

function checkRestrictions(obj) {
    var flag = false;
		var first = false;
		document.getElementById("results").innerHTML = '';
		document.getElementById("results").innerHTML += '<table class="table table-bordered table-hover" style="width: 75%;margin-left: auto;margin-right: auto;"> <thead> <tr> <th scope="col">Dish</th> <th scope="col">Ingredients</th> </tr> </thead> <tbody> <tr> <td>Broccoli Florettes</td> <td>WATER, BROCCOLI FLORETTES, OLIVE OIL, SALT</td> </tr> <tr> <td>Diced Tofu</td> <td>		WATER, SOYBEANS, CALCIUM SULFATE, CALCIUM CHLORIDE</td> </tr> <tr> <td>French Fries</td> <td>NATURAL CUT POTATOES, CANOLA OIL, SALT, PEPPER</td> </tr> <tr> <td>Fresh Fruit Cup</td> <td>FRESH CUT PINEAPPLE, STRAWBERRIES, BLUEBERRIES</td> </tr> <tr> <td>Vegan Black Bean Burger</td> <td>WATER, COOKED BLACK BEANS, COOKED BROWN RICE, ONION, CORN, ROASTED VEGETABLES</td> </tr> </tbody> </table>';
    for (var i = 0 in restrictionsChosen) {
			console.log("checkpoint 1");
        if (restrictionsChosen[i] && obj.healthLabels.includes(restrictions[i])) {
					console.log("checkpoint 2");
            flag = true;
            if (first) {
							console.log("checkpoint 3");
							document.getElementById("results").innerHTML += '<table class="table table-bordered table-hover" style="width: 75%;margin-left: auto;margin-right: auto;"> <thead> <tr> <th scope="col">Dish</th> <th scope="col">Ingredients</th> </tr> </thead> <tbody>';
								first = false;
            } else {
							console.log("checkpoint 4");
                // document.getElementById("results").innerHTML = '<tr>';
                // document.getElementById("results").innerHTML += '<td>oop</td>';//lastItem.name;
                // document.getElementById("results").innerHTML += '<td>opp</td>';
								// document.getElementById("results").innerHTML += '</tr>';
                // for (var j = 0 in lastItem[i].ingredients) {
                    // if (j == lastItem[i].ingredients.length - 1) {
                    //     document.getElementById("results").innerHTML += lastItem.ingredients;
                    // } else {
                    //     document.getElementById("results").innerHTML += lastItem.ingredients + ', ';
                    // }
               // }
            }
        }
    }

    if (flag) {
			console.log(flag);
			//document.getElementById("results").innerHTML += '</tbody></table></div>';
    }

}