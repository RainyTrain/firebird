import { User } from 'entitites/User/model/types/user';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import cls from './UserCard.module.scss';

interface UserCardProps {
  className?: string;
  user: User;
  isLoading?: boolean;
}

export const UserCard = (props: UserCardProps) => {
  const { className, user, isLoading } = props;
  return (
    <Card className={classNames(cls.UserCard, {}, [className])}>
      <Text title={user.name} />
      <Text text={user.username} />
      <Text text={user.email} />
    </Card>
  );
};
