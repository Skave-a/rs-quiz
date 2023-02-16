import { Box, CardMedia, Paper, RadioGroup, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { useAppSelector } from '../../store/hooks';
import { IQuestion } from '../utils/types';
import { QuestionItem } from './QuestionItem';

interface ItestItem {
  question: IQuestion;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

export const TestItem = (props: ItestItem) => {
  const { question, score, setScore } = props;
  const questionAnswers = question.answers;
  const darkMode = useAppSelector((state) => state.darkMode.darkMode);
  return (
    <Paper
      sx={{
        display: 'flex',
        maxWidth: '700px',
        margin: '0 auto',
        alignItems: 'center',
        padding: '15px',
        flexWrap: 'wrap',
        background: darkMode ? '#323a4b' : '',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px',
          maxWidth: question.imgQuestion.length ? '350px' : '100%',
          m: question.imgQuestion.length ? '0 auto' : '0',
        }}
      >
        <Typography variant="h4">{question.question}</Typography>
        <RadioGroup>
          {questionAnswers.map((answer, id) => (
            <QuestionItem
              answer={answer}
              key={id}
              score={score}
              setScore={setScore}
              rightAnsw={question.correctAnswer}
            />
          ))}
        </RadioGroup>
      </Box>
      {question.imgQuestion.length ? (
        <CardMedia
          component="img"
          image={question.imgQuestion}
          alt="card"
          height={245}
          sx={{ objectFit: 'contain', maxWidth: '295px', m: '0 auto' }}
        />
      ) : null}
    </Paper>
  );
};
