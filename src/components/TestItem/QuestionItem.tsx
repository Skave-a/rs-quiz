import { Box } from '@mui/material';
import { Dispatch, SetStateAction, MouseEvent } from 'react';
// import { useDispatch } from 'react-redux';
// import { useAppSelector } from '../../store/hooks';
// import { addTestReduser } from '../../store/reducers/testsSlice';
// import { RNDstring } from '../FormQuestion/RNDstring';
import style from './QuestionItem.module.css';

interface IQuestionItem {
  answer: string;
  name: string;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  rightAnsw: string;
}
export const QuestionItem = (props: IQuestionItem) => {
  const { answer, name, score, setScore, rightAnsw } = props;
  // const tests = useAppSelector((state) => state.tests.list);
  // const dispatch = useDispatch();
  let isChoosen = {
    name: true,
  };
  function handleChecked(e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) {
    const target = e.target as HTMLInputElement;
    if (target.checked && rightAnsw === target.id && isChoosen.name) {
      setScore(score + 1);
      // dispatch(addTestReduser([score]))
      isChoosen.name = false;
    }
    console.log('isChoosen.name', isChoosen.name);
  }
  return (
    <Box className={style.form_radio}>
      <input
        id={answer}
        name={name}
        type="radio"
        required
        onClick={(e) => handleChecked(e as MouseEvent<HTMLInputElement, globalThis.MouseEvent>)}
      />
      <label htmlFor={answer} className={style.label__answer}>
        {answer}
      </label>
    </Box>
  );
};
