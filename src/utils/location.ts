export class Location {
  title: string;
  name: string;
  country: string;
  image: string;
  map: string;
  description: string;
  img_credits?: string;
  alt?: string;

  constructor(
    title: string,
    name: string,
    country: string,
    image: string,
    map: string,
    description: string,
    img_credits?: string,
    alt?: string
  ) {
    this.title = title;
    this.name = name;
    this.country = country;
    this.image = image;
    this.map = map;
    this.description = description;
    this.img_credits = img_credits;
    this.alt = alt;
  }
}
