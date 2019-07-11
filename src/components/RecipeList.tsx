import * as React from 'react'
import { Link } from 'gatsby'

const RecipeList: React.FC<{ recipes: Array<any> }> = ({ recipes }) => {
  return (
    <>
      {recipes.map(r => {
        const recipe = r.node

        return (
          <div key={recipe.fields.slug}>
            <Link to={recipe.fields.slug}>
              <span>{recipe.frontmatter.title}</span>
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default RecipeList
