import { FrontmatterRecipe } from './FrontmatterRecipe'

export interface EdgeNodeRecipe {
  node: {
    excerpt: string
    fields: {
      slug: string
      layout: string
    }
    frontmatter: FrontmatterRecipe
  }
}
