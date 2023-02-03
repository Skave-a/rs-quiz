import { Box, IconButton, TextField } from '@mui/material';
import { SERVICE_MESSAGES } from '../utils/constants';
import { ItemBlockQuizBox } from './styles';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface IItemBlockQuiz {
  name: string;
  blockQ: number[];
  setBlockQ: Dispatch<SetStateAction<number[]>>;
  id: number;
}

export const ItemBlockQuiz = (props: IItemBlockQuiz) => {
  const { name, setBlockQ, blockQ, id } = props;
  const indx = blockQ.indexOf(id);
  function remove() {
    setBlockQ([...blockQ.slice(0, indx), ...blockQ.slice(indx + 1)]);
  }
  function inputHandler(e: ChangeEvent<HTMLInputElement>) {
    console.log('inputHandler', e.target.value);
  }
  return (
    <Box sx={ItemBlockQuizBox}>
      <TextField
        multiline
        placeholder={SERVICE_MESSAGES.answer}
        sx={{ width: '100%' }}
        onChange={(e: ChangeEvent<HTMLInputElement>) => inputHandler(e)}
        name={name}
      />
      <input type="radio" name={name} id={name} />
      <IconButton color="primary" onClick={remove}>
        <BackspaceIcon />
      </IconButton>
    </Box>
  );
};
