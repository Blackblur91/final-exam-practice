import { useState } from "react"
import Person from "./Person"

function People( {people}) {
  const [searchString, setSearchString] = useState("")
  return (
    <>
      <input type="text" onChange={e => setSearchString(e.target.value)}/>
      {people
        .filter(person => person.name.toLowerCase().includes(searchString.toLowerCase()))
        .map((person, index) => <Person key = {index} person = {person}/>)}


    </>
    )
}

export default People