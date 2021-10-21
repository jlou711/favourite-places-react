interface Location {
    title:string,
    name: string,
    country: string,
    image: string,
    alt?: string,
    map: string,
    description: string
}

export function Place(props: Location): JSX.Element {
  return (
  <>
    <div>
        <h2>{props.title}</h2>
        <img src={props.image} alt={props.alt}/>
        <div className="loc-details">
            📍 <a href={props.map} target="_blank">{props.name}, {props.country}</a>
            <p>Description: {props.description}</p>
        </div>
    </div>
  </>
  )
}
