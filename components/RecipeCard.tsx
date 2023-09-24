import { RecipeCardProps } from '@/types'

interface ForRecipeCardProps{
  recipe: RecipeCardProps
}

const RecipeCard = ({ recipe }: ForRecipeCardProps) => {
  
  const { label, image, ingredients, instructions, calories } = recipe?.recipe

  return (
    <div>{label}</div>
  )
}

export default RecipeCard