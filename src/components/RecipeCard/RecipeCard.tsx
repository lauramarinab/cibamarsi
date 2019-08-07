import * as React from 'react'
import { EdgeNodeRecipe } from '../../type/EdgeNodeRecipe'
import { WrapperImg, RecipeImg } from './styles'
import { TitleRecipe, LinkStyled, Difficulty } from '../../UI/Typography'
import { colors } from '../../styles/variables'
import { getIconFromDifficulty } from '../../utils/getIconFromDifficulty'

interface Props {
  selectedRecipe: EdgeNodeRecipe
  linkTo: string
  style?: React.CSSProperties
}

interface State {
  overImage: boolean
}

const RecipeCard: React.FC<Props> = ({ selectedRecipe, linkTo, style }) => {
  const [state, setState] = React.useState<State>({
    overImage: false
  })

  const recipe = selectedRecipe.node
  const image = recipe.frontmatter.image

  const shadowColor = state.overImage ? colors.pastello.lilla : colors.pastello.verdino

  const coverImage = image ? image.find(i => i.type === 'cover') : null

  return (
    <LinkStyled to={linkTo} style={style}>
      <div
        onMouseOver={() => setState({ overImage: true })}
        onMouseOut={() => setState({ overImage: false })}
        style={{ width: 350, height: 220 }}
      >
        <WrapperImg shadowColor={shadowColor}>{coverImage && <RecipeImg src={coverImage.url.childImageSharp.resize.src} />}</WrapperImg>
        <TitleRecipe>{recipe.frontmatter.title}</TitleRecipe>
        <Difficulty style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
          <span style={{ marginLeft: 10, marginRight: 5 }}>{getIconFromDifficulty(recipe.frontmatter.difficulty)}</span>
          {recipe.frontmatter.difficulty}
        </Difficulty>
      </div>
    </LinkStyled>
  )
}

export default RecipeCard
