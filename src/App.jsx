import { useState } from 'react'


function App() {
  const [counter, setCounter] = useState(0)
  let addavalue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }
  let removeavalue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }


  return (
    <>
      <h1>Hi</h1>
      <h3>counter: {counter}</h3>
      <button onClick={addavalue}>Add a value</button>
      <br />
      <br />
      <button onClick={removeavalue}>Remove a value</button>
      <p>Counter:{counter}</p>



    </>

  )
}

export default App
