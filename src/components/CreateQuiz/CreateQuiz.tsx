import { Box, Typography } from '@mui/material';
import { TitleQuiz } from '../FormQuestion/TitleQuiz';
import { useState } from 'react';
import { CreateQuizBox, CreateQuizCreate, CreateQuizCreateDark } from '../FormQuestion/styles';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../store/hooks';

export const CreateQuiz = () => {
  const [block, setBlock] = useState(['first']);
  const { t } = useTranslation();
  const darkMode = useAppSelector((state) => state.darkMode.darkMode);

  return (
    <Box sx={{ pb: '150px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: '50px' }}>
        <NoteAddOutlinedIcon fontSize="large" />
        <Typography sx={darkMode ? CreateQuizCreateDark : CreateQuizCreate}>
          {t('createNew')}
        </Typography>
      </Box>
      <Box sx={CreateQuizBox}>
        <TitleQuiz block={block} setBlock={setBlock} />
      </Box>
    </Box>
  );
};
