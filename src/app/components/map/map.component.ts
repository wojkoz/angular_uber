import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Location} from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  @Output() markerEvent = new EventEmitter<object>();
  adres_poczatkowy = "Skąd:"
  adres_koncowy = "Dokąd:"
  default_adres = "Twoja lokalizacja jest aktualnie ustawiona";

  //---------------------------------------------
  origin = {
    lat: 50.024230,
    lng: 20.971066
  };
  destination = {
    lat: 50.024230,
    lng: 20.971066
  };
  displayDirections = true;
  //----------------------------------------------

  zoom: number;


  constructor(private titleService: Title, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Home');

    this.zoom = 10;

    this.setCurrentPosition();
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.origin.lat = position.coords.latitude;
        this.origin.lng = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  onAutocompleteSelected(result: PlaceResult) {
    console.log('onAutocompleteSelected: ', result);
    this.displayDirections = false;
  }

  onLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.origin.lat = location.latitude;
    this.origin.lng = location.longitude;
    this.cdr.detectChanges();
    setTimeout(() => {
      this.displayDirections = true;
    }, 100);
  }

  onDestinationLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.destination.lat = location.latitude;
    this.destination.lng = location.longitude;
    this.calculateDistanceAndTime();

    setTimeout(() => {
      this.displayDirections = true;
    }, 100);
    this.cdr.detectChanges();
  }

  calculateDistanceAndTime(){
    let directionsService = new google.maps.DirectionsService();

    directionsService.route({
        origin: {lat: this.origin.lat, lng: this.origin.lng},
        destination: {lat: this.destination.lat, lng: this.destination.lng},
        waypoints: [],
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
      },
      function(response, status) {
        if (status !== 'OK') {
          return;
        } else {
          var directionsData = response.routes[0].legs[0];
          if (!directionsData) {
            return;
          }
          else {
            document.getElementById('msg').innerHTML += "Dystans: " + directionsData.distance.text + " (" + directionsData.duration.text + ").";
          }
        }
      });
  }
}
