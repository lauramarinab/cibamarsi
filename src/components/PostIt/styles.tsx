import styled from 'styled-components'

export enum PostItBkgColor {
  giallino = '#ffe9a6',
  verdino = '#e9ffa6',
  rosino = '#f3cfd5'
}

export enum darkColor {
  giallinoScuro = '#f2d889',
  verdinoScuro = '#d8f481',
  rosinoScuro = '#eabbc3'
}

const getBackgroundDarkColor = (background: PostItBkgColor) => {
  if (background === PostItBkgColor.giallino) {
    return darkColor.giallinoScuro
  }
  if (background === PostItBkgColor.verdino) {
    return darkColor.verdinoScuro
  }
  if (background === PostItBkgColor.rosino) {
    return darkColor.rosinoScuro
  }
  return darkColor.giallinoScuro
}

const WrapperPostIt = styled.div<{ width?: string; height?: string; background?: PostItBkgColor }>`
  position: relative;
  background: ${props => (props.background ? props.background : PostItBkgColor.giallino)};
  width: ${props => (props.width ? `${props.width}` : '250px')};
  height: ${props => (props.width ? `${props.width}` : '')};
  padding: 20px;

  /* transform: rotate(7deg) translateX(-50%); */

  &::before {
    content: '';
    position: absolute;
    right: 20px;
    bottom: -20px;
    left: 0;
    border: 10px solid ${props => (props.background ? props.background : PostItBkgColor.giallino)};
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -20px;
    border-width: 20px 20px 0 0;
    border-style: solid;
    border-color: ${props => (props.background ? getBackgroundDarkColor(props.background) : darkColor.giallinoScuro)} transparent;
  }
`

export { WrapperPostIt }
