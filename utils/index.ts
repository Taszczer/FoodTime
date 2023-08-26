export async function fetchFood() {
	//const {....}

	const headers = {
		'X-RapidAPI-Key': '650fb79ca9mshba0792dddafda81p1f4bd4jsn43bcbc367a30',
		'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
	}

	const response = await fetch('https://pizza-and-desserts.p.rapidapi.com/pizzas')
	const result = await response.json()

	return result
}
