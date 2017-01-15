"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var toolbar_1 = require('../toolbar');
var ListViewComponent = (function () {
    function ListViewComponent() {
    }
    ListViewComponent.prototype.ngOnInit = function () {
        $("input[type='checkbox']").change(function (e) {
            if ($(this).is(":checked")) {
                $(this).closest('.list-group-item').addClass("active");
            }
            else {
                $(this).closest('.list-group-item').removeClass("active");
            }
        });
        // Row navigation to contents/details page
        $(".list-group-item").click(function (e) {
            var target = e.target;
            //check if clicked element is a div, and not <a>, button or input
            if ($(target).is('div')) {
                window.location = $(this).data("link");
            }
        });
    };
    ListViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-list-view',
            templateUrl: 'list-view.component.html',
            styleUrls: ['list-view.component.css'],
            directives: [toolbar_1.ToolbarComponent]
        })
    ], ListViewComponent);
    return ListViewComponent;
}());
exports.ListViewComponent = ListViewComponent;
