import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from '../../store/users.action';
import { Observable , Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit, OnDestroy {
  users$: Observable<any>;
  users: any[];
  user: any = {};
  private subscription: Subscription;

  constructor(
    private store: Store<any>
  ) {
    this.users$ = this.store.select('users');
  }

  ngOnInit() {
    this.getUsers();
    this.subscription = this.users$.subscribe((state) => {
      this.users = Object.assign([], state);
    }, (err) => console.error(err));
  }

  getUsers() {
    this.store.dispatch(new UserActions.LoadUsers());
  }

  openPopupDelete(id) {
    this.users.forEach((user) => {
      if (id === user.id) {
        this.user = user;
      }
    });
  }

  delete() {
    this.store.dispatch(new UserActions.DeleteUser(this.user.id));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
