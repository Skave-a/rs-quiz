import { Box, Button, Paper, Typography } from '@mui/material';
import { SERVICE_MESSAGES } from '../utils/constants';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { ItemBlockQuiz } from './ItemBlockQuiz';
import { BlockQuizBtn, BlockQuizPaper } from './styles';
import { useState } from 'react';

interface IBlockQuiz {
  name: string;
}

export const BlockQuiz = (props: IBlockQuiz) => {
  const { name } = props;
  const [blockQ, setBlockQ] = useState([name, name]);
  const blocks = blockQ.map((el, id) => {
    return <ItemBlockQuiz name={el} key={id} blockQ={blockQ} setBlockQ={setBlockQ} id={id} />;
  });
  function handleClick() {
    setBlockQ([...blockQ, name]);
  }
  return (
    <Box>
      <Paper elevation={3} sx={BlockQuizPaper}>
        <Typography sx={{ mb: '20px' }}>{SERVICE_MESSAGES.answerContent}</Typography>
        <Box sx={{ mb: '20px' }}>{blocks}</Box>
        <Button sx={BlockQuizBtn} onClick={handleClick}>
          <ControlPointIcon sx={{ color: 'rgb(255, 110, 3)' }} />
          <Typography sx={{ textTransform: 'uppercase' }}>{SERVICE_MESSAGES.addAnswer}</Typography>
        </Button>
      </Paper>
    </Box>
  );
};
