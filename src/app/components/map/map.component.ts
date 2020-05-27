import {Component, OnInit, Output, EventEmitter, ChangeDetectorRef, OnChanges} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Location, Appearance} from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;
import {map} from "rxjs/operators";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent implements OnInit {
  @Output() markerEvent = new EventEmitter<object>();

  //---------------------------------------------
  origin = {
    lat: 50.024230,
    lng: 20.971066
  };
  destination = {
    lat: 51.024230,
    lng: 20.971066
  };
  displayDirections = true;
  //----------------------------------------------

  zoom: number;
  latitude = 50.024230;
  longitude = 20.971066;


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
    this.displayDirections = true;

  }

  onLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.origin.lat = location.latitude;
    this.origin.lng = location.longitude;
    this.cdr.detectChanges();
    this.displayDirections = true;
  }

  onDestinationLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.destination.lat = location.latitude;
    this.destination.lng = location.longitude;
    this.displayDirections = true;
    this.cdr.detectChanges();
  }

  onMapClick(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;

    this.markerEvent.emit({lat: this.latitude, lng: this.longitude});

  }
}
