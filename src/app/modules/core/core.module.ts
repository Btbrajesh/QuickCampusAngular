import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantlistComponent } from './components/applicantlist/applicantlist.component';
import { CoreRoutingModule } from './core-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [ApplicantlistComponent],
  imports: [CommonModule,CoreRoutingModule,DataTablesModule,NgxPaginationModule,NgxSpinnerModule],
})
export class CoreModule {}
