import { Box, TextField } from '@mui/material';
import { SERVICE_MESSAGES } from '../utils/constants';
import { ItemBlockQuizBox } from './styles';
import style from './FormQuestion.module.css';
import { RNDstring } from './RNDstring';
import { IItemBlockQuiz } from '../../components/utils/types';
import { useFormContext } from 'react-hook-form';

export const ItemBlockQuiz = (props: IItemBlockQuiz) => {
  const methods = useFormContext();
  const { name } = props;
  const rndStr = RNDstring();

  return (
    <Box sx={ItemBlockQuizBox}>
      <TextField
        multiline
        placeholder={SERVICE_MESSAGES.answer}
        sx={{ width: '100%' }}
        // {...methods.register('questionsArr.answers')}
        name={name}
      />
      <input type="radio" name={name} id={rndStr} className={style.inputQuestion} />
      <label htmlFor={rndStr}></label>
    </Box>
  );
};
