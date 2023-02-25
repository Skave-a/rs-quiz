import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Checkbox, Fade, IconButton, TextField, Tooltip, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCreateAnswerMutation, useDeleteAnswerMutation } from '../../store/api/AnswerApi';
import { useAppDispatch } from '../../store/hooks';
import { removeAnswer } from '../../store/reducers/answerSlice';
import { ItemBlockQuizBox } from '../CreateQuiz/styles';
import { ParseJwt } from '../utils/helpers';
export interface IAnswer {
  id: number;
  title: string;
  isCorrect: boolean;
}
export interface IAnswers {
  item: IAnswer;
  questionItemId: number;
}

export const Answer = (props: IAnswers) => {
  const { item, questionItemId } = props;
  const [answerTitle, setAnswerTitle] = useState(item.title);
  const [checked, setChecked] = useState(item.isCorrect);
  const [saved, setSaved] = useState(false);
  const [createAnswer, { /* isLoading, isError, error, */ isSuccess: isAnswerCreated }] =
    useCreateAnswerMutation();
  const userId = ParseJwt();

  const saveAnswerHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    await createAnswer({
      id: item.id,
      title: answerTitle,
      isCorrect: checked,
      userId: userId,
      questionId: questionItemId,
    });
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 1500);
  };

  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const isCorrectHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  const setTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswerTitle(e.target.value);
  };

  const [deleteAnswer, { isSuccess }] = useDeleteAnswerMutation();

  async function remove() {
    dispatch(removeAnswer(item.id));
    await deleteAnswer(item.id);
  }

  return (
    <Box sx={ItemBlockQuizBox}>
      <TextField
        multiline
        placeholder={t('answer') as string}
        sx={{ width: '100%' }}
        onChange={setTitleHandler}
        value={answerTitle}
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
          checked={checked}
        />
      </Tooltip>
      <Tooltip
        TransitionComponent={Fade}
        title={
          <Typography sx={{ p: 0.5 }} fontSize={18}>
            {t('saveAnswer')}
          </Typography>
        }
        placement="top"
      >
        <Checkbox
          onChange={saveAnswerHandler}
          color="success"
          icon={<SaveIcon />}
          checkedIcon={<SaveIcon color="success" />}
          checked={saved}
        />
      </Tooltip>
      <IconButton onClick={remove} aria-label="delete" size="small">
        <DeleteIcon color="error" fontSize="medium" />
      </IconButton>
    </Box>
  );
};
