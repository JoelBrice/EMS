import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';

export const AppRoutes: Routes = [

      {
        path: '', component: LoginComponent
      },
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'employees', component: EmployeesComponent
      },
  {
    path: '**',
    redirectTo: 'authentication/404'
  }
];
