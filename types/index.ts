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
  calories: number | null
}

export interface RecipeCardProps {
  recipe: {
    label: string
    image: any
    ingredients: string
    dietLabels: string
    calories: number
  }
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