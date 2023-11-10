import { useAppDispatch } from 'app/providers/store/store';
import { SearchUser } from 'features/SearchUser/ui/SearchUser';
import { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTypedSelector } from 'shared/lib/hooks/useTypedSelector';
import { Page } from 'widgets/Page';
import { UserDashboard } from 'widgets/UserDashboard/ui/UserDashboard';
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
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <Page className={classNames(cls.MainPage, {}, [className])}>
      <SearchUser />
      <UserDashboard users={data} />
    </Page>
  );
};
