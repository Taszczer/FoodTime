export async function fetchFood() {

	const headers = {
		'X-RapidAPI-Key': 'ea368868650145f9bcba1c8f3c8d35b0',
		'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
	}

	const response = await fetch('https://api.spoonacular.com/food/menuItems/search')
	const result = await response.json()

	return result
}