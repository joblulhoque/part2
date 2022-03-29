import React from 'react'

function Total({parts}) {
  return (
    <div>
        <h2>Total of {parts.reduce((a,v)=>a+v.exercises,0)} exercises</h2>
    </div>
  )
}

export default Total