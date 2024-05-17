import { Component } from '@angular/core';
import { NavigationServiceService } from '../../services/navigation-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {
     constructor(private navSrvc:NavigationServiceService){
     }

     ngOnInit(){
      console.log(this.navSrvc.getNav()); 
     }
}
