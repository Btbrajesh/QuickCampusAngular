import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from "./components/layout/layout.component";
import { DeskboardComponent } from './components/deskboard/deskboard.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    LayoutComponent,
    DeskboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  LayoutComponent
  ],
})
export class SharedModule {}
