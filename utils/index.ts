export async function fetchFood() {
    const url = 'https://menumy-menu-api3.p.rapidapi.com/search/store/v3?latitude=37.7786357&longitude=-122.3918135&search_focus=store&maximum_miles=3&user_state=CA&user_street_name=King%20Street&user_zipcode=94107&sort=relevance&user_country=US&user_street_num=188&store_type=restaurant&user_city=San%20Francisco&budget=20';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '650fb79ca9mshba0792dddafda81p1f4bd4jsn43bcbc367a30',
		'X-RapidAPI-Host': 'menumy-menu-api3.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}