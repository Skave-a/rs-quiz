import { Box, Button, TextField } from '@mui/material';
import { SERVICE_MESSAGES } from '../utils/constants';
import { ItemBlockQuizBox } from './styles';
import { ChangeEvent, useState } from 'react';
import style from './FormQuestion.module.css';
import { RNDstring } from './RNDstring';
import { IItemBlockQuiz } from '../../components/utils/types';
import CloseIcon from '@mui/icons-material/Close';

export const ItemBlockQuiz = (props: IItemBlockQuiz) => {
  const { name, setBlockQuestion, blockQuestion, id } = props;
  const [answers, setAnswers] = useState('');
  const indx = blockQuestion.indexOf(id);
  const rndStr = RNDstring();

  function remove() {
    setBlockQuestion([...blockQuestion.slice(0, indx), ...blockQuestion.slice(indx + 1)]);
  }

  return (
    <Box sx={ItemBlockQuizBox}>
      <TextField
        multiline
        placeholder={SERVICE_MESSAGES.answer}
        sx={{ width: '100%' }}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setAnswers(e.target.value)}
        name={name}
      />
      <input type="radio" name={name} id={rndStr} className={style.inputQuestion} />
      <label htmlFor={rndStr}></label>
      <Button
        onClick={remove}
        variant="contained"
        color="error"
        sx={{ fontSize: '12px', textTransform: 'capitalize' }}
      >
        <CloseIcon fontSize="small" />
        Remove
      </Button>
    </Box>
  );
};
