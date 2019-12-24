export interface markerItem {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 3,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(plotItem: markerItem): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: plotItem.location
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: plotItem.markerContent() + `<img style='height:200px;width:175px;' src='http://www1.pictures.stylebistro.com/gi/Premiere+Lionsgate+Premiere+Knock+Knock+Arrivals+pK6rVGAteBKl.jpg'>`
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
