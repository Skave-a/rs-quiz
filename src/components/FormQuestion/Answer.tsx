import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Checkbox, Fade, IconButton, TextField, Tooltip, Typography } from '@mui/material';
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeAnswer, setAnswers } from '../../store/reducers/answerSlice';
import { ItemBlockQuizBox } from '../CreateQuiz/styles';
import { SERVICE_MESSAGES } from '../utils/constants';
import { IAnswer } from './Question';

export interface IAnswers {
  /* answers: IAnswer[];
  setAnswers: Dispatch<SetStateAction<IAnswer[]>>;*/
  id: string;
}

export const Answer = (props: IAnswers) => {
  const { /* answers, setAnswers, */ id } = props;
  const [answerTitle, setAnswerTitle] = useState('');
  const [checked, setChecked] = useState(false);
  const answers = useAppSelector((state) => state.answers.answers);
  const dispatch = useAppDispatch();

  //console.log(`checked`, checked);

  const isCorrectHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  const setTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswerTitle(e.target.value);
  };

  function remove() {
    dispatch(removeAnswer(id));
  }

  useEffect(() => {
    if (answers.length) {
      dispatch(
        setAnswers([
          ...answers.map((item) => {
            if (item.id === id) {
              return { ...item, title: answerTitle, isCorrect: checked };
            }
            return item;
          }),
        ])
      );
    }
  }, [answerTitle, checked]);

  return (
    <Box sx={ItemBlockQuizBox}>
      <TextField
        multiline
        placeholder={SERVICE_MESSAGES.answer}
        sx={{ width: '100%' }}
        onChange={setTitleHandler}
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
          onChange={isCorrectHandler}
          color="success"
          icon={<CheckCircleOutlineIcon />}
          checkedIcon={<CheckCircleIcon />}
        />
      </Tooltip>
      <IconButton onClick={remove} aria-label="delete" size="small">
        <DeleteIcon color="error" fontSize="medium" />
      </IconButton>
    </Box>
  );
};
