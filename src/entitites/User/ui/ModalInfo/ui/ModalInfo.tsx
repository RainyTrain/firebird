import { User } from '../../../model/types/user';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Text } from 'shared/ui/Text/Text';

interface ModalInfoProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  user: User;
}

export const ModalInfo = ({ className, isOpen, onClose, user }: ModalInfoProps) => {
  console.log(user.company);
  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy className={classNames('', {}, [className])}>
      <b>
        <span>Adress:</span>
      </b>
      <Text text={`${user.address.city} ${user.address.street}`} />
      <b>
        <span>Company:</span>
      </b>
      <Text text={user.company.name} />
    </Modal>
  );
};
