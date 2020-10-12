import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-bottom',
  templateUrl: './left-bottom.component.html',
  styleUrls: ['./left-bottom.component.scss']
})
export class LeftBottomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showMsg(){
    const msg = 'hello postal!';
    postal
    .channel('SHOW_CHINNEL')
    .publish('something_msg', msg);
  }
}
