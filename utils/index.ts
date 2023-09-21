export async function fetchFood() {
  
  const url = 'https://tasty.p.rapidapi.com/feeds/list?size=5&timezone=%2B0700&vegetarian=false&from=0';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '650fb79ca9mshba0792dddafda81p1f4bd4jsn43bcbc367a30',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
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





// import useSWR from 'swr';

// const API_KEY = '650fb79ca9mshba0792dddafda81p1f4bd4jsn43bcbc367a30';
// const API_URL = `https://api.spoonacular.com/food/menuItems/search?apiKey=${API_KEY}`

// export const fetcher = async (url:any) => {
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '650fb79ca9mshba0792dddafda81p1f4bd4jsn43bcbc367a30',
//       'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
//     }
//   };

//   const response = await fetch(url, options)
//   const data = await response.json()

//   if (!response.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return data
// }

// const YourComponent = () => {
//   const { data, error } = useSWR(API_URL, fetcher);

//   if (error) {
//     console.error('Error loading data:', error);
//     return "Error loading data";
//   }

//   if (!data) {
//     console.log('Loading data...')
//     return "Loading data..."
//   }

//   return data; 
// };

// export default YourComponent