import { Box, Button, Checkbox, Fade, TextField, Tooltip, Typography } from '@mui/material';
import { SERVICE_MESSAGES } from '../utils/constants';
import { ItemBlockQuizBox } from '../CreateQuiz/styles';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { IAnswer } from './Question';

export interface IAnswers {
  name: string;
  answers: IAnswer[];
  setAnswers: Dispatch<SetStateAction<IAnswer[]>>;
  id: string;
}

export const Answer = (props: IAnswers) => {
  const { name, answers, setAnswers, id } = props;
  const [answerTitle, setAnswerTitle] = useState('');
  console.log(`answerTitle`, answerTitle);

  function remove() {
    setAnswers([...answers.filter((item) => item.id !== id)]);
  }

  return (
    <Box sx={ItemBlockQuizBox}>
      <TextField
        multiline
        placeholder={SERVICE_MESSAGES.answer}
        sx={{ width: '100%' }}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setAnswerTitle(e.target.value)}
        name={name}
      />
      <Tooltip
        TransitionComponent={Fade}
        title={
          <Typography sx={{ p: 0.5 }} fontSize={18}>
            {SERVICE_MESSAGES.isCorrectTip}
          </Typography>
        }
        placement="top"
      >
        <Checkbox
          color="success"
          icon={<CheckCircleOutlineIcon />}
          checkedIcon={<CheckCircleIcon />}
        />
      </Tooltip>
      <Button
        onClick={remove}
        variant="contained"
        color="error"
        sx={{ fontSize: '12px', textTransform: 'capitalize' }}
      >
        <CloseIcon fontSize="small" />
        Remove
      </Button>
    </Box>
  );
};
