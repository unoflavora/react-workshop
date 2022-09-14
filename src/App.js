import { createContext, useContext } from "react"

const ContextValue = createContext()

const Deep1 = () => {
  return (
    <Deep2 />
  )
}
const Deep2 = () => {
  return (
    <Deep3 />
  )
}

const Deep3 = () => {
  const { value } = useContext(ContextValue)
  return (
    <p>{value}</p>
  )
}

const App = () => {
  return (
    <ContextValue.Provider value={{ value: ' hello world' }}>
      <Deep1 />
    </ContextValue.Provider>
  )
}

export default App;