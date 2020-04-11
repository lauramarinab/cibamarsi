import * as React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { FrontmatterRecipe } from '../type/FrontmatterRecipe'
import { sortBy } from 'lodash'
import TitleRecipe from '../components/TitleRecipe'
import { MarqueeRecipe } from '../UI/MarqueeRecipe'
import { ProvidersWrapper } from '../providers/ProvidersWrapper'

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
    <ProvidersWrapper>
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords }
          ]}
        />
        <MarqueeRecipe groupWords={[recipe.frontmatter.difficulty, recipe.frontmatter.title, recipe.frontmatter.category]} />
        <TitleRecipe text={recipe.frontmatter.title} />
        <div style={{ marginTop: 20 }} dangerouslySetInnerHTML={{ __html: recipe.html }} />
        {coverImage && <img style={{ width: 500 }} src={coverImage.url.childImageSharp.resize.src} />}
        {orderedProcessImages.length > 0 && (
          <>
            {orderedProcessImages.map((img, i) => (
              <div key={i}>
                <span>{i + 1}</span>
                <img key={i} style={{ width: 100 }} src={img.url.childImageSharp.resize.src} />
              </div>
            ))}
          </>
        )}
      </div>
    </ProvidersWrapper>
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
