import { graphql } from 'gatsby'

export const FRONTMATTER_CONTENT = graphql`
  fragment frontmatter on MarkdownRemarkFrontmatter {
    title
    description
    date
    difficulty
    category
    tags
    ingredients
    servings
    image {
      type
      position
      url {
        childImageSharp {
          resize(width: 960, height: 540) {
            src
          }
          fluid(maxWidth: 786) {
            src
          }
        }
      }
    }
  }
`
