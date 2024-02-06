import Person from "./Person"

function People( {people}) {
  console.log(people)
  return (
    {people.map(person => <Person person={person}/>)}
    )
}

export default People