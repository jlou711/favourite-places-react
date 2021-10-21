import { Place } from "./components/place";
import { locationData } from "./data/locations";

function App(): JSX.Element {
  return (
    <>
      {locationData.map((loc, index: number) => (
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
