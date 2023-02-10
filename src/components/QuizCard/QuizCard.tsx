import {
  Box,
  CardActionArea,
  CardHeader,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';
import { SERVICE_MESSAGES } from '../utils/constants';
import { useAppSelector } from '../../store/hooks';
import styles from './QuizCard.module.css';
import { CardMenu } from '../CardMenu/CardMenu';
import { IQuizCard } from '../utils/types';

export const QuizCard = (props: IQuizCard) => {
  const { card } = props;
  const { title, img, id } = card;
  const allTests = useAppSelector((state) => state.tests.list);
  let testPassed, testFailed, testDate;
  allTests.forEach((el) => {
    if (Number(el.id) === id) {
      testPassed = el.passed;
      testFailed = el.failed;
      testDate = el.date;
    }
  });
  return (
    <Card className={styles.card}>
      <CardHeader className={styles.card__header} action={<CardMenu card={card} />} />
      <CardActionArea>
        <CardMedia component="img" height="140" image={img} alt="card" />
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '10px' }}>
            <Typography
              sx={{
                color: '#424242',
                fontSize: '0.9rem',
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                display: 'flex',
                gap: '3px',
                alignItems: 'center',
              }}
            >
              <QuizIcon />
              {SERVICE_MESSAGES.quiz}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
              <Typography
                sx={{
                  color: 'rgba(66,66,66,.5)',
                  fontSize: '0.7rem',
                  letterSpacing: '.1em',
                  lineHeight: '1.1rem',
                  textTransform: 'uppercase',
                }}
              >
                {SERVICE_MESSAGES.published}
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
            sx={{ color: '#424242', fontSize: '1.5rem', fontWeight: 700 }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: 'rgba(66,66,66,.5)',
              fontSize: '0.7rem',
              letterSpacing: '.05rem',
              lineHeight: '1.6rem',
            }}
          >
            {testDate ? testDate : SERVICE_MESSAGES.testDate}
          </Typography>
          {testPassed && testFailed ? (
            <Box className={styles.card__passed} sx={{ color: '#05b4f9' }}>
              <Box className={styles.card__passed_dot} sx={{ backgroundColor: '#05b4f9' }}>
                {' '}
              </Box>
              Passed
            </Box>
          ) : testPassed ? (
            <Box className={styles.card__passed} sx={{ color: '#f1003a' }}>
              <Box className={styles.card__passed_dot} sx={{ backgroundColor: '#f1003a' }}>
                {' '}
              </Box>
              Failed
            </Box>
          ) : (
            <Box className={styles.card__passed} sx={{ color: '#5cb85c' }}>
              <Box className={styles.card__passed_dot} sx={{ backgroundColor: '#5cb85c' }}>
                {' '}
              </Box>
              Active
            </Box>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
