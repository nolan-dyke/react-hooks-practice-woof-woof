import React from 'react'
import DogButton from './DogButton'

const DogBar = ({ dogs, selectDog, filter }) => {
  return (
    <div id="dog-bar">
        {dogs.filter(dog => filter ? dog.isGoodDog : dog)
        .map(dog => <DogButton dog={dog} selectDog={selectDog}/>)
        }
    </div>
  )
}

export default DogBar
