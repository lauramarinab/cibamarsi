import styled from 'styled-components'

const WrapperImg = styled.div<{ shadowColor?: string }>`
  width: 300px;
  height: 200px;
  background: #f3f3f3;
  box-shadow: ${props => `15px 15px 0px 0px ${props.shadowColor}`};
  margin-bottom: 30px;
  cursor: pointer;
`

const RecipeImg = styled.img`
  width: 300px;
  height: 100%;
`

export { WrapperImg, RecipeImg }
