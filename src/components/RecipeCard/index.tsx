import * as React from 'react'
import { EdgeNodeRecipe } from '../../type/EdgeNodeRecipe'
import { Wrapper } from './styles'

interface Props {
  selectedRecipe: EdgeNodeRecipe
}

const RecipeCard: React.FC<Props> = ({ selectedRecipe }) => {
  const recipe = selectedRecipe.node

  return (
    <Wrapper>
      {/* <img src={recipe.frontmatter}/> */}
      <span>{recipe.frontmatter.title}</span>
    </Wrapper>
  )
}

export default RecipeCard
