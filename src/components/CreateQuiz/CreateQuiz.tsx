import { Box, Typography } from '@mui/material';
import { SERVICE_MESSAGES } from '../utils/constants';
import { TitleQuiz } from '../FormQuestion/TitleQuiz';
import { useState } from 'react';
import { CreateQuizBox, CreateQuizCreate } from '../FormQuestion/styles';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';

export const CreateQuiz = () => {
  const [block, setBlock] = useState(['first']);

  return (
    <Box sx={{ pb: '150px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: '50px' }}>
        <NoteAddOutlinedIcon fontSize="large" />
        <Typography sx={CreateQuizCreate}>{SERVICE_MESSAGES.createNew}</Typography>
      </Box>
      <Box sx={CreateQuizBox}>
        <TitleQuiz block={block} setBlock={setBlock} />
      </Box>
    </Box>
  );
};
