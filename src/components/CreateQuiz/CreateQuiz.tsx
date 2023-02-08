import { Box, Typography } from '@mui/material';
import { SERVICE_MESSAGES } from '../utils/constants';
import { TitleQuiz } from '../FormQuestion/TitleQuiz';
import { useState } from 'react';
import { CreateQuizBox, CreateQuizCreate } from '../FormQuestion/styles';

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
