import { useNavigate } from "react-router-dom"

interface Props {
  setShows: React.Dispatch<React.SetStateAction<Language[]>>
}

function Form(props: Props) {
  // Access navigate functionality to re-direct to root route after form submission
  const navigate = useNavigate()
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const elements = event.currentTarget.elements 
    const nameInput = elements.namedItem("show-name") as HTMLInputElement
    const ratingInput = elements.namedItem("rating") as HTMLInputElement

    const newShows = {
     name: nameInput.value,
     rating: Number(ratingInput.value)
    }
    console.log("submit works")

    props.setShows((prevShows) => [...prevShows, newShows] )
    // Re-direct to root route 
    navigate('/')


  }

  return ( 
  <>
    <form onSubmit={handleSubmit}>
      {/* show-name user-input: */}
      <label htmlFor="show-name">
        Name:
      </label>
      <input type="text" id="show-name" name="show-name" required/>
      {/* rating user-input: */}
      <label htmlFor="rating">
        Rating:
      </label>
      <input type="range" id="rating" name="rating" min={0} max={10}/>
      <button>Add</button>
    </form>
  </> )
}

export default Form;