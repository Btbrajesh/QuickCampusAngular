import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/_helpers/auth.guard";
import { ApplicantlistComponent } from "./components/applicantlist/applicantlist.component";
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { LayoutComponent } from "../shared/components/layout/layout.component";

const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        {path: 'applicant',component:ApplicantlistComponent,canActivate: [AuthGuard]}
      ]
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class CoreRoutingModule {}
  