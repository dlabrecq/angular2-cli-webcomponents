import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CardsComponent } from '../cards';
import { ListViewComponent } from '../list-view';
import { EmptyStateComponent } from '../empty-state';

@Component({
  moduleId: module.id,
  selector: 'app-tabs',
  templateUrl: 'tabs-view.component.html',
  styleUrls: ['tabs-view.component.css'],
  directives: [CardsComponent, ListViewComponent, EmptyStateComponent]
})
export class TabsViewComponent implements OnInit {

  @ViewChild('pfTabs') pfTabs:ElementRef;

  tabs = [
    {title: 'Dashboard', isActive : true},
    {title: 'List View', isActive : false},
    {title: 'Empty State', isActive : false},
  ];

  constructor() {}

  onTabChanged(event: Event){
    this.changeBackgroundColor(event.detail);
  }

  onActionClick(event: Event){
    this.pfTabs.nativeElement.setActiveTab(this.tabs[0].title);
  }

  changeBackgroundColor(activeTab: string){
    //change background based on active tab
    let tabBodyElement = document.querySelector('.collapse.navbar-collapse');
    switch(activeTab){
      case 'List View':
        tabBodyElement.style.backgroundColor = '#fff';
        break;
      case 'Empty State':
        tabBodyElement.style.backgroundColor = '#fff';
        break;
      default:
        tabBodyElement.style.backgroundColor = '#f5f5f5';
        break;
    }
  }
}