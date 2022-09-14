import {useRef } from 'react';

const App = () => {
  const refVal = useRef();
  return (
    <>
      <form>
        <input type="text" ref={refVal} />
      </form>
      <button type='button' onClick={() => {
        alert(refVal.current.value)
      }}>
        click
      </button>
    </>
  )
}

export default App