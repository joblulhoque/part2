import React from 'react'
import Part from './Part'
function Content({parts}) {
  return (
    <div>
        {
            parts.map(part=>(<Part id={part.id} name={part.name} exercises={part.exercises}/>))
        }
    </div>
  )
}

export default Content