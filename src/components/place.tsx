interface Location {
  title: string;
  name: string;
  country: string;
  image: string;
  map: string;
  description: string;
  img_credits?: string;
  alt?: string;
}

export function Place(props: Location): JSX.Element {
  return (
    <>
      <section>
        <div className="card-location">
          <h2>{props.title}</h2>
          <a href={props.img_credits} target="_blank">
            <img src={props.image} alt={props.alt} />
          </a>
          <div className="loc-details">
            📍{" "}
            <a className="loc-caption" href={props.map} target="_blank">
              {props.name}, {props.country}
            </a>
            <p className="loc-desc">{props.description}</p>
          </div>
        </div>
      </section>
    </>
  );
}
