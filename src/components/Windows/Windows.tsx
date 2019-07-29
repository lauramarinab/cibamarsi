import * as React from 'react'
import { WrapperWindows, BodyWindows, HeadWindows, ActionButtonWindows } from './styles'
import { Dida } from '../../UI/Typography'
import { colors } from '../../styles/variables'

const reduceIcon = require('../../assets/icon/reduce-window.svg')
const zoomIcon = require('../../assets/icon/zoom-window.svg')

interface Props {
  onClickClose?: () => void
  onClickAsk?: () => void
  onClickReduce?: () => void
  onClickZoom?: () => void
  style?: React.CSSProperties
  bodyWindows?: JSX.Element
  headerLabel?: String
}

const Windows: React.FC<Props> = ({ onClickClose, onClickAsk, onClickReduce, onClickZoom, style, headerLabel, bodyWindows }) => {
  return (
    <WrapperWindows style={style}>
      <HeadWindows>
        <Dida style={{ color: colors.bianco, letterSpacing: 0.5 }}>
          {headerLabel ? (
            headerLabel
          ) : (
            <>
              <span style={{ fontSize: 10 }}>🍝</span> Windows
            </>
          )}
        </Dida>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {onClickReduce && (
            <ActionButtonWindows onClick={onClickReduce} style={{ marginRight: 3 }}>
              <img src={reduceIcon} style={{ width: 9, position: 'relative', right: 1 }} />
            </ActionButtonWindows>
          )}
          {onClickZoom && (
            <ActionButtonWindows onClick={onClickZoom} style={{ marginRight: 3 }}>
              <img src={zoomIcon} style={{ width: 10, position: 'relative', top: 1 }} />
            </ActionButtonWindows>
          )}
          {onClickAsk && (
            <ActionButtonWindows onClick={onClickAsk} style={{ marginRight: 3 }}>
              ?
            </ActionButtonWindows>
          )}
          {onClickClose && (
            <ActionButtonWindows onClick={onClickClose} style={{ marginRight: 3 }}>
              X
            </ActionButtonWindows>
          )}
        </div>
      </HeadWindows>
      <BodyWindows>{bodyWindows}</BodyWindows>
    </WrapperWindows>
  )
}

export default Windows
