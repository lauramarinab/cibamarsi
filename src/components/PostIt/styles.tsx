import styled from 'styled-components'
import { colors } from '../../styles/variables'

// export enum PostItBkgColor {
//   giallino = '#ffe9a6',
//   verdino = '#e9ffa6',
//   rosino = '#f3cfd5'
// }

// export enum darkColor {
//   giallinoScuro = '#f2d889',
//   verdinoScuro = '#d8f481',
//   rosinoScuro = '#eabbc3'
// }

export const postItColors = {
  magenta: {
    primaryColor: colors.pastello.magenta,
    secondaryColor: colors.pastello.magentaDark
  },
  verde: {
    primaryColor: '#e9ffa6',
    secondaryColor: '#d8f481'
  },
  azzurro: {
    primaryColor: '#f3cfd5',
    secondaryColor: '#eabbc3'
  },
  lilla: {
    primaryColor: '#f3cfd5',
    secondaryColor: '#eabbc3'
  },
  salmone: {
    primaryColor: colors.pastello.salmone,
    secondaryColor: colors.pastello.salmoneDark
  }
}

export type PostItColor = 'magenta' | 'verde' | 'azzurro' | 'lilla' | 'salmone'

const getBackgroundColor = (background: PostItColor) => {
  switch (background) {
    case 'magenta':
      return postItColors.magenta.primaryColor
    case 'verde':
      return postItColors.verde.primaryColor
    case 'azzurro':
      return postItColors.azzurro.primaryColor
    case 'lilla':
      return postItColors.lilla.primaryColor
    case 'salmone':
      return postItColors.salmone.primaryColor
  }
}

const getSecondaryColor = (background: PostItColor) => {
  switch (background) {
    case 'magenta':
      return postItColors.magenta.secondaryColor
    case 'verde':
      return postItColors.verde.secondaryColor
    case 'azzurro':
      return postItColors.azzurro.secondaryColor
    case 'lilla':
      return postItColors.lilla.secondaryColor
    case 'salmone':
      return postItColors.salmone.secondaryColor
  }
}

const WrapperPostIt = styled.div<{ width?: string; height?: string; background?: PostItColor }>`
  position: relative;
  background: ${props => (props.background ? getBackgroundColor(props.background) : postItColors.magenta.primaryColor)};
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
    border: 10px solid ${props => (props.background ? getBackgroundColor(props.background) : postItColors.magenta.secondaryColor)};
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -20px;
    border-width: 20px 20px 0 0;
    border-style: solid;
    border-color: ${props => (props.background ? getSecondaryColor(props.background) : postItColors.magenta.secondaryColor)} transparent;
  }
`

export { WrapperPostIt }
