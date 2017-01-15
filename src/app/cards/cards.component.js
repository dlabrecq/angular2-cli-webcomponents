"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CardsComponent = (function () {
    function CardsComponent() {
    }
    CardsComponent.prototype.ngOnInit = function () {
        //render all chart types/blocks
        this.renderChart2();
        this.renderChart3();
        this.renderChart5();
        //run matchHeight jquery plugin
        this.matchHeight();
    };
    CardsComponent.prototype.renderChart2 = function () {
        var donutChartConfig = jQuery().c3ChartDefaults().getDefaultDonutConfig('A');
        donutChartConfig.bindto = '#chart-pf-donut-1';
        donutChartConfig.data = {
            type: "donut",
            columns: [
                ["Used", 95],
                ["Available", 5]
            ],
            groups: [
                ["used", "available"]
            ],
            order: null
        };
        donutChartConfig.color = {
            pattern: ["#cc0000", "#D1D1D1"]
        };
        donutChartConfig.tooltip = {
            contents: function (d) {
                return '<span className="donut-tooltip-pf" style="white-space: nowrap;">' +
                    Math.round(d[0].ratio * 100) + '%' + ' MHz ' + d[0].name +
                    '</span>';
            }
        };
        var chart1 = c3.generate(donutChartConfig);
        var donutChartTitle = d3.select("#chart-pf-donut-1").select('text.c3-chart-arcs-title');
        donutChartTitle.text("");
        donutChartTitle.insert('tspan').text("950").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
        donutChartTitle.insert('tspan').text("MHz Used").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);
        var sparklineChartConfig = jQuery().c3ChartDefaults().getDefaultSparklineConfig();
        sparklineChartConfig.bindto = '#chart-pf-sparkline-1';
        sparklineChartConfig.data = {
            columns: [
                ['%', 10, 50, 28, 20, 31, 27, 60, 36, 52, 55, 62, 68, 69, 88, 74, 88, 95],
            ],
            type: 'area'
        };
        var chart2 = c3.generate(sparklineChartConfig);
    };
    CardsComponent.prototype.renderChart3 = function () {
        var donutChartConfig = jQuery().c3ChartDefaults().getDefaultDonutConfig('A');
        donutChartConfig.bindto = '#chart-pf-donut-2';
        donutChartConfig.data = {
            type: "donut",
            columns: [
                ["Used", 41],
                ["Available", 59]
            ],
            groups: [
                ["used", "available"]
            ],
            order: null
        };
        donutChartConfig.color = {
            pattern: ["#3f9c35", "#D1D1D1"]
        };
        donutChartConfig.tooltip = {
            contents: function (d) {
                return '<span className="donut-tooltip-pf" style="white-space: nowrap;">' +
                    Math.round(d[0].ratio * 100) + '%' + ' GB ' + d[0].name +
                    '</span>';
            }
        };
        var chart3 = c3.generate(donutChartConfig);
        var donutChartTitle = d3.select("#chart-pf-donut-2").select('text.c3-chart-arcs-title');
        donutChartTitle.text("");
        donutChartTitle.insert('tspan').text("176").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
        donutChartTitle.insert('tspan').text("GB Used").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);
        var sparklineChartConfig = jQuery().c3ChartDefaults().getDefaultSparklineConfig();
        sparklineChartConfig.bindto = '#chart-pf-sparkline-2';
        sparklineChartConfig.data = {
            columns: [
                ['%', 35, 36, 20, 30, 31, 22, 44, 36, 40, 41, 55, 52, 48, 48, 50, 40, 41],
            ],
            type: 'area'
        };
        var chart4 = c3.generate(sparklineChartConfig);
    };
    CardsComponent.prototype.renderChart5 = function () {
        var donutChartConfig = jQuery().c3ChartDefaults().getDefaultDonutConfig('A');
        donutChartConfig.bindto = '#chart-pf-donut-3';
        donutChartConfig.data = {
            type: "donut",
            columns: [
                ["Used", 85],
                ["Available", 15]
            ],
            groups: [
                ["used", "available"]
            ],
            order: null
        };
        donutChartConfig.color = {
            pattern: ["#EC7A08", "#D1D1D1"]
        };
        donutChartConfig.tooltip = {
            contents: function (d) {
                return '<span className="donut-tooltip-pf" style="white-space: nowrap;">' +
                    Math.round(d[0].ratio * 100) + '%' + ' Gbps ' + d[0].name +
                    '</span>';
            }
        };
        var chart5 = c3.generate(donutChartConfig);
        var donutChartTitle = d3.select("#chart-pf-donut-3").select('text.c3-chart-arcs-title');
        donutChartTitle.text("");
        donutChartTitle.insert('tspan').text("1100").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
        donutChartTitle.insert('tspan').text("Gbps Used").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);
        var sparklineChartConfig = jQuery().c3ChartDefaults().getDefaultSparklineConfig();
        sparklineChartConfig.bindto = '#chart-pf-sparkline-3';
        sparklineChartConfig.data = {
            columns: [
                ['%', 60, 55, 70, 44, 31, 67, 54, 46, 58, 75, 62, 68, 69, 88, 74, 88, 85],
            ],
            type: 'area'
        };
        var chart6 = c3.generate(sparklineChartConfig);
    };
    CardsComponent.prototype.matchHeight = function () {
        // matchHeight the contents of each .card-pf and then the .card-pf itself
        $(".row-cards-pf > [class*='col'] > .card-pf .card-pf-title").matchHeight();
        $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-body").matchHeight();
        $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-footer").matchHeight();
        $(".row-cards-pf > [class*='col'] > .card-pf").matchHeight();
    };
    CardsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-cards',
            templateUrl: 'cards.component.html',
            styleUrls: ['cards.component.css']
        })
    ], CardsComponent);
    return CardsComponent;
}());
exports.CardsComponent = CardsComponent;
