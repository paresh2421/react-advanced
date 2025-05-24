import { useEffect, useState } from 'react'

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)
  console.log('render')

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  )
}

const RandomComponent = () => {
  useEffect(() => {
    // console.log('This is interesting') // this will run everytime the
    // toggle is clicked and this componnent is mounted in the main
    // component. this is applicable to every other component
    // we mount inside the CleanupFUnction component.
    // const intId = setInterval(() => {
    //   console.log('hello from interval')
    // }, 1000) // does not stop, keeps going
    // // every time we render component new interval gets created
    // return () => {
    //   clearInterval(intId)
    //   console.log('cleanup')
    // }

    const someFunc = () => {}

    window.addEventListener('scroll', someFunc)
    return () => window.removeEventListener('scroll', someFunc)
  }, [])

  return <h1>Hello there</h1>
}

export default CleanupFunction
