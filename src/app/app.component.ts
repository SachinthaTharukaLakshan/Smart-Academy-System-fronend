import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddCustomerPageComponent } from "./page/add-student-page/add-student-page.component";
import { ManageCustomerPageComponent } from "./page/manage-student-page/manage-student-page.component";
import { NavBarComponent } from "./common/nav-bar/nav-bar.component";
import { AddTeacherComponent } from './page/add-teacher/add-teacher.component';
import { ManageTeacherPageComponent } from './page/manage-teacher-page/manage-teacher-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddCustomerPageComponent, ManageCustomerPageComponent, NavBarComponent,AddTeacherComponent,ManageTeacherPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'customer-manage-front-end';
}
