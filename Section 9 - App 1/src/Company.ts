import faker from 'faker';
import { markerItem } from './CustomMap';

export class Company implements markerItem {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'black'

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent(): string {
    return `<div>
              <h4>Company Name: ${this.companyName}</h4>
              <p>Catch Phrase: ${this.catchPhrase}</p>
            </div>`;
  }
}
