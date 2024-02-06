import { useState } from "react"
import Person from "./Person"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function People({ people }) {
  const [searchString, setSearchString] = useState("")
  const [peopleData, setPeopleData] = useState(people)
  const [sortBy, setSortBy] = useState ("asc")


  const handleSort = () => {
    setPeopleData([...people]
      .sort((a, b) => sortBy === "asc"
      ? a.name.localeCompare(b.name) 
      : b.name.localeCompare(a.name)
      ))
      setSortBy(sortBy === "asc" ? "desc" : "asc")
    }

  return (
    <>
      <TextField variant="outlined" label="Search" onChange={e => setSearchString(e.target.value)}/>

    <Button variant="outlined" onClick={handleSort}>sort by {sortBy}</Button>

      {peopleData
        .filter(person => person.name.toLowerCase().includes(searchString.toLowerCase()))
        .map((person, index) => <Person key = {index} person = {person}/>)}
    </>
    )
}

export default People