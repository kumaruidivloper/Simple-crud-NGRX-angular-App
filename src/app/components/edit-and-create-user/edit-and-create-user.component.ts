import {Component, OnInit, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import * as UserActions from './../../store/users.action';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable , Subscription} from 'rxjs';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './edit-and-create-user.component.html',
  styleUrls: ['./edit-and-create-user.component.css']
})
export class EditAndCreateUserComponent implements OnInit, OnDestroy {
  user = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    old: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)])
  });

  private subscription: Subscription;

  get name() {
    return this.user.get('name');
  }

  get email() {
    return this.user.get('email');
  }

  get old() {
    return this.user.get('old');
  }

  userId: string;
  user$: Observable<any>;
  isEditScreen = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<any>
  ) {
    this.user$ = this.store.select('users');
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((res) => {
      this.userId = res.get('id');
      this.isEditScreen = !!Number(this.userId);
      this.subscribeUser();
    });
    if (this.isEditScreen) {
      this.getUserById(this.userId);
    } else {
      this.user.reset();
    }
  }

  subscribeUser() {
    this.subscription = this.user$.subscribe((state) => {
      if (state  && state.user && state.user.name) {
        this.user.setValue({
          name: state.user.name,
          old: state.user.old,
          email: state.user.email
        });
      }
      if (state.type === 'EDIT_USER_SUCCESS' || state.type === 'CREATE_USER_SUCCESS' && this.user.valid) {
        this.router.navigate(['/']);
      }
    }, (err) => console.error(err));
  }

  getUserById(id) {
    this.store.dispatch(new UserActions.GetDetailUser(id));
  }

  edit() {
    this.store.dispatch(new UserActions.EditUser({
        id: Number(this.userId),
        user: this.user.value
      })
    );
  }

  create() {
    this.store.dispatch(new UserActions.DataCreateUser(this.user.value));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
