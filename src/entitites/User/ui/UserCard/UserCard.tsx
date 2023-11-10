import { User } from 'entitites/User/model/types/user';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTypedSelector } from 'shared/lib/hooks/useTypedSelector';
import { Button } from 'shared/ui/Button/Button';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import cls from './UserCard.module.scss';

interface UserCardProps {
  className?: string;
  user: User;
  deleteUserById: (arg: string) => void;
}

export const UserCard = (props: UserCardProps) => {
  const { className, user, deleteUserById } = props;

  const { search } = useTypedSelector((state) => state.search);

  const highlightText = (arg: string, aim: string) => {
    if (arg.length > 1) {
      const regx = new RegExp(`(${arg})`, 'gi');
      const splited = aim.split(regx);

      return (
        <p>
          {splited.map((element: string) => {
            return (
              <span
                style={
                  arg.toLowerCase() === element.toLowerCase()
                    ? { color: 'black', background: 'yellow' }
                    : undefined
                }>
                {element}
              </span>
            );
          })}
        </p>
      );
    }
    return <Text text={aim} />;
  };

  return (
    <Card className={classNames(cls.UserCard, {}, [className])}>
      <div className={cls.info}>
        <b>{highlightText(search, user.name)}</b>
        {highlightText(search, user.username)}
        {highlightText(search, user.email)}
      </div>
      <Button onClick={() => deleteUserById(user.id)} className={cls.removeBtn}>
        Remove
      </Button>
    </Card>
  );
};
