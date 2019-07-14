export interface EdgeNodeRecipe {
  node: {
    excerpt: string
    fields: {
      slug: string
      layout: string
    }
    frontmatter: {
      title: string
      category: string
      description: string
      difficulty: string
      tags: string
    }
  }
}
