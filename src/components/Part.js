import React from 'react'

function Part({id, name, exercises}) {
  return (
    <div>
        <p key={id}>
            {name} {exercises}
        </p>
    </div>
  )
}

export default Part