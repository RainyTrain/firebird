import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  chilren?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const { className, children, ...otherProps } = props;

  return (
    <button type="button" className={classNames('', {}, [className])} {...otherProps}>
      {children}
    </button>
  );
});
