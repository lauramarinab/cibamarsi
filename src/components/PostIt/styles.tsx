import styled from 'styled-components'
import { colors } from '../../styles/variables'

export const postItColors = {
  magenta: {
    primaryColor: colors.pastello.magenta,
    secondaryColor: colors.pastello.magentaDark
  },
  verdeAcqua: {
    primaryColor: colors.pastello.verdeAcqua,
    secondaryColor: colors.pastello.verdeAcquaDark
  },
  azzurro: {
    primaryColor: colors.pastello.cyan,
    secondaryColor: colors.pastello.cyanDark
  },
  lilla: {
    primaryColor: colors.pastello.lilla,
    secondaryColor: colors.pastello.lillaDark
  },
  salmone: {
    primaryColor: colors.pastello.salmone,
    secondaryColor: colors.pastello.salmoneDark
  }
}

export type PostItColor = 'magenta' | 'verdeAcqua' | 'azzurro' | 'lilla' | 'salmone'

const getBackgroundColor = (background: PostItColor) => {
  switch (background) {
    case 'magenta':
      return postItColors.magenta.primaryColor
    case 'verdeAcqua':
      return postItColors.verdeAcqua.primaryColor
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
    case 'verdeAcqua':
      return postItColors.verdeAcqua.secondaryColor
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
