import CancelIcon from '@mui/icons-material/Cancel';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Box, Button, IconButton, Paper, TextField, Typography } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { BlockQuizBtn, BlockQuizPaper } from '../CreateQuiz/styles';
import { SERVICE_MESSAGES } from '../utils/constants';
import { Answer } from './Answer';
import { nanoid } from 'nanoid';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeQuestion, setQuestions } from '../../store/reducers/questionSlice';
import { addAnswer } from '../../store/reducers/answerSlice';
import { ParseJwt } from '../utils/helpers';

export interface IQuestions {
  id: string;
  index: number;
}
export interface IQuestion {
  id: string;
  description: string;
  image: string | null;
}

export interface IAnswer {
  id: string;
  title: string;
  isCorrect: boolean;
}

export const Question = (props: IQuestions) => {
  const { id, index } = props;
  const questions = useAppSelector((state) => state.questions.questions);
  const answer = useAppSelector((state) => state.answers.answer);
  const answers = useAppSelector((state) => state.answers.answers);
  const dispatch = useAppDispatch();
  //const answerEntity = { id: nanoid(), title: '', isCorrect: false };
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const userId = ParseJwt();

  /*  const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setDescription(e.target.value));
  };
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setImage(e.target.value));
  }; */

  //const [description, setDescription] = useState('');
  //const [image, setImage] = useState('');

  if (!answers.length) {
    dispatch(addAnswer({ ...answer, userId }));
  }

  /* const [answers, setAnswers] = useState([
    { id: nanoid(), title: '', isCorrect: false },
    { id: nanoid(), title: '', isCorrect: false },
  ]); */
  console.log(`questions index =>>>>>>>>>>>>>>>>>>>>`, index);
  console.log(`answers =>>>>>>>>>>>>>>>>>>>>`, answers);

  function addAnswerHandler() {
    dispatch(addAnswer({ ...answer, userId, questionId: index, id: nanoid() }));
  }

  function remove() {
    dispatch(removeQuestion(id));
  }

  const descriptionHandler = (e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);
  const imageHandler = (e: ChangeEvent<HTMLInputElement>) => setImage(e.target.value);

  useEffect(() => {
    if (questions.length) {
      dispatch(
        setQuestions(
          questions.map((item) => {
            if (item.id === id) {
              return { ...item, description, image };
            }
            return item;
          })
        )
      );
    }
  }, [description, image]);

  return (
    <Box>
      <Paper elevation={3} sx={BlockQuizPaper}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: '20px',
            alignItems: 'flex-end',
          }}
        >
          <Typography fontSize={'30px'}>
            {SERVICE_MESSAGES.questionNum}
            {index}
          </Typography>
          <IconButton color="warning" onClick={remove}>
            <CancelIcon />
          </IconButton>
        </Box>
        <TextField
          multiline
          rows={2}
          placeholder={SERVICE_MESSAGES.writeQuest}
          sx={{ width: '100%', mb: '15px' }}
          onChange={descriptionHandler}
        />
        <TextField
          multiline
          rows={1}
          placeholder={SERVICE_MESSAGES.addLink}
          sx={{ width: '100%', mb: '15px' }}
          onChange={imageHandler}
        />
        <Box sx={{ mb: '20px' }}>
          {answers.map((item) => {
            return (
              <Answer key={item.id} /* answers={answers} setAnswers={setAnswers} */ id={item.id} />
            );
          })}
        </Box>
        <Button sx={BlockQuizBtn} onClick={addAnswerHandler}>
          <ControlPointIcon sx={{ color: 'rgb(255, 110, 3)' }} />
          <Typography sx={{ textTransform: 'uppercase' }}>{SERVICE_MESSAGES.addAnswer}</Typography>
        </Button>
      </Paper>
    </Box>
  );
};
