import { useAppSelector } from '../../store/hooks';
import { Box, Button, Link, Typography } from '@mui/material';
import { QuizCard } from '../QuizCard/QuizCard';
import { SERVICE_MESSAGES } from '../utils/constants';
import { Link as RouterLink } from 'react-router-dom';

export const Main = () => {
  const allCards = useAppSelector((state) => state.cards.list);
  return (
    <Box>
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '72px' }}
      >
        <Typography sx={{ fontSize: '1.8rem', lineHeight: '4rem' }}>
          {SERVICE_MESSAGES.myQuizzes}
        </Typography>
        <Link component={RouterLink} to="/create-quiz" underline="none">
          <Button variant="contained" sx={{ color: '#fff', letterSpacing: '.1em' }}>
            {SERVICE_MESSAGES.createNew}
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          pb: '72px',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {allCards.map((card) => (
          <RouterLink key={card.id} style={{ textDecoration: 'none' }} to={`/test/${card.id}`}>
            <QuizCard key={card.id} {...card} />
          </RouterLink>
        ))}
      </Box>
    </Box>
  );
};
