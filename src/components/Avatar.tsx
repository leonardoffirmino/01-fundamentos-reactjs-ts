import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;

}

//Olhar com atenção desestruturação
// eslint-disable-next-line react/prop-types
export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (

    < img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />

  );
}