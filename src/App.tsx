import { Place } from "./components/place" 
import { Location } from "./utils/location"

function App(): JSX.Element {
  const queenstown = new Location("100% Pure New Zealand","Queenstown","New Zealand","https://images.unsplash.com/photo-1600466403153-50193d187dde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1674&q=80",
  "https://www.google.com/maps/place/Queenstown,+New+Zealand/@-44.9967032,168.6297593,12z/data=!3m1!4b1!4m5!3m4!1s0xa9d51df1d7a8de5f:0x500ef868479a600!8m2!3d-45.0301511!4d168.6615141","Must try Fergburger!")
  const france = new Location("France","Frenchy","France","https://images.unsplash.com/photo-1600466403153-50193d187dde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1674&q=80",
  "map to France","description of France")
  const myListOfPlaces = [queenstown, france]
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