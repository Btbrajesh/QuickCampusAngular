import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../../services/role.service';
import { RoleResponseList } from '../../../modals/roleResponseModal';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  roleList:RoleResponseList[]=[];
  p: number = 1;
  isLength!: boolean;
  selectAll: boolean = false;

  constructor(private roleService:RoleService){

  }

  ngOnInit(): void {
this.roleService.getAllRole().subscribe(resp =>{
  console.log(resp);
  this.isLength = true;
  if(resp.length>0){
    this.isLength = false;
    this.roleList = resp;
  }
})
    
  }

  toggleSelectAll(event: any) {
    const isChecked = event.target.checked;
    for (let role of this.roleList) {
        role.checked = isChecked;
    }
}
}
