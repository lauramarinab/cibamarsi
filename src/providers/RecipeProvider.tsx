import * as React from 'react'

const RecipeContext = React.createContext<{
  tspanHeight: number
  onChangeTspanHeight: (height: number) => void
}>({
  tspanHeight: 0,
  onChangeTspanHeight: (tspanHeight: number) => console.log('onChangeSpanHeight')
})

interface State {
  tspanHeight: number
}

const RecipeProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState<State>({
    tspanHeight: 0
  })

  const onChangeTspanHeight = (tspanHeight: number) => {
    setState(state => ({
      ...state,
      tspanHeight
    }))
  }

  return (
    <RecipeContext.Provider
      value={{
        ...state,
        onChangeTspanHeight: onChangeTspanHeight
      }}
    >
      {children}
    </RecipeContext.Provider>
  )
}

export { RecipeProvider, RecipeContext }
