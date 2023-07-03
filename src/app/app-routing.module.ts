import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/shared/components/layout/layout.component';
import { LoginComponent } from './modules/shared/components/login/login.component';
import { Page404Component } from './modules/shared/components/page404/page404.component';
import { Page500Component } from './modules/shared/components/page500/page500.component';
import { Role } from './_models/role';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {path: 'login',component:LoginComponent},
  {
    path: '',
    component: LayoutComponent, // Use the MainLayoutComponent as the layout for authenticated pages
    children: [
      { path: 'dashboard', component: LayoutComponent},

    ],
  },
  {path:'404', component:Page404Component},
  {path: '500', component: Page500Component},
   {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
