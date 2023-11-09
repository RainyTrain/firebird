import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  square?: boolean;
  disabled?: boolean;
  chilren?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const { className, children, square, disabled, ...otherProps } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(cls.Button, mods, [className])}
      {...otherProps}>
      {children}
    </button>
  );
});
