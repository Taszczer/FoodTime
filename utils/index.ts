export async function fetchFood(filter:any) {
  
  const { query, limit } = filter
  
  const url =
    `https://api.edamam.com/search?q=Five Napkin Burger&app_id=54f7ff7b&app_key=01b9fdb350088df3d85e27727c46b080&from=0&to=20`//limt

  try {
    const response = await fetch(url)
    const result = await response.json()
    console.log(result)
  } catch (error) {
    console.error(error)
  }

}
