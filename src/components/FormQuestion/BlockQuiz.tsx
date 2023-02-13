import { Box, Button, IconButton, Paper, TextField, Typography } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { ItemBlockQuiz } from './ItemBlockQuiz';
import { BlockQuizBtn, BlockQuizPaper, BlockQuizPaperDark } from './styles';
import { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import { IBlockQuiz } from '../../components/utils/types';
import { useAppSelector } from '../../store/hooks';
import { useTranslation } from 'react-i18next';

export const BlockQuiz = (props: IBlockQuiz) => {
  const { name, id, setBlock, block, num } = props;
  const [blockQuestion, setBlockQuestion] = useState([0, 1]);
  const darkMode = useAppSelector((state) => state.darkMode.darkMode);
  const { t } = useTranslation();

  const blocksQ = blockQuestion.map((el) => {
    return (
      <ItemBlockQuiz
        name={name}
        key={el}
        blockQuestion={blockQuestion}
        setBlockQuestion={setBlockQuestion}
        id={el}
      />
    );
  });

  function handleClick() {
    setBlockQuestion([...blockQuestion, Number(new Date())]);
  }

  function remove() {
    const indx = block.indexOf(id);
    setBlock([...block.slice(0, indx), ...block.slice(indx + 1)]);
  }

  return (
    <Box>
      <Paper elevation={3} sx={darkMode ? BlockQuizPaperDark : BlockQuizPaper}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: '20px',
            alignItems: 'flex-end',
          }}
        >
          <Typography fontSize={'30px'}>
            {t('questionNum')}
            {num}
          </Typography>
          <IconButton color="warning" onClick={remove}>
            <CancelIcon />
          </IconButton>
        </Box>
        <TextField
          multiline
          rows={2}
          placeholder={t('writeQuest') as string}
          sx={{ width: '100%', mb: '15px' }}
        />
        <TextField
          multiline
          rows={1}
          placeholder={t('addLink') as string}
          sx={{ width: '100%', mb: '15px' }}
        />
        <Box sx={{ mb: '20px' }}>{blocksQ}</Box>
        <Button sx={BlockQuizBtn} onClick={handleClick}>
          <ControlPointIcon sx={{ color: 'rgb(255, 110, 3)' }} />
          <Typography sx={{ textTransform: 'uppercase' }}>{t('addAnswer')}</Typography>
        </Button>
      </Paper>
    </Box>
  );
};
