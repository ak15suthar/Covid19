import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
  public list: {};
  public memoryapi
  public memoryinfo
  public single1 = [];
  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    let info;
    info = this.httpService.get('https://api.rootnet.in/covid19-in/stats/')
    info.subscribe(res => {
      console.log(res.data.regional);
      this.list = res.data.regional;
    })
    this.getInfoBar();
  }

  getInfoBar() {
    let info;
    info = this.httpService.get('https://api.rootnet.in/covid19-in/stats/')
    info.subscribe(res => {
      console.log(res.data.regional);
      this.memoryapi = res.data.regional
      console.log("Bar Graph " + this.memoryapi);


      for(var i=0; i<this.memoryapi; i++){
        
      }

      this.single1 = [
        {
          "regional": "AN NC",
          "seer": [
            {
              "name": "ABA",
              "value": this.memoryapi.deaths
            }
          ]
        }
        // {
        //   "name": "ConfirmedCaseIndian",
        //   "value": this.memoryapi.confirmedCasesIndian,
        // },
        // {
        //   "name": "Discharged",
        //   "value": this.memoryapi.discharged,
        // },
        // {
        //   "name": "confirmedCasesForeign",
        //   "value": this.memoryapi.confirmedCasesForeign
        // },
        // {
        //   "name": "confirmedCasesForeign",
        //   "value": this.memoryapi.confirmedCasesForeign
        // },
        // {
        //   "name": "Deaths",
        //   "value": this.memoryapi.deaths
        // },
        // {
        //   "name": "confirmedButLocationUnidentified",
        //   "value": this.memoryapi.confirmedButLocationUnidentified
        // }
      ];
    })
  }
  title = 'Angular Charts';
  view1: any[] = [600, 400];
  // options for the chart
  showXAxis1 = true;
  showYAxis1 = true;
  gradient1 = false;
  showLegend1 = true;
  showXAxisLabel1 = true;
  xAxisLabel1 = 'Cases';
  showYAxisLabel1 = true;
  yAxisLabel1 = 'Sales';
  timeline1 = true;
  colorScheme1 = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };
  showLabels1 = true;


}
