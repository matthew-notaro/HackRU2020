#!/usr/bin/python3
from bs4 import BeautifulSoup
from re import compile
try:
	from urllib2 import urlopen
except:
	from urllib.request import urlopen

ingredientSplit = compile(r'(?:[^,(]|\([^)]*\))+')
URL_PREFIX = "http://menuportal.dining.rutgers.edu/foodpro/"

def scrapeNutritionReport(url):
	"""Scrapes a Nutrition Report page, returns name, serving, calories, ingredients"""
	page = urlopen(url).read()
	soup = BeautifulSoup(page, "html.parser")
	ret = {}

	# Get item name
	try:
		ret['name'] = soup.find_all("h2")[2].string
	except AttributeError:
		pass
	
	# Get serving size
	try:
		ret['serving'] = soup.find(id="facts").find("p", "").string[len("Serving Size "):]
	except AttributeError:
		pass

	# Get calorie count.
	try:
		ret['calories'] = int(soup.find(id="facts").find("p", "strong").string[len("Calories "):])
	except AttributeError:
		pass

	# Get ingredient list
	# try:
	# 	e = soup.find(text=compile("INGREDIENTS")).parent
	# 	p = e.parent
	# 	e.decompose()
	# 	ret['ingredients'] = [ing.strip() for ing in ingredientSplit.findall(p.string)]
	# except AttributeError:
	# 	pass

	return ret

def scrapeMeal(url, dicts=0):
	"""Parses meal, calls for scraping of each nutrition facts"""
	ret={}
	page = urlopen(url).read()
	soup = BeautifulSoup(page, "html.parser")
	soup.prettify()
	for link in soup.find("div", "menuBox").find_all("a", href=True):
		category = link.find_previous("p", style="margin: 3px 0;").string[3:-3]
		if not ret.get(category):
			ret[category]=[]
		ret[category].append(scrapeNutritionReport(URL_PREFIX+link['href']))
	if dicts:
		return ret
	else:
		return [{
			"genre_name" : category,
			"items" : ret[category]
		} for category in ret.keys()]

def scrapeCampus(meal, url, dicts=0):
	"""Calls for the scraping of the meals of a campus"""
	meals = ('Breakfast', 'Lunch', 'Dinner', 'Knight Room')
	if meal == 'Breakfast':
		mealNum = 0
	elif meal == 'Lunch':
		mealNum = 1
	elif meal == 'Dinner':
		mealNum = 2
	else:
		mealNum = 3

	if dicts:
		return {meals[mealNum]: scrapeMeal(url + "&mealName=" + meals[mealNum].replace(' ', '+'))}
	else:
		return {
			"meal_name" : meals[mealNum],
			"genres" : scrapeMeal(url + "&mealName=" + meals[mealNum].replace(' ', '+'), dicts=0)
		}

def scrape(location , meal, dicts=0):
	"""Calls for the scraping of the menus of each campus"""
	prefix = URL_PREFIX + "pickmenu.asp?locationNum=0"
	# There doesn't seem to be a hall #2
	halls = (('Brower Commons', '1'), ('Livingston Dining Commons', '3'),
	         ('Busch Dining Hall', '4'), ('Neilson Dining Hall', '5'))
	# Assigns value based on input location
	if location == 'Brower':
		locationNum = 0
	elif location == 'Livingston':
		locationNum = 1
	elif location == 'Busch':
		locationNum = 2
	else:
		locationNum = 3
	
	if dicts:
		return {halls[locationNum][0]: scrapeCampus(prefix + halls[locationNum][1])}
	else:
		return {
			"location_name" : halls[locationNum][0],
			"meals" : scrapeCampus(meal, prefix + halls[locationNum][1], dicts=0)
		}


if __name__=="__main__":
	import json
	import sys
	from argparse import ArgumentParser, FileType

	parser = ArgumentParser(prog='RU Food Scraper', description='Scrape the Rutgers ' +
                        'Dining Website for nutritional information\n' +
                        'Prints output as json.')
	parser.add_argument('outfile', nargs='?', type=FileType('w'), default="test.txt",
	                    help="Output file (defaults to stdout).")
	parser.add_argument('--fancy', dest='fancy', action='store_true', default=False)
	parser.add_argument('--dicts', dest='dicts', action='store_true', default=False)
	parser.add_argument('location', action='store', default=False)
	parser.add_argument('meal', action='store', default=False)

	args = parser.parse_args()
	json.dump(scrape(args.location, args.meal, dicts=args.dicts), args.outfile, indent=(1 if args.fancy else None))
	args.outfile.close()