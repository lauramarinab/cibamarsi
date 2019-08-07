import styled from 'styled-components'

const WrapperImg = styled.div<{ shadowColor?: string }>`
  width: 100%;
  height: 100%;
  background: #f3f3f3;
  box-shadow: ${props => `15px 15px 0px 0px ${props.shadowColor}`};
  margin-bottom: 30px;
  cursor: pointer;
  object-fit: contain;
`

const RecipeImg = styled.img`
  width: 100%;
  height: 100%;
`

export { WrapperImg, RecipeImg }
