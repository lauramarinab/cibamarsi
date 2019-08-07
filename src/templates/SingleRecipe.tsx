import * as React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { FrontmatterRecipe } from '../type/FrontmatterRecipe'
import { sortBy } from 'lodash'

interface PageTemplateProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
  markdownRemark: {
    html: string
    frontmatter: FrontmatterRecipe
  }
}

const Recipe: React.FC<{ data: PageTemplateProps }> = ({ data }) => {
  const recipe = data.markdownRemark

  const image = recipe.frontmatter.image
  const coverImage = image ? image.find(i => i.type === 'cover') : null

  const processImages = image ? image.filter(i => i.type === 'process') : null
  const orderedProcessImages = sortBy(processImages, 'position')
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: data.site.siteMetadata.keywords }
        ]}
      />
      <h1>{recipe.frontmatter.title}</h1>
      <p>{recipe.frontmatter.difficulty}</p>
      <div style={{ marginTop: 20 }} dangerouslySetInnerHTML={{ __html: recipe.html }} />
      {coverImage && <img style={{ width: 100 }} src={coverImage.url.childImageSharp.resize.src} />}
      {orderedProcessImages.length > 0 && (
        <div>
          {orderedProcessImages.map((img, i) => (
            <>
              <span>{i + 1}</span>
              <img key={i} style={{ width: 100 }} src={img.url.childImageSharp.resize.src} />
            </>
          ))}
        </div>
      )}
    </div>
  )
}

export default Recipe

export const recipeQuery = graphql`
  query RecipeQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        ...frontmatter
      }
    }
  }
`
