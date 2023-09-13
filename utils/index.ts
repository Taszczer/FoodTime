import useSWR from 'swr';
import axios from 'axios';

const fetcher = async (url: any) => {
  try {
    const response = await axios.get(url)
    return response.data, console.log(response.data)
  } catch (error) {
    console.error(error)
    throw error
  }
};

const apiKey = "ea368868650145f9bcba1c8f3c8d35b0";
const apiUrl = "https://api.spoonacular.com/food/menuItems";

export default function useFetchFood(setManufacturer: string, calories?: string) {
  const url = `${apiUrl}/search?apiKey=${apiKey}&query=${setManufacturer}&calories=${calories}`

  const { data, error } = useSWR(url, fetcher)

  return {
    data,
    isError: error,
  };
}