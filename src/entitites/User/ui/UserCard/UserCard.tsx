import { User } from 'entitites/User/model/types/user';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import cls from './UserCard.module.scss';

interface UserCardProps {
  className?: string;
  user: User;
}

export const UserCard = (props: UserCardProps) => {
  const { className, user } = props;

  return (
    <Card className={classNames(cls.UserCard, {}, [className])}>
      <div className={cls.info}>
        <Text title={user.name} />
        <Text text={user.username} />
        <Text text={user.email} />
      </div>
      <Button className={cls.removeBtn}>Remove</Button>
    </Card>
  );
};
