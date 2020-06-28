import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mid-top',
  templateUrl: './mid-top.component.html',
  styleUrls: ['./mid-top.component.scss']
})
export class MidTopComponent implements OnInit {

 
  radioValue = "A";

  constructor() { }

  ngOnInit() {
  }
  change(){
    this.radioValue = "B";
  }

}
