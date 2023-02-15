import ControlPointIcon from '@mui/icons-material/ControlPoint';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { Question } from '../FormQuestion/Question';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addQuiz } from '../../store/reducers/cardSlice';
import { BtnAddBlock } from '../BtnAddBlock/BtnAddBlock';
import { SERVICE_MESSAGES } from '../utils/constants';
import {
  CreateQuizBox,
  CreateQuizBox2,
  CreateQuizCreate,
  TitleQuizPaper,
  TitleQuizPaperBtn,
} from './styles';
import { useCreateQuestionMutation } from '../../store/api/QuestionApi';
import { nanoid } from 'nanoid';
import { addQuestion } from '../../store/reducers/questionSlice';
import { useCreateAnswerMutation } from '../../store/api/AnswerApi';
import { ParseJwt } from '../utils/helpers';

export const CreateQuiz = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');

  //const [questions, setQuestions] = useState<IQuestionCerate[]>([]); //questionApi
  const [createQuestion, { isLoading, isError, error, isSuccess }] = useCreateQuestionMutation();
  const [createAnswer, { isSuccess: isCreated }] = useCreateAnswerMutation();

  //const token = useAppSelector((state) => state.users.token);
  const questions = useAppSelector((state) => state.questions.questions);
  const question = useAppSelector((state) => state.questions.question);
  const answers = useAppSelector((state) => state.answers.answers);
  //const token = useAppSelector((state) => state.users.token);
  const userId = ParseJwt();

  //console.log(`questions local ===>>>>>>`, questions);
  // console.log(`isSuccessQuestion ===>>>>>>`, isSuccess);

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
    await createQuestion(questions);
    await createAnswer(answers);
  };

  /* function ParseJwt() {
    if (token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');

      return Number(JSON.parse(window.atob(base64)).id);
    }
    return 1;
  } */

  /* const writeQuestions = () => {
    dispatch(addQuestion({ ...question, userId }));
  }; */

  if (!questions.length) {
    dispatch(addQuestion({ ...question, userId }));
  }

  //useEffect(() => {
  //setQuestions([...questions, { ...question, userId }]);

  //}, []);

  //Get new empty question in server for printing in render page
  /*  useEffect(() => {
    const userId = ParseJwt();
    if (!questions.length) {
      dispatch(addQuestion({ ...question, userId }));
    }

    /* const fetchData = async () => {
      const isRepeated = questions.includes(question.id);

      const userId = ParseJwt();

      await createQuestion({ ...question, userId });
    };
    fetchData().catch(console.error); 
  }, []); */

  /* function addQuestion() {
    setQuestions([...questions, questionEntity]);
  } */
  const addNewQuestion = () => {
    dispatch(addQuestion({ ...question, userId, id: nanoid() }));
  };

  return (
    <Box sx={{ pb: '150px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: '50px' }}>
        <NoteAddOutlinedIcon fontSize="large" />
        <Typography sx={CreateQuizCreate}>{SERVICE_MESSAGES.createNew}</Typography>
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
          <Paper elevation={3} sx={TitleQuizPaper}>
            <Box>
              <Typography sx={{ mb: '15px', fontSize: '30px' }}>
                {SERVICE_MESSAGES.title}
              </Typography>
              <TextField
                multiline
                rows={2}
                placeholder={SERVICE_MESSAGES.titleCover}
                sx={{ width: '100%' }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
              />
            </Box>
            <Box>
              <Typography sx={{ mb: '7px' }}>{SERVICE_MESSAGES.description}</Typography>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={3}
                placeholder={SERVICE_MESSAGES.descriptionCover}
                sx={{ width: '100%' }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
              />
            </Box>
            <Box>
              <Typography sx={{ mb: '7px' }}>{SERVICE_MESSAGES.addImage}</Typography>
              <TextField
                multiline
                rows={1}
                placeholder={SERVICE_MESSAGES.addLink}
                sx={{ width: '100%', mb: '15px' }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setImg(e.target.value)}
              />
            </Box>
            <Button sx={TitleQuizPaperBtn}>
              <ControlPointIcon sx={{ color: 'rgb(255, 110, 3)' }} />
              <Typography sx={{ textTransform: 'uppercase' }} onClick={addNewQuestion}>
                {SERVICE_MESSAGES.addNewQuestion}
              </Typography>
            </Button>
          </Paper>
          <Box sx={CreateQuizBox2}>
            {questions.map((item, i) => {
              //console.log(`el=>>>>>>>>>>>`, item);
              return (
                <Question
                  key={item.id}
                  id={item.id}
                  //setQuestions={setQuestions}
                  //questions={questions}
                  index={i + 1}
                />
              );
            })}
            <Button variant="contained" sx={{ m: '0 auto', color: '#ffffff' }} onClick={saveQuiz}>
              {SERVICE_MESSAGES.saveQuestions}
            </Button>
          </Box>
          <BtnAddBlock handleClick={addNewQuestion} />
        </Container>
      </Box>
    </Box>
  );
};
