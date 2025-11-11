import Image from 'next/image';
import type { ComponentProps } from 'react';

type GOLogoProps = Omit<ComponentProps<typeof Image>, 'src' | 'alt' | 'width' | 'height'>;

export function GOLogo(props: GOLogoProps) {
  return (
    <Image
      src="/imgs/logo.png"
      alt="GO ESPORTS Logo"
      width={96}
      height={96}
      {...props}
    />
  );
}
