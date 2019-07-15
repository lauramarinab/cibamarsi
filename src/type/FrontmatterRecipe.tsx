export interface FrontmatterRecipe {
  title: string
  description: string
  date: string
  difficulty: string
  category: string
  tags: string
  image?: {
    childImageSharp: {
      resize: {
        src: string
      }
      fluid: {
        src: string
      }
    }
  }
}
