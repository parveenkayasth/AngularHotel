import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { SidenavListComponent } from '../sidenav-list/sidenav-list.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() SideNavigationToggle = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onToggleOpenSidenav():void{
    this.SideNavigationToggle.emit();
  }

}
