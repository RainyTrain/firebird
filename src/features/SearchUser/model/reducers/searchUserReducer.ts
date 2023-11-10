import { SearchUserSchema } from '../types/SearchUser';

export enum SearchUserType {
  SET_SEARCH = 'SET_SEARCH',
  RESET_SEARCH = 'RESET_SEARCH',
}

interface SetSearch {
  type: SearchUserType.SET_SEARCH;
  payload: string;
}

interface ResetSearch {
  type: SearchUserType.RESET_SEARCH;
}

const initialState: SearchUserSchema = {
  search: '',
};

type SearchAction = SetSearch | ResetSearch;

export const searchUserReducer = (state = initialState, action: SearchAction): SearchUserSchema => {
  switch (action.type) {
    case SearchUserType.SET_SEARCH:
      return { ...state, search: action.payload };
    case SearchUserType.RESET_SEARCH:
      return { ...state, search: '' };

    default:
      return state;
  }
};
