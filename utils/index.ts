import { FilterProps } from "@/types"

export async function fetchFood(filters: FilterProps) {

	const { manufacturer} = filters 

	const headers = {
		'X-RapidAPI-Key': 'ea368868650145f9bcba1c8f3c8d35b0',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}

	const response = await fetch(`https://api.spoonacular.com/food/menuItems/search?make=${manufacturer}`)
	const result = await response.json()

	return result
}