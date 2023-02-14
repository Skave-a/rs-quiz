import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import style from './Footer.module.css';
import { LINK_TO_THE_COURSE } from '../utils/constants';
import { useAppSelector } from '../../store/hooks';

export const develops = [
  {
    id: 1,
    name: 'Georgiy Beloklokov',
    link: 'https://github.com/georgiybeloklokov',
  },
  {
    id: 2,
    name: 'Natalya Polyakova',
    link: 'https://github.com/Skave-a',
  },
  {
    id: 3,
    name: 'Oksana Kovsh',
    link: 'https://github.com/ksankakovsh',
  },
];

export const Footer = () => {
  const darkMode = useAppSelector((state) => state.darkMode.darkMode);
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: darkMode ? '#323a4b' : '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Box component={Box} maxWidth="sm" className={style.dev}>
        {develops.map((develop) => (
          <Box key={develop.id}>
            <a className={style.github} href={develop.link} target="_blank" rel="noreferrer">
              {develop.name}
            </a>
          </Box>
        ))}
      </Box>
      <Link className={style.rss} href={LINK_TO_THE_COURSE} target="_blank" rel="noreferrer">
        <Typography component="span" className={style.year}>
          2023
        </Typography>
      </Link>
    </Box>
  );
};
