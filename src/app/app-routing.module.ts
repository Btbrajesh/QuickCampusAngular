import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/shared/components/layout/layout.component';
import { LoginComponent } from './modules/shared/components/login/login.component';

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
      { path: 'dashboard', component: LayoutComponent },
    ],
  },
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
