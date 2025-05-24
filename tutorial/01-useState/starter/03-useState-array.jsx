import { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [item, setItem] = useState(data)

  const removeItem = (id) => {
    let newItems = item.filter((person) => person.id !== id)
    setItem(newItems)
  }
  return (
    <>
      {item.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        )
      })}
      <button className="btn" onClick={() => setItem([])}>
        Clear
      </button>
    </>
  )
}

export default UseStateArray
