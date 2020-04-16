import {Injectable} from '@angular/core';
import {Tab, tabs} from '../database/Tab';

@Injectable({
  providedIn: 'root'
})
export class MainViewServiceService {

  constructor() { }

  getAllTabs(): Array<Tab>{
    return tabs;
  }
}
