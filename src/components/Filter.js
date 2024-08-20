import React from 'react'

const Filter = ({ filter, setFilter }) => {
  return (
    <div id="filter-div">
        <button id="good-dog-filter" onClick={() => setFilter(!filter)}>Filter good dogs: {filter ? 'ON' : 'OFF'}</button>
    </div>
  )
}

export default Filter