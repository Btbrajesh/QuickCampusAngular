import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantlistComponent } from './applicantlist/applicantlist.component';
import { CoreRoutingModule } from './core-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ApplicantlistComponent],
  imports: [CommonModule,CoreRoutingModule,DataTablesModule,NgxPaginationModule],
})
export class CoreModule {}
