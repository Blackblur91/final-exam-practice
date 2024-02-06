import { useState } from "react"


function Person( {person} ) {

  const [show, setShow] = useState(false)

  return (
    <div>{person.name}
    <button onClick={() => setShow(show => !show)}>show more</button>
    {show &&
      <>
      {person.height}cm
      {person.mass}kg
    </>
    }

    </div>
  )
}

export default Person