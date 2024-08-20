import React from 'react'

const Summary = ({ dog, toggleDoggle }) => {
  return (
    <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        {
            dog.id && (
            <div id="dog-info">
                <img src={dog.image} alt={dog.name} />
                <h2>{dog.name}</h2>
                <button onClick={() => {
                    toggleDoggle(dog)
                    }} >
                        {dog.isGoodDog ? "Good dog!" : "Bad dog!"}
                    </button>
            </div>
            )
        }
    </div>
  )
}

export default Summary
