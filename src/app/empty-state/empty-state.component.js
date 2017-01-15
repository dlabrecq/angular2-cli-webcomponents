"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var EmptyStateComponent = (function () {
    function EmptyStateComponent() {
        this.onActionClick = new core_1.EventEmitter();
        this.tooltipText = "Opens Dashboard Tab...";
    }
    EmptyStateComponent.prototype.mainAction = function (event) {
        this.onActionClick.emit(event);
    };
    EmptyStateComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Output()
    ], EmptyStateComponent.prototype, "onActionClick", void 0);
    EmptyStateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-empty-state',
            templateUrl: 'empty-state.component.html',
            styleUrls: ['empty-state.component.css']
        })
    ], EmptyStateComponent);
    return EmptyStateComponent;
}());
exports.EmptyStateComponent = EmptyStateComponent;
