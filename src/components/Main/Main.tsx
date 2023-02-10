import { useAppSelector } from '../../store/hooks';
import { Box, Button, Grid, Link, Typography } from '@mui/material';
import { QuizCard } from '../QuizCard/QuizCard';
import { SERVICE_MESSAGES } from '../utils/constants';
import { Link as RouterLink } from 'react-router-dom';

export const Main = () => {
  const allCards = useAppSelector((state) => state.cards.list);
  const darkMode = useAppSelector((state) => state.darkMode.darkMode);
  return (
    <Box>
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '72px' }}
      >
        <Typography
          sx={{ fontSize: '1.8rem', lineHeight: '4rem', color: darkMode ? '#ffffff' : '' }}
          fontFamily={`'Poppins', sans-serif`}
          fontWeight={700}
        >
          {SERVICE_MESSAGES.myQuizzes}
        </Typography>
        <Link component={RouterLink} to="/create-quiz" underline="none">
          <Button variant="contained" sx={{ color: '#fff', letterSpacing: '.1em' }}>
            {SERVICE_MESSAGES.createNew}
          </Button>
        </Link>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ marginBottom: '50px' }}
        alignItems="stretch"
      >
        {allCards.map((card, index) => (
          <Grid item xs={4} sm={4} md={4} key={index} alignItems="stretch">
            <RouterLink key={card.id} style={{ textDecoration: 'none' }} to={`/test/${card.id}`}>
              <QuizCard
                key={card.id}
                title={card.title}
                img={card.img}
                id={card.id}
                date={''}
                desription={''}
                questionsArr={[]}
                passed={false}
                passedOn={0}
              />
            </RouterLink>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
