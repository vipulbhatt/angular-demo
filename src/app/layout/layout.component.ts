import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    public _opened: boolean = true;
    mode = 'push';
    _mode = this.mode;
    isOpened = false;
  
    public _toggleSidebar() {
      this._opened = !this._opened;
    }
    isOver(): boolean {
    return false;
  }
}
