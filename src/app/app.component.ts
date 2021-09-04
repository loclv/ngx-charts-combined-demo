import { Component } from '@angular/core';

import { multi } from '@mock/index';
import { Line } from '@model/';
import { Color } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-charts-combined-demo';

  multi: Line[] = multi;
  view: [number, number] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;

  xAxis: boolean = true;
  yAxis: boolean = true;

  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;

  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';

  timeline: boolean = true;

  colorScheme: Color = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  } as Color;

  onSelect(data: Line[]) {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: Line[]) {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: Line[]) {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
