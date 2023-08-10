
export async function fetchFood() {
   const url = 'https://pizza-and-desserts.p.rapidapi.com/desserts/1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '650fb79ca9mshba0792dddafda81p1f4bd4jsn43bcbc367a30',
            'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
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
