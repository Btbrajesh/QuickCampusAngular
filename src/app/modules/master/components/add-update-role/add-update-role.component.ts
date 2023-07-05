import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-update-role',
  templateUrl: './add-update-role.component.html',
  styleUrls: ['./add-update-role.component.css']
})
export class AddUpdateRoleComponent implements OnInit {
roleForm! :FormGroup;


  constructor(private roleService :RoleService,public fb: FormBuilder,private toastr: ToastrService,private router: Router){

  }

  ngOnInit(): void {
    this.roleForm = this.fb.group({
      'userId':[0],
      'clientId':[0],
      'roleName' :['', Validators.required]
    });
  }



  onSubmit(){
    if (!this.roleForm.invalid) {
      console.log(this.roleForm.value);
      this.roleService.roleAddUpdate(this.roleForm.value).subscribe(resp => {
        debugger
        if(resp.isSuccess){
          this.toastr.success('Role added successfully');
          this.router.navigateByUrl('/roleList');
        }else{
          this.toastr.error(resp.message);
        }
      }, err => {
        this.toastr.error("Something went wrong please try again");
      })
    }else{
      this.toastr.error("Please enter value in required field");
    }
  }
}
