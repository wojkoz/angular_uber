import { Component, OnInit, Input,   } from '@angular/core';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  @Input() origin: any;
  @Input() destination: any;
  @Input() displayDirection: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
