import {
  Box,
  CardActionArea,
  CardHeader,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
// import QuizIcon from '@mui/icons-material/Quiz';
import { useAppSelector } from '../../store/hooks';
import styles from './QuizCard.module.css';
import { CardMenu } from '../CardMenu/CardMenu';
import { IQuizCard } from '../utils/types';
import { useTranslation } from 'react-i18next';

export const QuizCard = (props: IQuizCard) => {
  const { card } = props;
  const { title, img, id } = card;
  const allTests = useAppSelector((state) => state.tests.list);
  const darkMode = useAppSelector((state) => state.darkMode.darkMode);
  let testPassed, testFailed, testDate;
  allTests.forEach((el) => {
    if (Number(el.id) === id) {
      testPassed = el.passed;
      testFailed = el.failed;
      testDate = el.date;
    }
  });
  const { t } = useTranslation();
  return (
    <Card className={styles.card} sx={{ background: darkMode ? '#323a4b' : '#ffffff' }}>
      <CardHeader className={styles.card__header} action={<CardMenu card={card} />} />
      <CardActionArea>
        <CardMedia component="img" height="140" image={img} alt="card" />
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '10px' }}>
            {/* <Typography
              sx={{
                color: darkMode ? '#ffffff' : '#424242',
                fontSize: '0.9rem',
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                display: 'flex',
                gap: '3px',
                alignItems: 'center',
              }}
            >
              <QuizIcon />
              {t('quiz')}
            </Typography> */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px', ml: 'auto' }}>
              <Typography
                sx={{
                  color: darkMode ? '#ffffff' : 'rgba(66,66,66,.5)',
                  fontSize: '0.7rem',
                  letterSpacing: '.1em',
                  lineHeight: '1.1rem',
                  textTransform: 'uppercase',
                }}
              >
                {t('published')}
              </Typography>
              <Box
                sx={{
                  borderRadius: '50%',
                  display: 'inline-block',
                  height: '7px',
                  backgroundColor: '#5cb85c',
                  width: '7px',
                }}
              >
                {' '}
              </Box>
            </Box>
          </Box>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: darkMode ? '#ffffff' : '#424242', fontSize: '1.5rem', fontWeight: 700 }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: darkMode ? '#ffffff' : 'rgba(66,66,66,.5)',
              fontSize: '0.7rem',
              letterSpacing: '.05rem',
              lineHeight: '1.6rem',
            }}
          >
            {testDate ? testDate : t('testDate')}
          </Typography>
          {testPassed && testFailed ? (
            <Box className={styles.card__passed} sx={{ color: '#05b4f9' }}>
              <Box className={styles.card__passed_dot} sx={{ backgroundColor: '#05b4f9' }}>
                {' '}
              </Box>
              {t('Passed')}
            </Box>
          ) : testPassed ? (
            <Box className={styles.card__passed} sx={{ color: '#f1003a' }}>
              <Box className={styles.card__passed_dot} sx={{ backgroundColor: '#f1003a' }}>
                {' '}
              </Box>
              {t('Failed')}
            </Box>
          ) : (
            <Box className={styles.card__passed} sx={{ color: '#5cb85c' }}>
              <Box className={styles.card__passed_dot} sx={{ backgroundColor: '#5cb85c' }}>
                {' '}
              </Box>
              {t('Active')}
            </Box>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
