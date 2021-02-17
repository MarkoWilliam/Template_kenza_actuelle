import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';
import * as CanvasJS from '../../../../assets/canvasjs.min.js';
import { AnalyticsDashboardService } from 'app/main/dashboards/analytics/analytics.service';
import * as Chart from 'chart.js';

@Component({
    selector     : 'analytics-dashboard',
    templateUrl  : './analytics.component.html',
    styleUrls    : ['./analytics.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AnalyticsDashboardComponent implements OnInit
{
    widgets: any;
    widget1SelectedYear = '2016';
    widget5SelectedDay = 'today';

    /**
     * Constructor
     *
     * @param {AnalyticsDashboardService} _analyticsDashboardService
     */
    constructor(
        private _analyticsDashboardService: AnalyticsDashboardService
    )
    {
        // Register the custom chart.js plugin
        // this._registerCustomChartJSPlugin();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the widgets from the service
        this.widgets = this._analyticsDashboardService.widgets;
        let chart = new CanvasJS.Chart("chartContainer2", {
            animationEnabled: true,
            exportEnabled: true,
            title: {
                text: "Statistique global"
            },
            data: [{
                type: "column",
                dataPoints: [
                    { y: 71, label: "" },
                    { y: 55, label: "" },
                    { y: 50, label: "" },
                    { y: 65, label: "" },
                    { y: 95, label: "" },
                    { y: 68, label: "" },
                    { y: 70, label: "" },
                    { y: 80, label: "" },
                    { y: 75, label: "" }
                ]
            }]
        });
            
        chart.render();

        this.SpinSchar();
        }

        SpinSchar() {
            let chart = new CanvasJS.Chart("chartContainer", {
                theme: "light2",
                animationEnabled: true,
                exportEnabled: true,
                title:{
                    text: "Téléchargment de l'application sur Play Store"
                },
                data: [{
                    type: "pie",
                    showInLegend: true,
                    toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
                    indexLabel: "{name} - #percent%",
                    dataPoints: [
                        { y: 450, name: "Android" },
                        { y: 250, name: "IOS" },
                    ]
                }]
            });
                
            chart.render();
        }
    }





    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register a custom plugin
     */
//     private _registerCustomChartJSPlugin(): void
//     {
//         (window as any).Chart.plugins.register({
//             afterDatasetsDraw: function(chart, easing): any {
//                 // Only activate the plugin if it's made available
//                 // in the options
//                 if ( 
//                     (chart.options.plugins.xLabelsOnTop && chart.options.plugins.xLabelsOnTop.active === false)
//                 )
//                 {
//                     return;
//                 }

//                 // To only draw at the end of animation, check for easing === 1
//                 const ctx = chart.ctx;

//                 chart.data.datasets.forEach(function(dataset, i): any {
//                     const meta = chart.getDatasetMeta(i);
//                     if ( !meta.hidden )
//                     {
//                         meta.data.forEach(function(element, index): any {

//                             // Draw the text in black, with the specified font
//                             ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
//                             const fontSize = 13;
//                             const fontStyle = 'normal';
//                             const fontFamily = 'Roboto, Helvetica Neue, Arial';
//                             ctx.font = (window as any).Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

//                             // Just naively convert to string for now
//                             const dataString = dataset.data[index].toString() + 'k';

//                             // Make sure alignment settings are correct
//                             ctx.textAlign = 'center';
//                             ctx.textBaseline = 'middle';
//                             const padding = 15;
//                             const startY = 24;
//                             const position = element.tooltipPosition();
//                             ctx.fillText(dataString, position.x, startY);

//                             ctx.save();

//                             ctx.beginPath();
//                             ctx.setLineDash([5, 3]);
//                             ctx.moveTo(position.x, startY + padding);
//                             ctx.lineTo(position.x, position.y - padding);
//                             ctx.strokeStyle = 'rgba(255,255,255,0.12)';
//                             ctx.stroke();

//                             ctx.restore();
//                         });
//                     }
//                 });
//             }
//         });
//     }
// }

