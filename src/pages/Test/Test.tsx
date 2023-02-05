import { Box, CardMedia, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';
import { TestItem } from '../../components/TestItem/TestItem';
import { useAppSelector } from '../../store/hooks';

export const Test = () => {
  const { id } = useParams();
  const allCards = useAppSelector((state) => state.cards.list);
  const card = allCards[Number(id) - 1];
  const questions = card.questionsArr;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '45px', mb: '150px' }}>
      <Typography variant="h3" sx={{ fontWeight: '700', color: '#424242', textAlign: 'center' }}>
        {card.title}
      </Typography>
      <Paper sx={{ maxWidth: '500px', m: '0 auto' }}>
        <CardMedia component="img" image={card.img} alt="card" height={245} />
        <Typography sx={{ padding: '25px', fontSize: '16px', textAlign: 'justify' }}>
          {card.desription}
        </Typography>
      </Paper>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {questions.map((question, id) => (
          <TestItem question={question} id={id} key={id} />
        ))}
      </Box>
    </Box>
  );
};
