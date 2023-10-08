import { FilterProps } from "@/types"

export async function fetchFood(filter: FilterProps) {
  
  const { query, diet, limit } = filter
  
  const url =
    `https://api.edamam.com/search?q=${query}&diet=${diet}&app_id=54f7ff7b&app_key=01b9fdb350088df3d85e27727c46b080&from=0&to=${limit}`//limt

    const response = await fetch(url)
    const result = await response.json()
    console.log(result.hits)
    return result?.hits
  
}


