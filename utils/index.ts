import { ForFetch } from "@/types";

//https://api.spoonacular.com/food/menuItems/search
export default async function fetchFood({req, res}: ForFetch) {
	try {
	  const apiKey = "ea368868650145f9bcba1c8f3c8d35b0"; 
	  const targetCalories = req.query.calories; 
	  const targetMeal = req.query.food	
  
	  const response = await fetch(
		`https://api.spoonacular.com/mealplanner/generate?apiKey=${apiKey}&targetMeal=${targetMeal}&targetCalories=${targetCalories}`
	  );
  
	  if (!response.ok) {
		throw new Error("Failed to fetch meal data");
	  }
  
	  const data = await response.json();
  
	  res.status(200).json(data);
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ error: "An error occurred" });
	}
  }
