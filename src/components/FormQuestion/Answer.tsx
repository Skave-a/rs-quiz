import { Box, Button, Checkbox, Fade, TextField, Tooltip, Typography } from '@mui/material';
import { SERVICE_MESSAGES } from '../utils/constants';
import { ItemBlockQuizBox } from '../CreateQuiz/styles';
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { IAnswer } from './Question';

export interface IAnswers {
  questionTitle: string;
  answers: IAnswer[];
  setAnswers: Dispatch<SetStateAction<IAnswer[]>>;
  id: string;
}

export const Answer = (props: IAnswers) => {
  const { questionTitle, answers, setAnswers, id } = props;
  const [answerTitle, setAnswerTitle] = useState('');
  const [checked, setChecked] = useState(false);

  //console.log(`checked`, checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  function remove() {
    setAnswers([...answers.filter((item) => item.id !== id)]);
  }

  useEffect(() => {
    setAnswers([
      ...answers.map((item) => {
        if (item.id === id) {
          return { ...item, title: answerTitle, isCorrect: checked };
        }
        return item;
      }),
    ]);
  }, [answerTitle]);

  return (
    <Box sx={ItemBlockQuizBox}>
      <TextField
        multiline
        placeholder={SERVICE_MESSAGES.answer}
        sx={{ width: '100%' }}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setAnswerTitle(e.target.value)}
        //name={questionTitle}
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
          onChange={handleChange}
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
