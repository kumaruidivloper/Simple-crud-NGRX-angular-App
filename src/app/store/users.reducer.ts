import * as Types from './action.types';

export const initUsers = [];

export function UsersReducer(state = initUsers, action) {

  switch (action.type) {

    case Types.GET_USERS: {
      state = action.payload;
      return [...state];
    }

    case Types.GET_USER_BY_ID: {
      return {...action};
    }

    case Types.CREATE_USER_SUCCESS: {
      return {...action};
    }

    case Types.EDIT_USER_SUCCESS: {
      return {...action};
    }

    case Types.DELETE_USER_SUCCESS: {
      const users = state.filter((user) => user.id !== action.id);
      return [...users];
    }

    default:
      return state;

  }

}
