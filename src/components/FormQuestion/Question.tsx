import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import {
  Box,
  Button,
  Checkbox,
  Fade,
  IconButton,
  Paper,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCreateAnswerMutation, useGetAnswersQuery } from '../../store/api/AnswerApi';
import { useCreateQuestionMutation, useDeleteQuestionMutation } from '../../store/api/QuestionApi';
import { useAppSelector } from '../../store/hooks';
import { BlockQuizBtn, BlockQuizPaper, BlockQuizPaperDark } from '../CreateQuiz/styles';
import { ParseJwt } from '../utils/helpers';
import { Answer } from './Answer';

export interface IQuestionsProps {
  index: number;
  questionItem: IQuestion;
}
export interface IQuestion {
  id: number;
  description: string;
  image: string | null;
}

export interface IAnswer {
  id: number;
  title: string;
  isCorrect: boolean;
}

export const Question = (props: IQuestionsProps) => {
  const { index, questionItem } = props;
  const darkMode = useAppSelector((state) => state.darkMode.darkMode);
  const [checked, setChecked] = useState(false);
  const { t } = useTranslation();
  const [descriptionLocal, setLocalDescription] = useState(questionItem.description);
  const [imageLocal, setImageLocal] = useState(questionItem.image ?? '');
  const userId = ParseJwt();

  const [createAnswer, { /* isLoading, isError, error, */ isSuccess: isAnswerCreated }] =
    useCreateAnswerMutation();

  const [deleteQuestion, { isLoading, isError, error, isSuccess: isQuestionDeleted }] =
    useDeleteQuestionMutation();

  const { data: getAnswersServer = [], isSuccess } = useGetAnswersQuery();
  const arrayForSort = [...getAnswersServer];
  const answersInOrder = arrayForSort?.sort((a, b) => a.id - b.id);

  const [
    createQuestion,
    { isLoading: loading, /* , isError, error, */ isSuccess: isQuestionSaved },
  ] = useCreateQuestionMutation();

  async function addAnswerHandler() {
    await createAnswer({
      title: '',
      isCorrect: false,
      userId: userId,
      questionId: questionItem.id,
    });
  }

  async function removeQuestionHandler() {
    await deleteQuestion(questionItem.id);
  }

  const descriptionHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setLocalDescription(e.target.value);

  const imageHandler = (e: ChangeEvent<HTMLInputElement>) => setImageLocal(e.target.value);

  const saveQuestionHandler = async () => {
    await createQuestion({
      id: questionItem.id,
      image: imageLocal,
      description: descriptionLocal,
      userId: userId,
    });
  };

  useEffect(() => {
    if (isQuestionSaved) setChecked(true);
    setTimeout(() => {
      setChecked(false);
    }, 1000);
  }, [isQuestionSaved]);

  return (
    <Box>
      {loading ? (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      ) : null}
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
            {index}
          </Typography>
          <Tooltip
            TransitionComponent={Fade}
            title={
              <Typography sx={{ p: 0.5 }} fontSize={18}>
                {t('deleteQuestion')}
              </Typography>
            }
            placement="top"
          >
            <IconButton onClick={removeQuestionHandler} aria-label="delete" size="small">
              <DeleteIcon color="error" fontSize="medium" />
            </IconButton>
          </Tooltip>
          <Tooltip
            TransitionComponent={Fade}
            title={
              <Typography sx={{ p: 0.5 }} fontSize={18}>
                {t('saveQuestion')}
              </Typography>
            }
            placement="top"
          >
            <Checkbox
              onChange={saveQuestionHandler}
              color="success"
              icon={<SaveIcon />}
              checkedIcon={<SaveIcon color="success" />}
              checked={checked}
            />
          </Tooltip>
        </Box>
        <TextField
          multiline
          rows={2}
          placeholder={t('writeQuest') as string}
          sx={{ width: '100%', mb: '15px' }}
          onChange={descriptionHandler}
          value={descriptionLocal}
        />
        <TextField
          multiline
          rows={1}
          placeholder={t('addLinkImg') as string}
          sx={{ width: '100%', mb: '15px' }}
          onChange={imageHandler}
          value={imageLocal}
        />
        <Box sx={{ mb: '20px' }}>
          {answersInOrder.map((item) => {
            if (item.questionId === questionItem.id) {
              return <Answer key={item.id} item={item} questionItemId={questionItem.id} />;
            }
            return null;
          })}
        </Box>
        <Button sx={BlockQuizBtn} onClick={addAnswerHandler}>
          <ControlPointIcon sx={{ color: 'rgb(255, 110, 3)' }} />
          <Typography sx={{ textTransform: 'uppercase' }}>{t('addAnswer')}</Typography>
        </Button>
      </Paper>
    </Box>
  );
};
