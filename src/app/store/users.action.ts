import { Action } from '@ngrx/store';
import * as Types from './action.types';

export class LoadUsers implements Action {
  readonly type = Types.LOAD_USERS;
}

export class GetUsers implements Action {
  readonly type = Types.GET_USERS;

  constructor(public payload: Array<any>) {
  }
}

export class CreateUserSuccess implements Action {
  readonly type = Types.CREATE_USER_SUCCESS;
}

export class DataCreateUser implements Action {
  readonly type = Types.DATA_CREATE_USER;

  constructor(public data: any) {
  }
}

export class EditUser implements Action {
  readonly type = Types.EDIT_USER;

  constructor(public data: {}) {
  }
}

export class EditUserSuccess implements Action {
  readonly type = Types.EDIT_USER_SUCCESS;
}

export class GetDetailUser implements Action {
  readonly type = Types.LOAD_DETAIL_USER_BY_ID;

  constructor(public id: number) {
  }
}

export class GetUserById implements Action {
  readonly type = Types.GET_USER_BY_ID;

  constructor(public user: {}) {
  }
}

export class DeleteUserSuccess implements Action {
  readonly type = Types.DELETE_USER_SUCCESS;

  constructor(public id: number) {
  }
}

export class DeleteUser implements Action {
  readonly type = Types.DELETE_USER;

  constructor(public id: number) {
  }
}
