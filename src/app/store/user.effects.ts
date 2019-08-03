import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import { UserService } from '../service/user.service';

import * as Types from './action.types';
import * as UserActions from './users.action';

@Injectable({
  providedIn: 'root'
})

export class UserEffects {

  constructor(
    private action$: Actions,
    private userService: UserService
  ) {
  }

  @Effect() getUsers$ = this.action$.pipe(
    ofType(Types.LOAD_USERS),
    mergeMap(() => this.userService.getUsers().pipe(
      map((res: any) => {
        return new UserActions.GetUsers(res);
      })
    ))
  );

  @Effect() getUser$ = this.action$.pipe(
    ofType(Types.LOAD_DETAIL_USER_BY_ID),
    mergeMap((action: any) => {
      return this.userService.getUserById(action.id).pipe(
        map((res: any) => {
          return new UserActions.GetUserById(res);
        })
      );
    })
  );

  @Effect() createUser$ = this.action$.pipe(
    ofType(Types.DATA_CREATE_USER),
    mergeMap((action: any) => this.userService.createUser(action.data).pipe(
      map(() => {
        return new UserActions.CreateUserSuccess();
      })
    ))
  );

  @Effect() deleteUser$ = this.action$.pipe(
    ofType(Types.DELETE_USER),
    mergeMap((action: any) => this.userService.deleteUserById(action.id).pipe(
      map(() => {
        return new UserActions.DeleteUserSuccess(action.id);
      })
    ))
  );

  @Effect() updateUser$ = this.action$.pipe(
    ofType(Types.EDIT_USER),
    mergeMap((action: any) => {
      return this.userService.updateUserById(action.data.id, action.data.user).pipe(
        map(() => {
          return new UserActions.EditUserSuccess();
        })
      );
    })
  );
}
