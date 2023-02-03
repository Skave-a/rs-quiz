import { Box, IconButton, TextField } from '@mui/material';
import { SERVICE_MESSAGES } from '../utils/constants';
import { ItemBlockQuizBox } from './styles';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { Dispatch, SetStateAction } from 'react';

interface IItemBlockQuiz {
  name: string;
  blockQ: number[];
  setBlockQ: Dispatch<SetStateAction<number[]>>;
  id: number;
}

export const ItemBlockQuiz = (props: IItemBlockQuiz) => {
  const { name, setBlockQ, blockQ, id } = props;
  function remove() {
    const indx = blockQ.indexOf(id);
    setBlockQ([...blockQ.slice(0, indx), ...blockQ.slice(indx + 1)]);
  }
  return (
    <Box sx={ItemBlockQuizBox}>
      <TextField multiline placeholder={SERVICE_MESSAGES.answer} sx={{ width: '100%' }} />
      <input type="radio" name={name} />
      <IconButton color="primary" onClick={remove}>
        <BackspaceIcon />
      </IconButton>
    </Box>
  );
};
