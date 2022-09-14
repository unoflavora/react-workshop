import { useState } from 'react';

const App = () => {
  const [textInput, setTextInput] = useState('')

  return (
    <>
      <form>
        <input type="text" onChange={e => {
          setTextInput(e.target.value)
        }} />
      </form>
      <p>{textInput}</p>
    </>
  )
}

export default App