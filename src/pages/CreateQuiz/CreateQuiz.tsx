import { Box, Typography } from '@mui/material';
import { SERVICE_MESSAGES } from '../../components/utils/constants';
import { TitleQuiz } from './TitleQuiz';
import { BlockQuiz } from './BlockQuiz';
import { useState } from 'react';
import { CreateQuizBox, CreateQuizBox2, CreateQuizCreate } from './styles';

export const CreateQuiz = () => {
  const [state, setState] = useState(['first', 'second']);
  return (
    <Box>
      <Typography sx={CreateQuizCreate}>{SERVICE_MESSAGES.create}</Typography>
      <Box sx={CreateQuizBox}>
        <TitleQuiz />
        <Box sx={CreateQuizBox2}>
          <BlockQuiz name="f" />
          <BlockQuiz name="s" />
        </Box>
      </Box>
    </Box>
  );
};
