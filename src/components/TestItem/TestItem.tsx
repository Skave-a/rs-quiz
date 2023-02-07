import { CardMedia, Paper, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { IQuestion } from '../utils/types';
import { QuestionItem } from './QuestionItem';

interface ItestItem {
  question: IQuestion;
  id: number;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

export const TestItem = (props: ItestItem) => {
  const { question, id, score, setScore } = props;
  const questionAnswers = question.answers;
  const nameRadio = `name${id}`;
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',
        maxWidth: '500px',
        margin: '0 auto',
      }}
    >
      <Typography variant="h4">{question.question}</Typography>
      {question.img.length ? (
        <CardMedia
          component="img"
          image={question.img}
          alt="card"
          height={245}
          sx={{ objectFit: 'contain' }}
        />
      ) : null}
      {questionAnswers.map((answer, id) => (
        <QuestionItem
          answer={answer}
          key={id}
          name={nameRadio}
          score={score}
          setScore={setScore}
          rightAnsw={question.correctAnswer}
        />
      ))}
    </Paper>
  );
};
