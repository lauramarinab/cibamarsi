import * as React from 'react'
import { EdgeNodeRecipe } from '../type/EdgeNodeRecipe'
import { LinkStyled } from '../UI/Typography'

const RecipeList: React.FC<{ recipes: Array<EdgeNodeRecipe> }> = ({ recipes }) => {
  return (
    <>
      {recipes.map(r => {
        const recipe = r.node

        return (
          <div key={recipe.fields.slug}>
            <LinkStyled to={recipe.fields.slug}>
              <span>{recipe.frontmatter.title}</span>
            </LinkStyled>
          </div>
        )
      })}
    </>
  )
}

export default RecipeList
