import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project3';
  data = [{
    route: 'overview',
    outlet: 'overview'
  },
  {
    route: 'mapquery',
    outlet: 'boxmap'
  },
  {
    route: 'mapstatic',
    outlet: 'boxmap'
  }];

  constructor(private router: Router) { }
  routerTo(index) {
    const navTo = './' + this.data[index].route;

    this.router.navigate([navTo], {
      queryParams: {
        id: index
      },
    });
  }

}
