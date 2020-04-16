import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'main-view-item-description',
  templateUrl: './main-view-item-description.component.html',
  styleUrls: ['./main-view-item-description.component.css']
})
export class MainViewItemDescriptionComponent implements OnInit {
  @Input() description: string;
  constructor() { }

  ngOnInit(): void {
  }

}
