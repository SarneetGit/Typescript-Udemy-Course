import faker from 'faker';
import { markerItem } from './CustomMap';

export class User implements markerItem {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red'

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent(): string {
    return `<h4>User: ${this.name}</h4>`;
  }
}
