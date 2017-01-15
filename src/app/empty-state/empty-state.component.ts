import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TooltipComponent } from 'angular2-patternfly-shims/lib/Tooltip';

@Component({
  moduleId: module.id,
  selector: 'app-empty-state',
  templateUrl: 'empty-state.component.html',
  styleUrls: ['empty-state.component.css'],
  directives: [TooltipComponent]
})
export class EmptyStateComponent implements OnInit {

  @Output() onActionClick = new EventEmitter<Event>();

  constructor() {
    this.tooltipText = "Opens Dashboard Tab...";
  }

  mainAction(event) {
    this.onActionClick.emit(event);
  }

  ngOnInit() {
  }

}
