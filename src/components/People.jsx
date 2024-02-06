import Person from "./Person"

function People( {people}) {
  console.log(people)
  return (
    <>
      {people.map((person, index) => <Person key = {index} person = {person}/>)}
    </>
    )
}

export default People