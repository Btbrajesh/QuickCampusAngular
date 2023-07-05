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

  constructor(private authenticationService :AuthenticationService){
  }

  ngOnInit(): void {
    const user = this.authenticationService.userValue;
    this.userRole = user.roleMasters;
  }
}
