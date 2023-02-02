import { Box, Button, Paper, Typography } from '@mui/material';
import { SERVICE_MESSAGES } from '../../components/utils/constants';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { ItemBlockQuiz } from './ItemBlockQuiz';

interface IBlockQuiz {
  name: string;
}

export const BlockQuiz = (props: IBlockQuiz) => {
  const { name } = props;
  function handleClick(e: Event) {
    console.log('d');
  }
  return (
    <Box>
      <Paper elevation={3} sx={{ padding: '1.2rem 2.4rem', maxWidth: '400px', margin: '0 auto' }}>
        <Typography sx={{ mb: '20px' }}>{SERVICE_MESSAGES.answerContent}</Typography>
        <Box sx={{ mb: '20px' }}>
          <ItemBlockQuiz name={name} />
          <ItemBlockQuiz name={name} />
        </Box>
        <Button
          sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          onClick={(e) => handleClick(e as unknown as Event)}
        >
          <ControlPointIcon sx={{ color: 'rgb(255, 110, 3)' }} />
          <Typography sx={{ textTransform: 'uppercase' }}>{SERVICE_MESSAGES.addAnswer}</Typography>
        </Button>
      </Paper>
    </Box>
  );
};
