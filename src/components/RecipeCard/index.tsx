import * as React from 'react'
import { EdgeNodeRecipe } from '../../type/EdgeNodeRecipe'

interface Props {
  selectedRecipe: EdgeNodeRecipe
}

const RecipeCard: React.FC<Props> = ({ selectedRecipe }) => {
  const recipe = selectedRecipe.node

  return (
    <div>
      <span>{recipe.frontmatter.title}</span>
    </div>
  )
}

export default RecipeCard
