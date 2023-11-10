import axios from 'axios';
import { UserActionType } from '../../reducers/MainPageUsersReducer';
import { AppDispatch } from 'app/providers/store/store';
import { User } from 'entitites/User';

export const getUsers = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: UserActionType.FETCH_USERS_PENDING });
      const res = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
      dispatch({ type: UserActionType.FETCH_USERS_FULFILLED, payload: res.data });
    } catch (error) {
      dispatch({ type: UserActionType.FETCH_USERS_REJECTED });
    }
  };
};
