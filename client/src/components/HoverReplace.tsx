import { FC, useState } from 'react';
import { Box } from '@material-ui/core';

interface HoverReplaceProps {
  mainRender: JSX.Element;
  hoverRender: JSX.Element;
}

const HoverReplace: FC<HoverReplaceProps> = ({ mainRender, hoverRender }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Box height="100%" onMouseEnter={(): void => setHovered(true)} onMouseLeave={(): void => setHovered(false)}>
      {hovered && hoverRender}
      {!hovered && mainRender}
    </Box>
  );
};

export default HoverReplace;
