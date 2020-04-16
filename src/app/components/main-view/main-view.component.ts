import {Component, OnInit} from '@angular/core';
import {MainViewServiceService} from '../../services/main-view-service.service';
import {Tab} from '../../database/Tab';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  tabs: Tab[];

  constructor(private mainViewService: MainViewServiceService) {
    this.tabs = this.mainViewService.getAllTabs();
  }

  ngOnInit(): void {
  }
 onClick(title: string){
    console.log('onClick: '+title);
   this.tabs.forEach(tab => {tab.active = tab.title === title;})
 }
}
