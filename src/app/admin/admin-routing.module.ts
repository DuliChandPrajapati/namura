import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', component: UserManagementComponent},
  { path: 'users', component: UserListComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations:[UserManagementComponent,UserListComponent]
})
export class AdminRoutingModule { }
