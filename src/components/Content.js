import React from 'react'
import Part from './Part'
import Total from './Total'
function Content({parts}) {
  return (
    <div>
        {
            parts.map(part=>(<Part id={part.id} name={part.name} exercises={part.exercises}/>))
        }
        <Total parts={parts}/>
    </div>
  )
}

export default Content