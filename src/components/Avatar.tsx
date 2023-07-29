import styles from './Avatar.module.css';

interface AvatarProps {
  hasBorder?: boolean;
  src: string;
  alt?: string;
}

//Olhar com atenção desestruturação
// eslint-disable-next-line react/prop-types
export function Avatar({ hasBorder = true, src, alt }: AvatarProps) {
  return (

    < img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />

  );
}