import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  data = ['overview', 'mapboxmap'];

  constructor(private router: Router) { }

  ngOnInit() {
  }



  routerTo(index) {
    const navTo = './' + this.data[index];
    this.router.navigate([navTo], {
      queryParams: {
        id: index
      }
    });
  }
}
