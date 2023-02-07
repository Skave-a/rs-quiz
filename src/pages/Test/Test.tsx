import { Box, Button, CardMedia, FormControl, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BreadcrumbsTest } from '../../components/Breadcrumbs/BreadcrumbsTest';
import { ModalTestComplete } from '../../components/ModalTestComplete/ModalTestComplete';
import { TestItem } from '../../components/TestItem/TestItem';
import { SERVICE_MESSAGES } from '../../components/utils/constants';
import { useAppSelector } from '../../store/hooks';
import style from './Test.module.css';

export const Test = () => {
  const { id } = useParams();
  const allCards = useAppSelector((state) => state.cards.list);
  const card = allCards[Number(id) - 1];
  const questions = card.questionsArr;
  const [score, setScore] = useState(0);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleOpen();
  };

  return (
    <Box className={style.test}>
      <BreadcrumbsTest title={card.title} />
      <Typography variant="h4" className={style.test__title}>
        {card.title}
      </Typography>
      <Paper className={style.test__card}>
        <CardMedia component="img" image={card.img} alt="card" height={245} />
        <Typography className={style.test__description}>{card.desription}</Typography>
      </Paper>
      <form onSubmit={handleSubmit} style={{ margin: '0 auto' }}>
        <FormControl>
          <Box className={style.test__quest}>
            {questions.map((question, id) => (
              <TestItem question={question} key={id} score={score} setScore={setScore} />
            ))}
          </Box>
          <Button
            variant="contained"
            sx={{ m: '0 auto', color: '#ffffff', mt: '20px' }}
            type="submit"
          >
            {SERVICE_MESSAGES.check}
          </Button>
        </FormControl>
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
