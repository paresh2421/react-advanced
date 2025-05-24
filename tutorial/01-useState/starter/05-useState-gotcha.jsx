import { useState } from 'react'

const UseStateGotcha = () => {
  const [number, setNumber] = useState(0)

  const increaseVal = () => {
    setNumber((currState) => {
      const newState = currState + 1
      return newState
    })
    // console.log(number)
  }
  return (
    <>
      <h3>{number}</h3>
      <button className="btn" onClick={increaseVal}>
        Increase
      </button>
    </>
  )
}

export default UseStateGotcha
