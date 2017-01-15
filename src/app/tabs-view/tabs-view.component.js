"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var cards_1 = require('../cards');
var list_view_1 = require('../list-view');
var empty_state_1 = require('../empty-state');
var tabs_1 = require('../tabs');
var tab_1 = require('../tab');
var TabsViewComponent = (function () {
    function TabsViewComponent() {
        this.tabs = [
            { title: 'Dashboard', isActive: true },
            { title: 'List View', isActive: false },
            { title: 'Empty State', isActive: false },
        ];
    }
    TabsViewComponent.prototype.onTabChanged = function (event) {
        this.changeBackgroundColor(event.detail);
    };
    TabsViewComponent.prototype.onActionClick = function (event) {
        this.pfTabs.el.nativeElement.setActiveTab(this.tabs[0].title);
    };
    TabsViewComponent.prototype.changeBackgroundColor = function (activeTab) {
        //change background based on active tab
        var tabBodyElement = document.querySelector('.collapse.navbar-collapse');
        switch (activeTab) {
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
    };
    __decorate([
        core_1.ViewChild('pfTabs')
    ], TabsViewComponent.prototype, "pfTabs", void 0);
    TabsViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-tabs',
            templateUrl: 'tabs-view.component.html',
            styleUrls: ['tabs-view.component.css'],
            directives: [tabs_1.TabsComponent, tab_1.TabComponent, cards_1.CardsComponent, list_view_1.ListViewComponent, empty_state_1.EmptyStateComponent]
        })
    ], TabsViewComponent);
    return TabsViewComponent;
}());
exports.TabsViewComponent = TabsViewComponent;
