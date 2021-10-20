interface Location {
    title:string,
    name: string,
    country: string,
    image: string,
    map: string,
    description: string
}

export function Place(props: Location): JSX.Element {
  return (
  <>
    <p>Title: {props.title}</p>
    <p>Name: {props.name}</p>
    <p>Country: {props.country}</p>
    <p>Image: {props.image}</p>
    <p>Map: {props.map}</p>
    <p>Description: {props.description}</p>
  </>
  )
}
