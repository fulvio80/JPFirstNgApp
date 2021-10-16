import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { UpdateUserFormComponent } from './update-user-form/update-user-form.component';
import { TableUsersComponent } from './table-users/table-users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users', component: TableUsersComponent
  },
  {
    path: 'users/:id/edit', component: UpdateUserFormComponent
  },
  {
    path: 'users/new', component: NewUserFormComponent
  },
  {
    path: '', 
    redirectTo: 'users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
