import * as React from 'react'
import { RecipeProvider } from './RecipeProvider'

const ProvidersWrapper: React.FC = ({ children }) => {
  return <RecipeProvider>{children}</RecipeProvider>
}

export { ProvidersWrapper }
