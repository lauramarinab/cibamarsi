import styled from 'styled-components'
import { fonts, colors } from '../styles/variables'
import { Link } from 'gatsby'

const Dida = styled.p`
  font-family: ${fonts.monospace};
  font-size: 18px;
  color: #2c2c2c;
  user-select: none;
`

const TitleRecipe = styled.h3`
  font-family: 'Fira Code Bold';
  font-size: 20px;
  color: ${colors.rgb.blu};
`

const Difficulty = styled.h5`
  font-family: 'Fira Code Medium';
  font-size: 15px;
  color: ${colors.grigio.medium};
`

const LinkStyled = styled(Link)`
  text-decoration: none;
`

export { Dida, TitleRecipe, LinkStyled, Difficulty }
