import React from 'react'

const DogButton = ({ dog, selectDog }) => {
  return (
    <span key={dog.id} onClick={() => selectDog(dog)}> 
        {dog.name}
    </span>
  )
}

export default DogButton
