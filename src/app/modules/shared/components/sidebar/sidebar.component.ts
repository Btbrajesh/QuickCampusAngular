import { Component, OnInit } from '@angular/core';
import { AuthDataResponse } from 'src/app/_models/authData';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userPermissions :any;
  clientPermissions :any;
  userRole!: AuthDataResponse[];
  public userRoleLoaded: boolean = false;

  constructor(private authenticationService :AuthenticationService){
    debugger;
    // const user = this.authenticationService.userValue;
    // if(user != null && user != undefined){
    //   this.userRole = user.roleMasters;
    // }
    this.authenticationService.user.subscribe(user => {
      if (user && user.roleMasters) {
        this.userRole = user.roleMasters;
        this.userRoleLoaded = true;
        console.log(this.userRole);
      }
    });
  }

  ngOnInit(): void {
   
  }
}
