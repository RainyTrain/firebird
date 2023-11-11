import { User } from 'entitites/User';
import { MainPageUsersSchema } from '../types/MainPageUserSchema';

export enum UserActionType {
  FETCH_USERS_PENDING = 'FETCH_USERS_PENDING',
  FETCH_USERS_FULFILLED = 'FETCH_USERS_FULFILLED',
  FETCH_USERS_REJECTED = 'FETCH_USERS_REJECTED',
  DELETE_USER = 'DELETE_USERS',
  FILTER_USER = 'FILTER_USER',
  RESET_FILTERS = 'RESET_FILTERS',
}

interface FetchUsersAction {
  type: UserActionType.FETCH_USERS_PENDING;
}

interface FetchFulfilledAction {
  type: UserActionType.FETCH_USERS_FULFILLED;
  payload: User[];
}

interface FetchUsersErrorAction {
  type: UserActionType.FETCH_USERS_REJECTED;
}

interface DeleteUser {
  type: UserActionType.DELETE_USER;
  payload: string;
}

interface FilterUser {
  type: UserActionType.FILTER_USER;
  payload: string;
}
interface ResetFilters {
  type: UserActionType.RESET_FILTERS;
}

const initialState: MainPageUsersSchema = {
  data: [],
  copy: [],
  isError: false,
  isLoading: false,
};

export type UserAction =
  | FetchUsersAction
  | FetchFulfilledAction
  | FetchUsersErrorAction
  | DeleteUser
  | FilterUser
  | ResetFilters;

export const mainPageUsersReducer = (
  state = initialState,
  action: UserAction,
): MainPageUsersSchema => {
  switch (action.type) {
    case UserActionType.FETCH_USERS_PENDING:
      return { ...state, isLoading: true };
    case UserActionType.FETCH_USERS_FULFILLED:
      return { ...state, data: action.payload, copy: action.payload, isLoading: false };
    case UserActionType.FETCH_USERS_REJECTED:
      return { ...state, isLoading: false, isError: true };
    case UserActionType.FETCH_USERS_REJECTED:
      return { ...state, isLoading: false, isError: true };
    case UserActionType.DELETE_USER:
      const newArr = state.data.filter((user: User) => user.id != action.payload);
      return { ...state, data: newArr };
    case UserActionType.FILTER_USER:
      const filtered = state.data.filter((user: User) => {
        return action.payload === ''
          ? user
          : user.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()) ||
              user.username.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()) ||
              user.email.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase());
      });
      return { ...state, data: filtered };
    case UserActionType.RESET_FILTERS:
      return { ...state, data: state.copy };

    default:
      return state;
  }
};
