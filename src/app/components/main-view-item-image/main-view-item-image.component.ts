import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'main-view-item-image',
  templateUrl: './main-view-item-image.component.html',
  styleUrls: ['./main-view-item-image.component.css']
})
export class MainViewItemImageComponent implements OnInit {
  @Input() icon: any;
  constructor() {

  }

  ngOnInit(): void {
  }

}
