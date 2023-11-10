import { useAppDispatch } from 'app/providers/store/store';
import { SearchUserType } from 'features/SearchUser';
import { SearchUser } from 'features/SearchUser/ui/SearchUser';
import { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTypedSelector } from 'shared/lib/hooks/useTypedSelector';
import { Page } from 'widgets/Page';
import { UserDashboard } from 'widgets/UserDashboard/ui/UserDashboard';
import { UserActionType } from '../model/reducers/MainPageUsersReducer';
import { getUsers } from '../model/services/getUsers/getUsers';
import cls from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}

export const MainPage = ({ className }: MainPageProps) => {
  const dispatch = useAppDispatch();

  const { isError, data, isLoading } = useTypedSelector((state) => state.users);

  useEffect(() => {
    // @ts-ignore
    dispatch(getUsers());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  const setFilter = (arg: string) => {
    dispatch({ type: SearchUserType.SET_SEARCH, payload: arg });
    dispatch({ type: UserActionType.FILTER_USER, payload: arg });
  };

  const resetFilter = () => {
    dispatch({ type: SearchUserType.RESET_SEARCH });
    dispatch({ type: UserActionType.RESET_FILTERS });
  };

  return (
    <Page className={classNames(cls.MainPage, {}, [className])}>
      <SearchUser setFilter={setFilter} resetFilter={resetFilter} />
      <UserDashboard users={data} />
    </Page>
  );
};
