import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'main-view-item-text',
  templateUrl: './main-view-item-text.component.html',
  styleUrls: ['./main-view-item-text.component.css']
})
export class MainViewItemTextComponent implements OnInit {
  @Input() title:string;
  constructor() { }

  ngOnInit(): void {
  }

}
