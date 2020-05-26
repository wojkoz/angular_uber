import { Component, OnInit, Output, EventEmitter, ViewEncapsulation  } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Location, Appearance, GermanAddress} from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Output() markerEvent = new EventEmitter<object>();

  appearance = Appearance;
  zoom: number;
  latitude = 50.024230;
  longitude = 20.971066;
  selectedAddress: PlaceResult;
  longitudeDes: number;
  latitudeDes: number;

  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('Home | @angular-material-extensions/google-maps-autocomplete');

    this.zoom = 10;

    this.setCurrentPosition();
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  onAutocompleteSelected(result: PlaceResult) {
    console.log('onAutocompleteSelected: ', result);
  }

  onLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.latitude = location.latitude;
    this.longitude = location.longitude;
  }

  onDestinationLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.latitudeDes = location.latitude;
    this.longitudeDes = location.longitude;
  }

  onMapClick(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;

    this.markerEvent.emit({latitude: this.latitude, longitude: this.longitude});

  }
}
