import { User } from 'entitites/User/model/types/user';
import { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTypedSelector } from 'shared/lib/hooks/useTypedSelector';
import { Button } from 'shared/ui/Button/Button';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { ModalInfo } from '../ModalInfo/ui/ModalInfo';
import cls from './UserCard.module.scss';

interface UserCardProps {
  className?: string;
  user: User;
  deleteUserById: (arg: string) => void;
}

export const UserCard = (props: UserCardProps) => {
  const { className, user, deleteUserById } = props;

  const { search } = useTypedSelector((state) => state.search);

  const [isModalOpen, setModalOpen] = useState(false);

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

  const onOpenModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const deleteUser = (arg: string) => (event: React.MouseEvent) => {
    event.stopPropagation();
    deleteUserById(arg);
  };

  return (
    <Card className={classNames(cls.UserCard, {}, [className])} onClick={onOpenModal}>
      <div className={cls.info}>
        <b>{highlightText(search, user.name)}</b>
        {highlightText(search, user.username)}
        {highlightText(search, user.email)}
      </div>
      <Button onClick={deleteUser(user.id)} className={cls.removeBtn}>
        Remove
      </Button>
      {isModalOpen && <ModalInfo onClose={onCloseModal} isOpen={isModalOpen} user={user} />}
    </Card>
  );
};
