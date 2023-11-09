import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  autofocus?: boolean;
  lazy?: boolean;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  useEffect(() => {
    if (autofocus) {
      inputRef.current?.focus();
    }
  }, [autofocus]);

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
        placeholder={placeholder}
        {...otherProps}
      />
    </div>
  );
});
