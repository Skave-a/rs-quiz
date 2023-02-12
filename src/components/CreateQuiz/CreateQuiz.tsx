import ControlPointIcon from '@mui/icons-material/ControlPoint';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { Question } from '../FormQuestion/Question';
import { useAppDispatch } from '../../store/hooks';
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

export const CreateQuiz = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [desription, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [questions, setQuestions] = useState([Date.now().toString()]);
  console.log(`questions`, questions);

  const saveQuiz = () =>
    dispatch(
      addQuiz({
        title,
        img,
        date: new Date().toISOString(),
        desription,
        questionsArr: [],
        passed: false,
        passedOn: 0,
      })
    );

  function addQuestion() {
    setQuestions([...questions, Date.now().toString()]);
  }

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
              <Typography sx={{ textTransform: 'uppercase' }} onClick={addQuestion}>
                {SERVICE_MESSAGES.addNewQuestion}
              </Typography>
            </Button>
          </Paper>
          <Box sx={CreateQuizBox2}>
            {questions.map((item, i) => {
              console.log(`el=>>>>>>>>>>>`, item);
              return (
                <Question
                  name={item}
                  key={item}
                  id={item}
                  setQuestions={setQuestions}
                  questions={questions}
                  num={i + 1}
                />
              );
            })}
            <Button variant="contained" sx={{ m: '0 auto', color: '#ffffff' }} onClick={saveQuiz}>
              {SERVICE_MESSAGES.saveQuestions}
            </Button>
          </Box>
          <BtnAddBlock handleClick={addQuestion} />
        </Container>
      </Box>
    </Box>
  );
};
