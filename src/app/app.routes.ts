import { Routes } from '@angular/router';
import { AddCustomerPageComponent } from './page/add-student-page/add-student-page.component';
import { ManageCustomerPageComponent } from './page/manage-student-page/manage-student-page.component';
import { AddTeacherComponent } from './page/add-teacher/add-teacher.component';
import { ManageTeacherPageComponent } from './page/manage-teacher-page/manage-teacher-page.component';

export const routes: Routes = [
    {
        path:"add-customer",
        component:AddCustomerPageComponent
    },
    {
        path:"manage-customer",
        component:ManageCustomerPageComponent
    },
    {
        path:"add-teacher",
        component:AddTeacherComponent
    },
    {
        path:"manage-teacher",
        component:ManageTeacherPageComponent
    }
];
