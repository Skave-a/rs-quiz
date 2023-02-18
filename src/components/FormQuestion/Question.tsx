import CancelIcon from '@mui/icons-material/Cancel';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Box, Button, IconButton, Paper, TextField, Typography } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { BlockQuizBtn, BlockQuizPaper, BlockQuizPaperDark } from '../CreateQuiz/styles';
import { Answer } from './Answer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeQuestion, setQuestions } from '../../store/reducers/questionSlice';
import {
  addAnswer,
  deleteAnswers,
  resetAnswerState,
  setAnswers,
} from '../../store/reducers/answerSlice';
import { ParseJwt } from '../utils/helpers';
import { useGetAnswersQuery } from '../../store/api/AnswerApi';
import { useTranslation } from 'react-i18next';

export interface IQuestionsProps {
  id: number;
  index: number;
  item: IQuestion;
}
export interface IQuestion {
  id: number;
  description: string;
  image: string | null;
}

export interface IAnswer {
  id: number;
  title: string;
  isCorrect: boolean;
}

export const Question = (props: IQuestionsProps) => {
  const { id, index, item } = props;
  const questions = useAppSelector((state) => state.questions.questions);
  const answer = useAppSelector((state) => state.answers.answer);
  const answers = useAppSelector((state) => state.answers.answers);
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.darkMode.darkMode);
  const { t } = useTranslation();

  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const userId = ParseJwt();

  const { data: getAnswersServer = [] } = useGetAnswersQuery();
  useEffect(() => {
    if (getAnswersServer.length) {
      dispatch(resetAnswerState());
      dispatch(setAnswers(getAnswersServer));
    }
  }, [getAnswersServer]);

  function addAnswerHandler() {
    dispatch(addAnswer({ ...answer, userId, questionId: item.id, id: answers.length + 1 }));
  }

  function remove() {
    dispatch(removeQuestion(id));
    dispatch(deleteAnswers(index));
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
      <Paper elevation={3} sx={darkMode ? BlockQuizPaperDark : BlockQuizPaper}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: '20px',
            alignItems: 'flex-end',
          }}
        >
          <Typography fontSize={'30px'}>
            {t('questionNum')}
            {index}
          </Typography>
          <IconButton color="warning" onClick={remove}>
            <CancelIcon />
          </IconButton>
        </Box>
        <TextField
          multiline
          rows={2}
          placeholder={t('writeQuest') as string}
          sx={{ width: '100%', mb: '15px' }}
          onChange={descriptionHandler}
          value={item.description}
        />
        <TextField
          multiline
          rows={1}
          placeholder={t('addLinkImg') as string}
          sx={{ width: '100%', mb: '15px' }}
          onChange={imageHandler}
          value={item.image}
        />
        <Box sx={{ mb: '20px' }}>
          {answers.map((item) => {
            if (item.questionId === id) {
              return <Answer key={item.id} item={item} id={item.id} />;
            }
            return null;
          })}
        </Box>
        <Button sx={BlockQuizBtn} onClick={addAnswerHandler}>
          <ControlPointIcon sx={{ color: 'rgb(255, 110, 3)' }} />
          <Typography sx={{ textTransform: 'uppercase' }}>{t('addAnswer')}</Typography>
        </Button>
      </Paper>
    </Box>
  );
};
