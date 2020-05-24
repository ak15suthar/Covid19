import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public list:any;
  public memoryapi
  public memoryinfo
  public single1 = [];
  public single2 = [];
  public dataSet;
  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    let info;
    info = this.httpService.get('https://api.rootnet.in/covid19-in/stats/')
    info.subscribe(res => {
      console.log(res.data.summary);
      this.list = res.data.summary
    })
    this.getInfoBar();
  }

  //Bar Graph
  getInfoBar() {
    let info;
    info = this.httpService.get('https://api.rootnet.in/covid19-in/stats/')
    info.subscribe(res => {
      console.log(res.data.summary);
      this.memoryapi = res.data.summary
      console.log("Bar Graph " + this.memoryapi);

      this.single1 = [{
        "name": "Total",
        "value": this.memoryapi.total
      },
      {
        "name": "ConfirmedCaseIndian",
        "value": this.memoryapi.confirmedCasesIndian,
      },
      {
        "name": "Discharged",
        "value": this.memoryapi.discharged,
      },
      {
        "name": "ConfirmedCasesForeign",
        "value": this.memoryapi.confirmedCasesForeign
      },
      {
        "name": "Deaths",
        "value": this.memoryapi.deaths
      },
      {
        "name": "ConfirmedButLocationUnidentified",
        "value": this.memoryapi.confirmedButLocationUnidentified
      }];
    })
  }
  title = 'Angular Charts';
  view1: any[] = [800, 600];
  // options for the chart
  showXAxis1 = true;
  showYAxis1 = true;
  gradient1 = false;
  showLegend1 = true;
  showXAxisLabel1 = true;
  xAxisLabel1 = 'Cases';
  showYAxisLabel1 = true;
  // yAxisLabel1 = 'Sales';
  timeline1 = true;
  colorScheme1 = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };
  showLabels1 = true;
  onResize(event) { this.view1 = [event.target.innerWidth - 900, 280 ]; }
}
