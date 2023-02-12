import { Box, Button, FormControl, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BreadcrumbsTest } from '../Breadcrumbs/BreadcrumbsTest';
import { ModalTestComplete } from '../ModalTestComplete/ModalTestComplete';
import { TestItem } from '../TestItem/TestItem';
import { SERVICE_MESSAGES } from '../utils/constants';
import { useAppSelector } from '../../store/hooks';
import { addTestReduser } from '../../store/reducers/testsSlice';
import style from './Test.module.css';

export const Test = () => {
  const { id } = useParams();
  const allCards = useAppSelector((state) => state.cards.list);
  let card = allCards[0];
  allCards.forEach((el) => {
    if (el.id === Number(id)) {
      card = el;
    }
  });
  const questions = card.questionsArr ?? [];
  const [score, setScore] = useState(0);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleOpen();
    const result = {
      id: id,
      score: score,
      date: new Date().toLocaleString(),
      passed: true,
      failed: (score * 100) / questions.length > 79 ? true : false,
    };
    dispatch(addTestReduser(result));
  };
  return (
    <Box className={style.test}>
      <BreadcrumbsTest title={card.title} />
      <Paper className={style.test__card}>
        {/* <CardMedia component="img" image={card.img} alt="card" height={245} /> */}
        {/* <Typography variant="h4" className={style.test__title}>{card.title} -
        </Typography> */}
        <Typography className={style.test__description} sx={{ m: 0 }}>
          {card.description}
        </Typography>
      </Paper>
      <form onSubmit={handleSubmit} style={{ margin: '0 auto' }}>
        <FormControl>
          <Grid
            container
            spacing={2}
            sx={{ maxWidth: '1000px', mb: 15 }}
            className={style.test__quest}
          >
            {questions.map((question, id) => (
              <Grid item xs={12} md={12} sm={12} key={id}>
                <TestItem question={question} key={id} score={score} setScore={setScore} />
              </Grid>
            ))}
          </Grid>
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
