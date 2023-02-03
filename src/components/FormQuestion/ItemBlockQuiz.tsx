import { Box, Button, TextField } from '@mui/material';
import { SERVICE_MESSAGES } from '../utils/constants';
import { ItemBlockQuizBox } from './styles';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { Dispatch, SetStateAction } from 'react';

interface IItemBlockQuiz {
  name: string;
  blockQ: string[];
  setBlockQ: Dispatch<SetStateAction<string[]>>;
  id: number;
}

export const ItemBlockQuiz = (props: IItemBlockQuiz) => {
  const { name, setBlockQ, blockQ, id } = props;
  function remove() {
    setBlockQ([...blockQ.slice(0, id), ...blockQ.slice(id + 1)]);
  }
  return (
    <Box sx={ItemBlockQuizBox}>
      <TextField multiline placeholder={SERVICE_MESSAGES.answer} sx={{ width: '100%' }} />
      <input type="radio" name={name} />
      <Button onClick={remove}>
        <BackspaceIcon />
      </Button>
    </Box>
  );
};
