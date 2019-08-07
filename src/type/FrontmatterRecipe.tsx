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
  difficulty: string
  servings?: number
  category: string
  tags: Array<string>
  ingredients: Array<string>
  image: Array<Image>
}
