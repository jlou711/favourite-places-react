import { Place } from "./components/place";
import { Location } from "./utils/location";

function App(): JSX.Element {
  const queenstown = new Location(
    "100% Pure New Zealand",
    "Queenstown",
    "New Zealand",
    "https://images.unsplash.com/photo-1600466403153-50193d187dde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1674&q=80",
    "https://www.google.com/maps/place/Queenstown,+New+Zealand/@-44.9967032,168.6297593,12z/data=!3m1!4b1!4m5!3m4!1s0xa9d51df1d7a8de5f:0x500ef868479a600!8m2!3d-45.0301511!4d168.6615141",
    "Beautiful everywhere you look, must try Fergburger - the queues are worth it!",
    "https://unsplash.com/@peterluo0113",
    "Scenic view of Queenstown"
  );
  const amalfi = new Location(
    "When life gives you lemons",
    "Amalfi",
    "Italy",
    "https://images.unsplash.com/photo-1510041883570-1c5b27d85cb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1725&q=80",
    "https://www.google.com/maps/place/84011+Amalfi,+SA,+Italy/@40.6310201,14.5741582,14z/data=!3m1!4b1!4m5!3m4!1s0x133b95b54921c5d1:0x151a2c999fb2aca9!8m2!3d40.6340026!4d14.6026805",
    "Ciao bella! Sunshine, sea and so much good food",
    "https://unsplash.com/@rgaleria",
    "Colorful buildings in Amalfi"
  );
  const tokyo = new Location(
    "Konichiwa!",
    "Tokyo",
    "Japan",
    "https://images.unsplash.com/photo-1533050487297-09b450131914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    "https://www.google.com/maps/place/Tokyo,+Japan/@35.5062907,138.6486406,8z/data=!3m1!4b1!4m5!3m4!1s0x605d1b87f02e57e7:0x2e01618b22571b89!8m2!3d35.6761919!4d139.6503106",
    "Metropolitan city with something new and exciting in every direction",
    "https://unsplash.com/@agk42",
    "Side street of Tokyo at night"
  );
  const myListOfPlaces = [queenstown, amalfi, tokyo];
  return (
    <>
      {myListOfPlaces.map((loc: Location, index: number) => (
        <Place
          key={index}
          title={loc.title}
          name={loc.name}
          country={loc.country}
          image={loc.image}
          map={loc.map}
          description={loc.description}
          alt={loc.alt}
          img_credits={loc.img_credits}
        />
      ))}
    </>
  );
}

export default App;
