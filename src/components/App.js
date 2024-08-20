import { React, useState, useEffect } from "react";
import Filter from "./Filter";
import DogBar from "./DogBar";
import Summary from "./Summary";

function App() {
  const [dogs, setDogs] = useState([])
  const [selectedDog, setSelectedDog] = useState({})
  const [filter, setFilter] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then(response => response.json())
    .then(data => setDogs(data))
  }, [])

  const toggleDoggle = (dog) => {
    dog.isGoodDog = !dog.isGoodDog
    fetch(`http://localhost:3001/pups/${dog.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dog)
    })
    .then(response => response.json())
    .then(data => {
      setSelectedDog(data)
    })
  }

  return (
    <div className="App">
      <Filter filter={filter} setFilter={setFilter} />
      <DogBar dogs={dogs} selectDog={setSelectedDog} filter={filter} />
      <Summary dog={selectedDog} toggleDoggle={toggleDoggle} />
    </div>
  );
}

export default App;
