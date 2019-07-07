import styled from 'styled-components'

const WrapperWindows = styled.div<{ width?: number }>`
  width: ${props => (props.width ? `${props.width}px` : '250px')};
  background: #c0c0c0;
  border-width: 2px;
  border-color: #e6e6e6 #808080 #808080 #e6e6e6;
  border-style: solid;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2px;
`

const HeadWindows = styled.div`
  padding: 2px 2px 2px 5px;
  width: 100%;
  background: #000080;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ButtonWindows = styled.button`
  margin: 2px 2px 2px 0;
  width: 16px;
  height: 16px;
  background: #c0c0c0;
  border-width: 2px;
  border-color: #ffffff #808080 #808080 #ffffff;
  font-size: 10px;
  font-weight: bold;
  font-family: Tahoma;
`

const BodyWindows = styled.div`
  padding: 13px 12px 12px;
  height: 100%;
  width: 100%;
  display: inline-block;
  font-family: 'VT323', monospace;
`

export { WrapperWindows, ButtonWindows, BodyWindows, HeadWindows }
