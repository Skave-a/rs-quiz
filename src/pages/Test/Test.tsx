import { Box, Button, CardMedia, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BreadcrumbsTest from '../../components/Breadcrumbs/BreadcrumbsTest';
import { ModalTestComplete } from '../../components/ModalTestComplete/ModalTestComplete';
import { TestItem } from '../../components/TestItem/TestItem';
import { SERVICE_MESSAGES } from '../../components/utils/constants';
import { useAppSelector } from '../../store/hooks';

export const Test = () => {
  const { id } = useParams();
  const allCards = useAppSelector((state) => state.cards.list);
  const card = allCards[Number(id) - 1];
  const questions = card.questionsArr;
  const [score, setScore] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  function handleCheck() {
    handleOpen();
    console.log('score', score);
    console.log('data', new Date());
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '45px', mb: '150px' }}>
      {/* <BreadcrumbsTest /> */}
      <Typography variant="h3" sx={{ fontWeight: '700', color: '#424242', textAlign: 'center' }}>
        {card.title}
      </Typography>
      <Paper sx={{ maxWidth: '500px', m: '0 auto' }}>
        <CardMedia component="img" image={card.img} alt="card" height={245} />
        <Typography sx={{ padding: '25px', fontSize: '16px', textAlign: 'justify' }}>
          {card.desription}
        </Typography>
      </Paper>
      <form>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {questions.map((question, id) => (
            <TestItem question={question} id={id} key={id} score={score} setScore={setScore} />
          ))}
        </Box>
        <input type="submit" onClick={handleCheck} />
        {SERVICE_MESSAGES.check}
        <Button variant="contained" sx={{ m: '0 auto', color: '#ffffff' }} onClick={handleCheck}>
          {SERVICE_MESSAGES.check}
        </Button>
      </form>
      <ModalTestComplete
        open={open}
        handleClose={handleClose}
        score={score}
        countOfquestions={questions.length}
      />
    </Box>
  );
};
