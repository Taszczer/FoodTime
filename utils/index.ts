import useSWR from 'swr';

const API_KEY = 'ea368868650145f9bcba1c8f3c8d35b0';
const API_URL = `https://api.spoonacular.com/food/menuItems/search?apiKey=${API_KEY}`

export const fetcher = async (url: any) => {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Api-Key': 'ea368868650145f9bcba1c8f3c8d35b0'
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  return data;
}

const YourComponent = () => {
  const { data, error } = useSWR(API_URL, fetcher)

  if (error) {
    console.error('Error loading data:', error)
  }

  if (!data) {
    console.log('Loading data...')
    return "Nothing to show";
  }

  console.log('Fetched data:', data)

  return data; 
};

export default YourComponent