import { FilterProps } from "@/types"

let easing = [0.6, -0.05, 0.01, 0.99];

export async function fetchFood(filter: FilterProps) {
  
  const { query, diet, limit,} = filter
  
  const url =
    `https://api.edamam.com/search?q=${query}&diet=${diet}&app_id=54f7ff7b&app_key=01b9fdb350088df3d85e27727c46b080&from=0&to=${limit}`//limt

    const response = await fetch(url)
    const result = await response.json()
    console.log(result.hits)
    return result?.hits
  
}

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
}

export const secondfadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.1, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
}

export const fadeInLeft = {
  initial: {
    x: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
}