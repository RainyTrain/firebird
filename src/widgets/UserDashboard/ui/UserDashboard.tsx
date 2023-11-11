import { useAppDispatch } from 'app/providers/store/store';
import { User } from 'entitites/User';
import { UserCard } from 'entitites/User/ui/UserCard/UserCard';
import { UserActionType } from 'pages/MainPage/model/reducers/MainPageUsersReducer';
import { memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './UserDashboard.module.scss';

interface UserDashboardProps {
  className?: string;
  users: User[];
  isLoading?: boolean;
}

export const UserDashboard = memo(({ className, users, isLoading }: UserDashboardProps) => {
  const dispatch = useAppDispatch();

  const deleteUserById = useCallback(
    (id: string) => {
      dispatch({ type: UserActionType.DELETE_USER, payload: id });
    },
    [dispatch],
  );

  const cards = useMemo(() => {
    const userCards = users.map((user) => {
      return <UserCard deleteUserById={deleteUserById} user={user} className={cls.card} />;
    });

    return userCards;
  }, [users]);

  if (isLoading) {
    const skeletons = new Array(3).fill(0).map(() => {
      return (
        <Card className={classNames(cls.UserCard, {}, [className])}>
          <div className={cls.info}>
            <Skeleton width={'300px'} height={'20px'} />
            <Skeleton width={'300px'} height={'20px'} />
            <Skeleton width={'300px'} height={'20px'} />
          </div>
          <Skeleton height={'20px'} width={'20px'} />
        </Card>
      );
    });

    return <div className={classNames(cls.UserDashboard, {}, [className])}>{skeletons}</div>;
  }

  return <div className={classNames(cls.UserDashboard, {}, [className])}>{cards}</div>;
});
