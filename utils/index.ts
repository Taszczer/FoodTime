
import axios from 'axios'

export default async function fetchFood(setManufacturer: string, calories?: string) {
  
  const apiKey = "ea368868650145f9bcba1c8f3c8d35b0";
  const apiUrl = "https://api.spoonacular.com/food/menuItems"
  
  try {
    const response = await axios.get(
      `${apiUrl}/search?apiKey=${apiKey}&manufacturer=${setManufacturer}&calories=${calories}`, {
        params: {
          apiKey,
          setManufacturer,
          calories
        },
      }
    );
    return response.data;
    console.log (response.data)

  } catch (error) {
    console.error(error);
    throw error
    
  }
}
