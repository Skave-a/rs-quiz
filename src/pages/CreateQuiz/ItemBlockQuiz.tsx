import { Box, TextField } from '@mui/material';
import { SERVICE_MESSAGES } from '../../components/utils/constants';
import { ItemBlockQuizBox } from './styles';

interface IItemBlockQuiz {
  name: string;
}

export const ItemBlockQuiz = (props: IItemBlockQuiz) => {
  const { name } = props;
  return (
    <Box sx={ItemBlockQuizBox}>
      <TextField multiline placeholder={SERVICE_MESSAGES.answer} sx={{ width: '100%' }} />
      <input type="radio" name={name} />
    </Box>
  );
};
