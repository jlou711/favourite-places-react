export class Location {
  title: string;
  name: string;
  country: string;
  image: string;
  map: string;
  description: string;

  constructor(
    title: string,
    name: string,
    country: string,
    image: string,
    map: string,
    description: string
  ) {
    this.title = title;
    this.name = name;
    this.country = country;
    this.image = image;
    this.map = map;
    this.description = description;
  }
}
