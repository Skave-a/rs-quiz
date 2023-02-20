import ControlPointIcon from '@mui/icons-material/ControlPoint';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import { Box, Button, Container, Link, Paper, TextField, Typography } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addQuiz, removeQuiz } from '../../store/reducers/cardSlice';
import { BtnAddBlock } from '../BtnAddBlock/BtnAddBlock';
import {
  CreateQuizBox,
  CreateQuizBox2,
  CreateQuizCreate,
  TitleQuizPaper,
  TitleQuizPaperBtn,
  CreateQuizCreateDark,
  TitleQuizPaperDark,
} from '../CreateQuiz/styles';
// import { useCreateQuestionMutation, useGetQuestionsQuery } from '../../store/api/QuestionApi';
import { addQuestion, resetQuestState, setQuestions } from '../../store/reducers/questionSlice';
// import { useCreateAnswerMutation } from '../../store/api/AnswerApi';
import { ParseJwt } from '../utils/helpers';
import { addAnswer } from '../../store/reducers/answerSlice';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { Question } from './Question';
import { nanoid } from '@reduxjs/toolkit';
// import { customAlphabet } from 'nanoid/non-secure';

export const EditPage = () => {
  const { id } = useParams();
  const allCards = useAppSelector((state) => state.cards.list);
  let card = allCards[0];
  allCards.forEach((el) => {
    if (el.id === Number(id)) {
      card = el;
    }
  });
  // console.log('card', card);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const answer = useAppSelector((state) => state.answers.answer);
  const questions = useAppSelector((state) => state.questions.questions);
  const question = useAppSelector((state) => state.questions.question);
  // const answers = useAppSelector((state) => state.answers.answers);

  // const [createQuestion, { isLoading, isError, error, isSuccess: isQuestionCreated }] =
  //   useCreateQuestionMutation();

  // const { data: getQuestionsServer = [] } = useGetQuestionsQuery();
  // useEffect(() => {
  //   if (getQuestionsServer.length) {
  //     dispatch(resetQuestState());
  //     dispatch(setQuestions(getQuestionsServer));
  //   }
  // }, [getQuestionsServer]);

  // const [createAnswer, { isSuccess: isAnswerCreated }] = useCreateAnswerMutation();

  const userId = ParseJwt();

  const { t } = useTranslation();
  const darkMode = useAppSelector((state) => state.darkMode.darkMode);

  // console.log(`questions  ===>>>>>>`, questions);
  // console.log(`answers  ===>>>>>>`, answers);
  // const nanoid = customAlphabet('1234567890', 5);
  // console.log(nanoid);
  const saveQuiz = async () => {
    dispatch(removeQuiz(card));
    dispatch(
      addQuiz({
        title,
        img,
        date: new Date().toISOString(),
        description,
        questionsArr: [],
        passed: false,
        passedOn: 0,
        id: nanoid(),
      })
    );
    // await createQuestion(questions);
    // await createAnswer(answers);
  };

  // useEffect(() => {
  //   if (!questions.length) {
  //     dispatch(addQuestion({ ...question, userId }));
  //   }
  // }, []);

  const addNewQuestion = () => {
    dispatch(addQuestion({ ...question, userId, id: questions.length + 1 }));
    dispatch(
      addAnswer({ ...answer, userId, questionId: questions.length + 1, id: questions.length + 1 })
    );
  };

  return (
    <Box sx={{ pb: '150px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: '50px' }}>
        <NoteAddOutlinedIcon fontSize="large" />
        <Typography sx={darkMode ? CreateQuizCreateDark : CreateQuizCreate}>
          {t('Edit quiz')}
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
                defaultValue={card.title}
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
                defaultValue={card.description}
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
                defaultValue={card.img}
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
            {/* {questions.map((item, i) => {
              return <Question key={item.id} id={item.id} item={item} index={i + 1} />;
            })} */}
            {card.questionsArr.map((item, index) => (
              <Question index={index} item={item} id={card.id} key={index} />
            ))}
            <Link component={RouterLink} to="/" underline="none">
              <Button variant="contained" sx={{ m: '0 auto', color: '#ffffff' }} onClick={saveQuiz}>
                {t('saveQuestions')}
              </Button>
            </Link>
          </Box>
          <BtnAddBlock handleClick={addNewQuestion} />
        </Container>
      </Box>
    </Box>
  );
};
