import { Box, Button, IconButton, Paper, Typography } from '@mui/material';
import { SERVICE_MESSAGES } from '../utils/constants';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { ItemBlockQuiz } from './ItemBlockQuiz';
import { BlockQuizBtn, BlockQuizPaper } from './styles';
import { Dispatch, SetStateAction, useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';

interface IBlockQuiz {
  name: string;
  id: string;
  setBlock: Dispatch<SetStateAction<string[]>>;
  block: string[];
}

export const BlockQuiz = (props: IBlockQuiz) => {
  const { name, id, setBlock, block } = props;
  const [blockQ, setBlockQ] = useState([0, 1]);
  const blocksQ = blockQ.map((el, id) => {
    return <ItemBlockQuiz name={name} key={el} blockQ={blockQ} setBlockQ={setBlockQ} id={el} />;
  });
  function handleClick() {
    setBlockQ([...blockQ, Number(new Date())]);
  }
  function remove() {
    const indx = block.indexOf(id);
    // console.log('block', block);
    // console.log('indx', indx);
    // console.log('block.slice(0, indx)', block.slice(0, indx));
    // console.log('block.slice(indx + 1)', block.slice(indx + 1));
    setBlock([...block.slice(0, indx), ...block.slice(indx + 1)]);
  }
  return (
    <Box>
      <Paper elevation={3} sx={BlockQuizPaper}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ mb: '20px' }}>{SERVICE_MESSAGES.answerContent}</Typography>
          <IconButton color="warning" onClick={remove}>
            <CancelIcon />
          </IconButton>
        </Box>
        <Box sx={{ mb: '20px' }}>{blocksQ}</Box>
        <Button sx={BlockQuizBtn} onClick={handleClick}>
          <ControlPointIcon sx={{ color: 'rgb(255, 110, 3)' }} />
          <Typography sx={{ textTransform: 'uppercase' }}>{SERVICE_MESSAGES.addAnswer}</Typography>
        </Button>
      </Paper>
    </Box>
  );
};
