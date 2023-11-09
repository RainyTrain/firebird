import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  align?: TextAlign;
}

export const Text = ({ className, title, text, align = TextAlign.LEFT }: TextProps) => {
  const mods = {
    [cls[align]]: true,
  };

  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
