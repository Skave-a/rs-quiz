import { CardMedia, Paper, RadioGroup, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
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
    </Paper>
  );
};
