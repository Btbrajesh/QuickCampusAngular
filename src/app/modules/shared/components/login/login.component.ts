import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { ToastrService } from 'ngx-toastr';
import { Login } from '../../modals/login';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  loginForm!: FormGroup;
  loading:boolean=false;
  submitted = false;
  error = '';
  loginData: { userName: string, password: string } = { userName: '', password: '' };

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private toastr: ToastrService,
    private authenticationService :AuthenticationService) {
   
  }

  ngOnInit() {
    this.loading = true;
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      check: [false],
    });
  }

  submitForm(){
    debugger;
    this.submitted = true;
    if (this.loginForm.invalid) {
              return;
    }
    this.loginData.userName = this.loginForm.value.email;
    this.loginData.password = this.loginForm.value.password;
    this.authenticationService.login(this.loginData.userName,this.loginData.password).subscribe(resp =>{
      if(resp.result.isSuccess){
        this.toastr.success(resp.result.message);
        this.router.navigateByUrl('/dashboard');
      }else{
        this.toastr.error(resp.result.message);
      }
      console.log(resp ,"login data");
    },err =>{
      this.toastr.error(err);
    });
  }
}
