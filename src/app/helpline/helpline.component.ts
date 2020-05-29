import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../corona.service';

@Component({
  selector: 'app-helpline',
  templateUrl: './helpline.component.html',
  styleUrls: ['./helpline.component.css']
})
export class HelplineComponent implements OnInit {
  list : {};
  main : any;
  constructor(private service:CoronaService) { }

  ngOnInit() {
    this.service.getContact().subscribe(res => {
      this.list = res.data.contacts.regional;
      this.main = res.data.contacts.primary;
      console.log(res.data.contacts.regional);
      console.log(res.data.contacts.primary);

    })
  }

}
