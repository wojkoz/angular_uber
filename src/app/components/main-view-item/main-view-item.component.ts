import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'main-view-item',
  templateUrl: './main-view-item.component.html',
  styleUrls: ['./main-view-item.component.css']
})
export class MainViewItemComponent implements OnInit {
  @Input() title: string;
  @Input() icon: any;
  @Input() description:string;
  constructor() { }

  ngOnInit(): void {
  }

}
