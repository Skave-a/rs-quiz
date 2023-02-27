import ControlPointIcon from '@mui/icons-material/ControlPoint';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import { Box, Button, Container, Link, Paper, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetAnswersQuery } from '../../store/api/AnswerApi';
import { useCreateQuestionMutation, useGetQuestionsQuery } from '../../store/api/QuestionApi';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
// import { addQuiz } from '../../store/reducers/cardSlice';
import { Link as RouterLink } from 'react-router-dom';
import { BtnAddBlock } from '../BtnAddBlock/BtnAddBlock';
import { Question } from '../FormQuestion/Question';
import { ParseJwt } from '../utils/helpers';
import { dataUser } from './data';
import {
  CreateQuizBox,
  CreateQuizBox2,
  CreateQuizCreate,
  CreateQuizCreateDark,
  TitleQuizPaper,
  TitleQuizPaperBtn,
  TitleQuizPaperDark,
} from './styles';

export const CreateQuiz = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');

  const [createQuestion, { isLoading, isError, error, isSuccess: isQuestionCreated }] =
    useCreateQuestionMutation();

  const { data: getQuestionsServer = [], isSuccess: isGetQuestions } = useGetQuestionsQuery();
  const { data: getAnswersServer = [], isSuccess } = useGetAnswersQuery();

  const arrayForSort = [...getQuestionsServer];
  const questionsInOrder = arrayForSort?.sort((a, b) => a.id - b.id);
  const userId = ParseJwt();
  const { t } = useTranslation();
  const darkMode = useAppSelector((state) => state.darkMode.darkMode);

  const saveQuiz = async () => {
    const id = Number(new Date());
    const theme = { title: title, img: img, description: description, userId: userId, id: id };
    localStorage.setItem('theme', JSON.stringify(theme));
    dataUser(getQuestionsServer, isGetQuestions, getAnswersServer, dispatch);
  };

  const addNewQuestion = async () => {
    await createQuestion({
      image: '',
      description: '',
      userId: userId,
    });
  };

  return (
    <Box sx={{ pb: '150px', position: 'relative' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
          gap: '10px',
          mb: '50px',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: '50px' }}>
          <NoteAddOutlinedIcon fontSize="large" />
          <Typography sx={darkMode ? CreateQuizCreateDark : CreateQuizCreate}>
            {t('createNew')}
          </Typography>
        </Box>
        <Link component={RouterLink} to="/" underline="none">
          <Button
            variant="contained"
            sx={{ color: '#ffffff', position: 'fixed', top: '11rem', right: '3rem' }}
            onClick={saveQuiz}
          >
            {t('saveQuestions')}
          </Button>
        </Link>
      </Box>

      <Box sx={CreateQuizBox}>
        <Container
          sx={{
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <Paper elevation={3} sx={darkMode ? TitleQuizPaperDark : TitleQuizPaper}>
            <Box>
              <Typography sx={{ mb: '15px', fontSize: '30px' }}>{t('title')}</Typography>
              <TextField
                multiline
                rows={2}
                placeholder={t('titleCover') as string}
                sx={{ width: '100%' }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
              />
            </Box>
            <Box>
              <Typography sx={{ mb: '7px' }}>{t('description')}</Typography>
              <TextField
                id="outlined-multiline-static"
                multiline
                placeholder={t('descriptionCover') as string}
                rows={3}
                sx={{ width: '100%' }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
              />
            </Box>
            <Box>
              <Typography sx={{ mb: '7px' }}>{t('Cover of quiz')}</Typography>
              <TextField
                multiline
                rows={1}
                placeholder={t('addLink') as string}
                sx={{ width: '100%', mb: '15px' }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setImg(e.target.value)}
              />
            </Box>
            <Button sx={TitleQuizPaperBtn}>
              <ControlPointIcon sx={{ color: 'rgb(255, 110, 3)' }} />
              <Typography sx={{ textTransform: 'uppercase' }} onClick={addNewQuestion}>
                {t('addNewQuestion')}
              </Typography>
            </Button>
          </Paper>
          {/* {questionsInOrder.map((item, i) => {
            return <Question key={item.id} questionItem={item} index={i + 1} />;
          })} */}
          <Box sx={CreateQuizBox2}>
            {questionsInOrder.map((item, i) => {
              return <Question key={item.id} questionItem={item} index={i + 1} />;
            })}
          </Box>
          <BtnAddBlock handleClick={addNewQuestion} />
        </Container>
      </Box>
      {/* <Link component={RouterLink} to="/" underline="none">
        <Button
          variant="contained"
          sx={{ color: '#ffffff', display: 'block', margin: '0 auto', mt: '50px' }}
          onClick={saveQuiz}
        >
          {t('saveQuestions')}
        </Button>
      </Link> */}
    </Box>
  );
};
function customAlphabet(arg0: string, arg1: number) {
  throw new Error('Function not implemented.');
}
