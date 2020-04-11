import { Difficulty } from './Difficulty'
import { Category } from './Category'

export interface ChildImageSharp {
  childImageSharp: {
    resize: {
      src: string
    }
    fluid: {
      src: string
    }
  }
}

export interface Image {
  type: 'cover' | 'process'
  position?: number
  url: ChildImageSharp
}

export interface FrontmatterRecipe {
  title: string
  description: string
  date: string
  difficulty: Difficulty
  servings?: number
  category: Category
  tags: Array<string>
  ingredients: Array<string>
  image: Array<Image>
}
