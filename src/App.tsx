import { Place } from "./components/place" 
import { Location } from "./utils/location"

function App(): JSX.Element {

  const scotland = new Location("Scotland","Scotty","United Kingdom","image to Scotland",
  "map to scotland","description of scotland")
  const france = new Location("France","Frenchy","France","image to France",
  "map to France","description of France")
  
  const myListOfPlaces = [scotland,france]
  return(
  <>
    {myListOfPlaces.map((loc: Location, index:number) => 
      <Place key={index} title={loc.title} name={loc.name} country={loc.country} 
      image={loc.image} map={loc.map} description={loc.description}/>
  )}
  </>
  )
}

export default App;