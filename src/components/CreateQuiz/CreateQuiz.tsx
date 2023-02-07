import { Box, Typography } from '@mui/material';
import { SERVICE_MESSAGES } from '../utils/constants';
import { TitleQuiz } from '../FormQuestion/TitleQuiz';
import { BlockQuiz } from '../FormQuestion/BlockQuiz';
import { useState } from 'react';
import { CreateQuizBox, CreateQuizBox2, CreateQuizCreate } from '../FormQuestion/styles';

export const CreateQuiz = () => {
  const [block, setBlock] = useState(['first']);
  return (
    <Box sx={{ pb: '150px' }}>
      <Typography sx={CreateQuizCreate}>{SERVICE_MESSAGES.create}</Typography>
      <Box sx={CreateQuizBox}>
        <TitleQuiz block={block} setBlock={setBlock} />
      </Box>
    </Box>
  );
};
