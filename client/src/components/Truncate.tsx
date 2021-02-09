import { FC } from 'react';

interface TruncateProps {
  text: string;
  position: number;
}

const Truncate: FC<TruncateProps> = ({ text, position }) => {
  if (text.length > position) {
    return <>`${text.slice(0, position)}...`</>;
  }
  return <>{text}</>;
};

export default Truncate;
