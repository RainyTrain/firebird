import { User } from 'entitites/User';

export interface MainPageUsersSchema {
  data?: User[];
  isLoading?: boolean;
  isError?: boolean;
}
