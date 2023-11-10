import { User } from 'entitites/User';
import { MainPageUsersSchema } from '../types/MainPageUserSchema';

export enum UserActionType {
  FETCH_USERS_PENDING = 'FETCH_USERS_PENDING',
  FETCH_USERS_FULFILLED = 'FETCH_USERS_FULFILLED',
  FETCH_USERS_REJECTED = 'FETCH_USERS_REJECTED',
}

export interface FetchUsersAction {
  type: UserActionType.FETCH_USERS_PENDING;
}

interface FetchFulfilledAction {
  type: UserActionType.FETCH_USERS_FULFILLED;
  payload: User[];
}

interface FetchUsersErrorAction {
  type: UserActionType.FETCH_USERS_REJECTED;
}

const initialState: MainPageUsersSchema = {
  data: [],
  isError: false,
  isLoading: false,
};

export type UserAction = FetchUsersAction | FetchFulfilledAction | FetchUsersErrorAction;

export const mainPageUsersReducer = (
  state = initialState,
  action: UserAction,
): MainPageUsersSchema => {
  switch (action.type) {
    case UserActionType.FETCH_USERS_PENDING:
      return { ...state, isLoading: true };
    case UserActionType.FETCH_USERS_FULFILLED:
      return { ...state, data: action.payload, isLoading: false };
    case UserActionType.FETCH_USERS_REJECTED:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
