import { User } from 'entitites/User';

export interface MainPageUsersSchema {
  data: User[];
  copy: User[];
  isLoading?: boolean;
  isError?: boolean;
}
