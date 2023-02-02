import { Box, Button, Typography } from '@mui/material';
// import { QuizCard } from '../../components/QuizCard/QuizCard';
import { SERVICE_MESSAGES } from '../../components/utils/constants';
import { CreateQuiz } from '../CreateQuiz/CreateQuiz';

export const Main = () => {
  return (
    <Box>
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '20px' }}
      >
        <Typography sx={{ fontSize: '1.8rem', lineHeight: '4rem' }}>
          {SERVICE_MESSAGES.myQuizzes}
        </Typography>
        <Button variant="contained" sx={{ color: '#fff', letterSpacing: '.1em' }}>
          {SERVICE_MESSAGES.createNew}
        </Button>
      </Box>
      <CreateQuiz />
      {/* <QuizCard /> */}
    </Box>
  );
};
