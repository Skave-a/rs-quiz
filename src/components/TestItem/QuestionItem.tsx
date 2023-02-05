import { Box } from '@mui/material';
import { RNDstring } from '../FormQuestion/RNDstring';
import style from './QuestionItem.module.css';

interface IQuestionItem {
  answer: string;
  name: string;
}
export const QuestionItem = (props: IQuestionItem) => {
  const { answer, name } = props;
  const idRadio = RNDstring();
  return (
    <Box className={style.form_radio}>
      <input id={idRadio} name={name} type="radio" />
      <label htmlFor={idRadio} className={style.label__answer}>
        {answer}
      </label>
    </Box>
  );
};
