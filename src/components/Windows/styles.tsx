import styled from 'styled-components'
import { colors } from '../../styles/variables'

const WrapperWindows = styled.div<{ width?: number }>`
  width: ${props => (props.width ? `${props.width}px` : '250px')};
  background: ${colors.grigio.medium};
  border-width: 2px;
  border-color: ${colors.grigio.light} ${colors.grigio.dark} ${colors.grigio.dark} ${colors.grigio.light};
  border-style: solid;
  position: relative;
  padding: 2px;
`

const HeadWindows = styled.div`
  padding: 2px 2px 2px 5px;
  width: 100%;
  background: ${colors.rgb.blu};
  color: ${colors.bianco};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ButtonWindows = styled.button`
  margin: 2px 2px 2px 0;
  width: 16px;
  height: 16px;
  background: ${colors.grigio.medium};
  border-width: 2px;
  border-color: ${colors.bianco} ${colors.grigio.dark} ${colors.grigio.dark} ${colors.bianco};
  font-size: 10px;
  font-weight: bold;
  font-family: Tahoma;
  cursor: pointer;
`

const BodyWindows = styled.div`
  padding: 13px 12px 12px;
  height: 100%;
  width: 100%;
  display: inline-block;
  font-family: 'VT323', monospace;
`

export { WrapperWindows, ButtonWindows, BodyWindows, HeadWindows }
