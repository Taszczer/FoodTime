import { NextApiRequest, NextApiResponse } from "next"

export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
  
export interface Background {
  id: number
  title: string
  butOn: string
  colorForBt: string
  product: string
  imageUrl: string
  colors: string
  backImage:string
}

export interface SearchManufacturerProps {
  selected: string
  setSelected: (selected: string) => void
}

export interface FilterProps {
  query: string
  limit: number
  diet: string
}

export interface RecipeCardProps {
  recipe: {
    label: string
    image: any
    ingredients: Array<{
      text: string
      quantity: string
      measure: string
      food: string
      weight: number
    }>
    dietLabels: string
    calories: number
    cautions: string
    cuisineType:string
  };
}

export interface ShowMoreProps {
  pageNumber: number
  isNext: boolean
  setLimit: any
}

export interface OptionProps {
  title: string
  value: string
}

export interface CustomFilterProps {
  title: string
  options: OptionProps[] 
  setFilter: any
}