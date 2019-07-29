export const getIconFromDifficulty = (difficulty: string) => {
  switch (difficulty) {
    case 'facilissimo':
      return '🤗'
    case 'facile':
      return '😊'
    case 'te devi impegnà':
      return '😏'
  }
}
