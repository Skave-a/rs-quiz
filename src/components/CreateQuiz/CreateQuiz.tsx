import ControlPointIcon from '@mui/icons-material/ControlPoint';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCreateQuestionMutation, useGetQuestionsQuery } from '../../store/api/QuestionApi';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addQuiz } from '../../store/reducers/cardSlice';
import { BtnAddBlock } from '../BtnAddBlock/BtnAddBlock';
import { Question } from '../FormQuestion/Question';
import { ParseJwt } from '../utils/helpers';
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
  const arrayForSort = [...getQuestionsServer];
  const questionsInOrder = arrayForSort?.sort((a, b) => a.id - b.id);
  const userId = ParseJwt();
  const { t } = useTranslation();
  const darkMode = useAppSelector((state) => state.darkMode.darkMode);

  const saveQuiz = async () => {
    dispatch(
      addQuiz({
        title,
        img,
        date: new Date().toISOString(),
        description,
        questionsArr: [],
        passed: false,
        passedOn: 0,
      })
    );
    //await createQuestion(questions);
    //await createAnswer(answers);
  };

  const addNewQuestion = async () => {
    await createQuestion({
      image: '',
      description: '',
      userId: userId,
    });
  };

  return (
    <Box sx={{ pb: '150px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: '50px' }}>
        <NoteAddOutlinedIcon fontSize="large" />
        <Typography sx={darkMode ? CreateQuizCreateDark : CreateQuizCreate}>
          {t('createNew')}
        </Typography>
      </Box>
      <Box sx={CreateQuizBox}>
        <Container
          sx={{
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
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
          <Box sx={CreateQuizBox2}>
            {questionsInOrder.map((item, i) => {
              return <Question key={item.id} questionItem={item} index={i + 1} />;
            })}
            <Button variant="contained" sx={{ m: '0 auto', color: '#ffffff' }} onClick={saveQuiz}>
              {t('saveQuestions')}
            </Button>
          </Box>
          <BtnAddBlock handleClick={addNewQuestion} />
        </Container>
      </Box>
    </Box>
  );
};
