import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from '../toolbar';

@Component({
  moduleId: module.id,
  selector: 'app-list-view',
  templateUrl: 'list-view.component.html',
  styleUrls: ['list-view.component.css'],
  directives: [ToolbarComponent]
})
export class ListViewComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    $("input[type='checkbox']").change(function (e) {
      if ($(this).is(":checked")) {
        $(this).closest('.list-group-item').addClass("active");
      } else {
        $(this).closest('.list-group-item').removeClass("active");
      }
    });

    // Row navigation to contents/details page
    $(".list-group-item").click(function(e){
      var target = e.target;
      //check if clicked element is a div, and not <a>, button or input
      if($(target).is('div')) {
        window.location = $(this).data("link");
      }
    });
  }

}
