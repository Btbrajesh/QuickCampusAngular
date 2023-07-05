import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApplicantlistComponent } from './modules/core/applicantlist/applicantlist.component';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { fakeBackendProvider } from './_helpers/fack-backend';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { AddUpdateRoleComponent } from './modules/master/components/add-update-role/add-update-role.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RoleListComponent } from './modules/master/components/role-list/role-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicantlistComponent,
    AddUpdateRoleComponent,
    RoleListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({positionClass: 'toast-top-right'}),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
