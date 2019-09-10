import * as React from 'react'
import Windows from './Windows'
import { Dida } from '../UI/Typography'
import { ButtonWindows } from './Windows/styles'
import styled from 'styled-components'

const DidaStyled = styled(Dida)`
  margin-right: 8px;
  font-size: 15px;
  user-select: none;
`

interface State {
  clickButtonType: 'like' | 'share' | 'comment' | null
  isChangeWindowsSize: boolean
}

const InstagramExe: React.FC = () => {
  const [state, setState] = React.useState<State>({ clickButtonType: null, isChangeWindowsSize: false })
  console.log(state)

  const windowsWidth = state.isChangeWindowsSize ? { width: 330 } : { width: '' }

  return (
    <Windows
      style={{
        ...windowsWidth,
        transition: 'width 0.5s linear',
        justifySelf: 'center',
        alignSelf: 'center',
        gridColumnStart: 1,
        gridColumnEnd: 3,
        gridRowStart: 1,
        gridRowEnd: 4
      }}
      onClickZoom={() => setState(state => ({ ...state, isChangeWindowsSize: !state.isChangeWindowsSize }))}
      headerLabel="Instagram.exe"
      bodyWindows={
        <div>
          <div style={{ display: 'flex', marginBottom: 10 }}>
            <DidaStyled>File</DidaStyled>
            <DidaStyled>Edit</DidaStyled>
            <DidaStyled>View</DidaStyled>
            <DidaStyled>Options</DidaStyled>
            <DidaStyled>Help</DidaStyled>
          </div>
          <a href="https://www.instagram.com/p/B1ZOpJ2oowz/" target="_blank">
            <img style={{ width: '100%', marginBottom: 5 }} src="https://www.instagram.com/p/B1ZOpJ2oowz/media" />
          </a>
          <div style={{ display: 'flex', marginBottom: 5 }}>
            <ButtonWindows onClick={() => setState({ ...state, clickButtonType: 'like' })}>Like</ButtonWindows>
            <ButtonWindows onClick={() => setState({ ...state, clickButtonType: 'comment' })}>Comment</ButtonWindows>
            <ButtonWindows onClick={() => setState({ ...state, clickButtonType: 'share' })}>Share</ButtonWindows>
          </div>
          <a href="https://www.instagram.com/laura.marina.b/" target="_blank">
            <Dida>laura.marina.b</Dida>
          </a>
        </div>
      }
    />
  )
}

export default InstagramExe
