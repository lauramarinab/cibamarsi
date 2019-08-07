import styled from 'styled-components'
import { colors, fonts } from '../../styles/variables'

const WrapperWindows = styled.div<{ width?: number }>`
  width: ${props => (props.width ? `${props.width}px` : '250px')};
  background: ${colors.grigio.medium};
  border-width: 2px;
  border-color: ${colors.grigio.light} ${colors.grigio.dark} ${colors.grigio.dark} ${colors.grigio.light};
  border-style: solid;
  position: relative;
  padding: 2px;
  display: inline-table;
`

const HeadWindows = styled.div`
  padding: 2px 2px 2px 5px;
  width: 100%;
  background: ${colors.rgb.blu};
  color: ${colors.bianco};
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`

const ButtonWindows = styled.button`
  margin: 2px 2px 2px 0;
  width: 100%;
  height: 30px;
  background: ${colors.grigio.medium};
  border-width: 2px;
  border-color: ${colors.bianco} ${colors.grigio.dark} ${colors.grigio.dark} ${colors.bianco};
  cursor: pointer;
  font-family: ${fonts.monospace};
  font-size: 18px;
  color: ${colors.antracite};
`

const ActionButtonWindows = styled.button`
  margin: 2px 2px 2px 0;
  width: 16px;
  height: 16px;
  background: ${colors.grigio.medium};
  border-width: 2px;
  border-color: ${colors.bianco} ${colors.grigio.dark} ${colors.grigio.dark} ${colors.bianco};
  cursor: pointer;
  font-family: 'Tahoma';
  font-size: 10px;
  font-weight: bold;
  color: ${colors.antracite};
  user-select: none;
`

const BodyWindows = styled.div`
  font-family: ${fonts.monospace};
  padding: 13px 12px 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export { WrapperWindows, ButtonWindows, BodyWindows, HeadWindows, ActionButtonWindows }
