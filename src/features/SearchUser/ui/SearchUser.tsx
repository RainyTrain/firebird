import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './SearchUser.module.scss';

interface SearchUserProps {
  className?: string;
  setFilter: (arg: string) => void;
  resetFilter: () => void;
}

export const SearchUser = ({ className, setFilter, resetFilter }: SearchUserProps) => {
  return (
    <div className={classNames(cls.SearchUser, {}, [className])}>
      <Input className={cls.input} placeholder="Search" onChange={setFilter} />
      <Button className={cls.resetBtn} onClick={resetFilter}>
        Reset
      </Button>
    </div>
  );
};
