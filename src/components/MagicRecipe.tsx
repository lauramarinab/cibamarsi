import * as React from 'react'
import mestolo from '../assets/icon/mestolo.svg'
import stelline_a from '../assets/icon/stelline1.svg'
import stelline_b from '../assets/icon/stelline2.svg'
import styled from 'styled-components'
import { LinkStyled } from '../UI/Typography'

const Mestolo = styled.img`
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 20px;
  width: 100px;
`

const Stelline = styled.img`
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 20px;
`

interface Props {
  linkTo: string
}

const MagicRecipe: React.FC<Props> = ({ linkTo }) => {
  const [state, setState] = React.useState({
    isOver: false,
    isMagic: false
  })

  // const stellineIntervalRef = React.useRef(
  //   setInterval(() => {
  //     setState(state => ({ ...state, isMagic: !state.isMagic }))
  //   }, 8000)
  // )

  // const onOverMagicWand = () => {
  //   stellineIntervalRef.current
  // }

  // const onOutMagicWand = () => {
  //   clearInterval(stellineIntervalRef.current)
  // }

  // React.useEffect(() => {
  //   if (state.isOver) {
  //     onOverMagicWand()
  //   }
  //   if (!state.isOver) {
  //     onOutMagicWand()
  //   }
  // }, [state.isOver])

  // console.log('isOver', state.isOver)

  return (
    <LinkStyled
      to={linkTo}
      style={{ position: 'absolute', right: 0, top: 0, width: 110, height: 120 }}
      onMouseOver={() => setState({ ...state, isOver: true })}
      onMouseOut={() => setState({ ...state, isOver: false })}
    >
      <Mestolo src={mestolo} />
      {!state.isMagic && <Stelline src={stelline_a} />}
      {state.isMagic && <Stelline src={stelline_b} />}
    </LinkStyled>
  )
}

export default MagicRecipe
