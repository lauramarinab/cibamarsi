import * as React from 'react'
import { EdgeNodeRecipe } from '../../type/EdgeNodeRecipe'
import { WrapperImg, RecipeImg } from './styles'
import { TitleRecipe, LinkStyled } from '../../UI/Typography'

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

  const shadowColor = state.overImage ? '#C5A3D7' : '#F15A24'

  return (
    <LinkStyled to={linkTo} style={style}>
      <div onMouseOver={() => setState({ overImage: true })} onMouseOut={() => setState({ overImage: false })}>
        <WrapperImg shadowColor={shadowColor}>{image && <RecipeImg src={image.childImageSharp.resize.src} />}</WrapperImg>
        <TitleRecipe style={{ color: '#5226EF' }}>{recipe.frontmatter.title}</TitleRecipe>
      </div>
    </LinkStyled>
  )
}

export default RecipeCard
