import { Box, IconButton, TextField } from '@mui/material';
import { SERVICE_MESSAGES } from '../utils/constants';
import { ItemBlockQuizBox } from './styles';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import style from './FormQuestion.module.css';
import { RNDstring } from './RNDstring';
import { IItemBlockQuiz } from '../../components/utils/types';

export const ItemBlockQuiz = (props: IItemBlockQuiz) => {
  const { name, setBlockQuestion, blockQuestion, id } = props;
  const indx = blockQuestion.indexOf(id);
  const rndStr = RNDstring();
  function remove() {
    setBlockQuestion([...blockQuestion.slice(0, indx), ...blockQuestion.slice(indx + 1)]);
  }
  const [answers, setAnswers] = useState('');
  function handleAnswer(e: ChangeEvent<HTMLInputElement>) {
    setAnswers(e.target.value);
  }
  return (
    <Box sx={ItemBlockQuizBox}>
      <TextField
        multiline
        placeholder={SERVICE_MESSAGES.answer}
        sx={{ width: '100%' }}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleAnswer(e)}
        name={name}
      />
      <input type="radio" name={name} id={rndStr} className={style.inputQuestion} />
      <label htmlFor={rndStr}></label>
      <IconButton color="primary" onClick={remove}>
        <BackspaceIcon />
      </IconButton>
    </Box>
  );
};
