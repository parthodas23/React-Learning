import React from 'react'

const Card = (props) => {
  return (
  
      <div className='p-9 m-2  rounded text-center bg-black text-white inline-block '>
        <h1 className='text-3xl text-blue-500'>{props.name}</h1>
        <h2 className='text-xl text-green-600'>{props.city}</h2>
        <h3 className='text-2xl text-purple-600'>{props.age}</h3>
        <h2 className='text-xl text-pink-500'>{props.profession}</h2>
        <h3 className='text-2xl text-red-800'>{props.title}</h3>
      </div>
    
  )
}

export default Card
