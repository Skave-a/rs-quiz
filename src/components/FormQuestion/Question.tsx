import CancelIcon from '@mui/icons-material/Cancel';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Box, Button, IconButton, Paper, TextField, Typography } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import { BlockQuizBtn, BlockQuizPaper } from '../CreateQuiz/styles';
import { SERVICE_MESSAGES } from '../utils/constants';
import { Answer } from './Answer';
import { nanoid } from 'nanoid';
//import { IBlockQuiz } from '../../components/utils/types';

export interface IQuestion {
  name: string;
  id: string;
  setQuestions: Dispatch<SetStateAction<string[]>>;
  questions: string[];
  num: number;
}

export interface IAnswer {
  id: string;
  title: string;
  isCorrect: boolean;
}

export const Question = (props: IQuestion) => {
  const { name, id, setQuestions, questions, num } = props;
  const answerEntity = { id: nanoid(), title: '', isCorrect: false };

  const [answers, setAnswers] = useState([
    { id: nanoid(), title: '', isCorrect: false },
    { id: nanoid(), title: '', isCorrect: false },
  ]);
  console.log(`answers`, answers);

  function addAnswer() {
    setAnswers([...answers, answerEntity]);
  }

  function remove() {
    const indx = questions.indexOf(id);
    setQuestions([...questions.slice(0, indx), ...questions.slice(indx + 1)]);
  }

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
            {num}
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
        />
        <TextField
          multiline
          rows={1}
          placeholder={SERVICE_MESSAGES.addLink}
          sx={{ width: '100%', mb: '15px' }}
        />
        <Box sx={{ mb: '20px' }}>
          {answers.map((item) => {
            return (
              <Answer
                name={name}
                key={item.id}
                answers={answers}
                setAnswers={setAnswers}
                id={item.id}
              />
            );
          })}
        </Box>
        <Button sx={BlockQuizBtn} onClick={addAnswer}>
          <ControlPointIcon sx={{ color: 'rgb(255, 110, 3)' }} />
          <Typography sx={{ textTransform: 'uppercase' }}>{SERVICE_MESSAGES.addAnswer}</Typography>
        </Button>
      </Paper>
    </Box>
  );
};
