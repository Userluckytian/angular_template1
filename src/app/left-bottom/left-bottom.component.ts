import { Component, OnInit } from '@angular/core';
// 引入数据请求服务
// import { ModuleDataRxInquireService } from '@cmss/core';

@Component({
  selector: 'app-left-bottom',
  templateUrl: './left-bottom.component.html',
  styleUrls: ['./left-bottom.component.scss']
})
export class LeftBottomComponent implements OnInit {
  data = '';
  // constructor(private dataRxInquireService: ModuleDataRxInquireService) { }
  constructor() { }

  ngOnInit() {
    // this.dataRxInquireService.get('common', 'location.list', null, null).subscribe(res => {
    //   this.data = res;
    // });
  }

  showMsg() {
    const msg = 'hello postal!';
    postal
      .channel('SHOW_CHINNEL')
      .publish('something_msg', msg);
  }
}
