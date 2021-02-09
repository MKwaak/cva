import { FC } from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  profileImage: {
    width: '5rem',
    marginRight: '1rem',
    '& img': {
      borderRadius: '50%',
      width: '100%',
      height: '100%',
    },
  },
  profileImageLarge: {
    width: '15rem',
    height: '15rem',
  },
}));

interface ProfileImageProps {
  imageUrl: string;
  alt: string;
  large?: boolean;
}

const ProfileImage: FC<ProfileImageProps> = ({ imageUrl, alt, large }) => {
  const classes = useStyles({});
  return (
    <Box className={`${classes.profileImage} ${large ? classes.profileImageLarge : ''}`}>
      <img src={imageUrl} alt={alt} />
    </Box>
  );
};

export default ProfileImage;
