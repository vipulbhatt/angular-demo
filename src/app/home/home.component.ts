import { Component, OnInit } from '@angular/core';
import{Items} from './home';
import {itemService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[itemService]
})
export class HomeComponent implements OnInit {
ItemArray :Items[];
selectedItem: Items;
  constructor( public homeservice : itemService) {
      this.ItemArray =  homeservice.getAllItems();
   }

  ngOnInit() {
  }


onSelect(item: Items): void {
  this.selectedItem = item;
}
  
}
