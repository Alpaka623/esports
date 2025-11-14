import Image, {ImageProps} from 'next/image';

type GOLogoProps = Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'>;

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
