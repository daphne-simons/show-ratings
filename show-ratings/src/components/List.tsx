import { Link } from "react-router-dom"

export interface Shows {
  name: string
  rating: number
}

interface Props {
  shows: Shows[]
}
function List(props: Props) {

  return ( 
  <>
  <ul>
    {props.shows.map((show) => (
      <li key={show.name}>
        Name: {show.name} Rating: {show.rating} 
      </li>
    ))}
  </ul>
  <button><Link to="/add">Add another show!</Link></button>
  </> )
}

export default List;