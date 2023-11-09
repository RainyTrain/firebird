import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './SearchUser.module.scss';

interface SearchUserProps {
  className?: string;
}

export const SearchUser = ({ className }: SearchUserProps) => {
  return (
    <div className={classNames(cls.SearchUser, {}, [className])}>
      <Input className={cls.input} placeholder="Search" />
      <Button className={cls.resetBtn}>Reset</Button>
    </div>
  );
};
