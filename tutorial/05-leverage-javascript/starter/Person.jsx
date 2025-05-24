import React from 'react'
import avatar from '../../../assets/react.svg'
export function Person({ name, nickName = 'none', images }) {
  //   const img =
  //     (images && images[0] && images[0].small && images[0].small.url) || avatar
  // The optional chaining operator (?.) checks if the object or property
  // exists before trying to access it. If the property is null or
  // undefined, it safely returns undefined without throwing an error.
  // This is the main purpose of the operator.
  const img = images?.[0]?.small?.url ?? avatar
  return (
    <div>
      <img src={img} alt={name} style={{ width: '50px' }} />
      <h4>{name}</h4>
      <p>Nickname: {nickName}</p>
    </div>
  )
}
