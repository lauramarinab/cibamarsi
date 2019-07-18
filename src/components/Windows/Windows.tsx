import * as React from 'react'
import { WrapperWindows, ButtonWindows, BodyWindows, HeadWindows } from './styles'
import { Dida } from '../../UI/Typography'

interface Props {
  onClickClose?: () => void
  onClickAsk?: () => void
  style?: React.CSSProperties
  headerActions?: JSX.Element
  bodyWindows?: JSX.Element
  headerLabel?: String
}

const Windows: React.FC<Props> = ({ onClickClose, onClickAsk, style, headerActions, headerLabel, bodyWindows }) => {
  return (
    <WrapperWindows style={style}>
      <HeadWindows>
        <Dida style={{ color: '#fff' }}>
          {headerLabel ? (
            headerLabel
          ) : (
            <>
              <span style={{ fontSize: 10 }}>🍝</span> Windows
            </>
          )}
        </Dida>
        {headerActions ? (
          headerActions
        ) : (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ButtonWindows style={{ marginRight: 3 }} onClick={onClickAsk}>
              ?
            </ButtonWindows>
            <ButtonWindows onClick={onClickClose}>X</ButtonWindows>
          </div>
        )}
      </HeadWindows>
      <BodyWindows>{bodyWindows}</BodyWindows>
    </WrapperWindows>
  )
}

export default Windows
