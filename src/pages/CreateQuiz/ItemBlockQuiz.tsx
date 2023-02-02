import { Box, TextField } from '@mui/material';
import { SERVICE_MESSAGES } from '../../components/utils/constants';

interface IItemBlockQuiz {
  name: string;
}

export const ItemBlockQuiz = (props: IItemBlockQuiz) => {
  const { name } = props;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: '20px' }}>
      <TextField multiline placeholder={SERVICE_MESSAGES.answer} sx={{ width: '100%' }} />
      <input type="radio" name={name} />
    </Box>
  );
};
