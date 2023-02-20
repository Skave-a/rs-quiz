import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Checkbox, Fade, IconButton, TextField, Tooltip, Typography } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeAnswer, setAnswers } from '../../store/reducers/answerSlice';
import { ItemBlockQuizBox } from '../CreateQuiz/styles';
import { IAnswer } from './Question';

export interface IAnswers {
  id: number;
  answer: string;
  rightAnswer: string;
}

export const Answer = (props: IAnswers) => {
  const { id, answer, rightAnswer } = props;
  const [answerTitle, setAnswerTitle] = useState('');
  const [checked, setChecked] = useState(false);
  const answers = useAppSelector((state) => state.answers.answers);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const isCorrectHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  const setTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswerTitle(e.target.value);
  };

  function remove() {
    dispatch(removeAnswer(id));
  }

  // useEffect(() => {
  //   if (answers.length) {
  //     dispatch(
  //       setAnswers([
  //         ...answers.map((item) => {
  //           if (item.id === id) {
  //             return { ...item, title: answerTitle, isCorrect: checked };
  //           }
  //           return item;
  //         }),
  //       ])
  //     );
  //   }
  // }, [answerTitle, checked]);

  return (
    <Box sx={ItemBlockQuizBox}>
      <TextField
        multiline
        placeholder={t('answer') as string}
        sx={{ width: '100%' }}
        onChange={setTitleHandler}
        defaultValue={answer}
      />
      <Tooltip
        TransitionComponent={Fade}
        title={
          <Typography sx={{ p: 0.5 }} fontSize={18}>
            {t('isCorrectTip')}
          </Typography>
        }
        placement="top"
      >
        <Checkbox
          onChange={isCorrectHandler}
          color="success"
          icon={<CheckCircleOutlineIcon />}
          checkedIcon={<CheckCircleIcon />}
          checked={answer === rightAnswer}
        />
      </Tooltip>
      <IconButton onClick={remove} aria-label="delete" size="small">
        <DeleteIcon color="error" fontSize="medium" />
      </IconButton>
    </Box>
  );
};
