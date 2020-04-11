import * as React from 'react'

type RecipeContext = {
  tspanHeight: number
  onChangeTspanHeight: (height: number) => void
}

const RecipeContext = React.createContext<RecipeContext>({} as RecipeContext)

const RecipeProvider: React.FC = ({ children }) => {
  const [tspanHeight, setTspanHeight] = React.useState<number>(0)

  const onChangeTspanHeight = (tspanHeight: number) => {
    setTspanHeight(tspanHeight)
  }

  return (
    <RecipeContext.Provider
      value={{
        tspanHeight,
        onChangeTspanHeight
      }}
    >
      {children}
    </RecipeContext.Provider>
  )
}

export { RecipeProvider, RecipeContext }
