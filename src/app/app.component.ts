import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationServiceService } from '../services/navigation-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'MilestonesLanding';
  constructor(private navSrvc:NavigationServiceService){
  }

  ngOnInit(){
    console.log(this.navSrvc.getNav()); 
  }
}
