import { Box, FormControlLabel, Radio } from '@mui/material';
import { Dispatch, SetStateAction, ChangeEvent } from 'react';
import style from './QuestionItem.module.css';

interface IQuestionItem {
  answer: string;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  rightAnsw: string;
}
export const QuestionItem = (props: IQuestionItem) => {
  const { answer, score, setScore, rightAnsw } = props;
  function handleChecked(e: ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    if (target.checked && rightAnsw === target.value) {
      setScore(score + 1);
    }
  }
  return (
    <Box className={style.form_radio}>
      <FormControlLabel
        value={answer}
        control={<Radio required />}
        label={answer}
        onChange={(e) => handleChecked(e as ChangeEvent<HTMLInputElement>)}
      />
    </Box>
  );
};
