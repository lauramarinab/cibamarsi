import { Difficulty } from '../types/Difficulty'

export const getIconFromDifficulty = (difficulty: Difficulty) => {
  const icons = {
    [Difficulty.FACILISSIMO]: '🤗',
    [Difficulty.FACILE]: '😊',
    [Difficulty.DIFFICILE]: '😏'
  }
  return icons[difficulty]
}
