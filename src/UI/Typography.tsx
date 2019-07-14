import styled from 'styled-components'
import { fonts } from '../styles/variables'
import { Link } from 'gatsby'

const Dida = styled.p`
  font-family: ${fonts.monospace};
  font-size: 18px;
  color: #2c2c2c;
  user-select: none;
`

const TitleRecipe = styled.h3`
  color: purple;
`

const LinkStyled = styled(Link)`
  text-decoration: none;
`

export { Dida, TitleRecipe, LinkStyled }
