import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {EditAndCreateUserComponent} from './components/edit-and-create-user/edit-and-create-user.component';
import {UsersComponent} from './components/users/users.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'user/:id/edit',
    component: EditAndCreateUserComponent
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
export class AppRoutingModule {
}
