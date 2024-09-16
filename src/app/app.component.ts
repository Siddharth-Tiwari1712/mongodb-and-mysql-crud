import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  userData: any;
  constructor(
    usersService : UsersService
  ){
    usersService.getUsers().subscribe(res=>{
      this.userData = res;
      console.log("Response from get" ,res);
    })
  }


}
