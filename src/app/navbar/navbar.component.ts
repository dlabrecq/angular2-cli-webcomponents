import { Component, OnInit } from '@angular/core';
import { TabsViewComponent } from '../tabs-view';

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [TabsViewComponent]
})
export class NavbarComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
