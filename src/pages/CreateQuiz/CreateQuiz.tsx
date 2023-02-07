import { Box, Typography } from '@mui/material';
import { SERVICE_MESSAGES } from '../../components/utils/constants';
import { TitleQuiz } from '../../components/FormQuestion/TitleQuiz';
import { useState } from 'react';
import {
  CreateQuizBox,
  CreateQuizBox2,
  CreateQuizCreate,
} from '../../components/FormQuestion/styles';

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
