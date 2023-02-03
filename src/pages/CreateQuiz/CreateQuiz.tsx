import { Box, Typography } from '@mui/material';
import { SERVICE_MESSAGES } from '../../components/utils/constants';
import { TitleQuiz } from '../../components/FormQuestion/TitleQuiz';
import { BlockQuiz } from '../../components/FormQuestion/BlockQuiz';
import { useState } from 'react';
import {
  CreateQuizBox,
  CreateQuizBox2,
  CreateQuizCreate,
} from '../../components/FormQuestion/styles';

export const CreateQuiz = () => {
  const [block, setBlock] = useState(['first', 'second']);
  const blocks = block.map((el, id) => {
    return <BlockQuiz name={el} key={id} />;
  });
  return (
    <Box sx={{ pb: '150px' }}>
      <Typography sx={CreateQuizCreate}>{SERVICE_MESSAGES.create}</Typography>
      <Box sx={CreateQuizBox}>
        <TitleQuiz block={block} setBlock={setBlock} />
        <Box sx={CreateQuizBox2}>{blocks}</Box>
      </Box>
    </Box>
  );
};
