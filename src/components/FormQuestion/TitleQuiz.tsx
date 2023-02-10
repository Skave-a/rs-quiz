import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import { SERVICE_MESSAGES } from '../utils/constants';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { CreateQuizBox2, TitleQuizPaper, TitleQuizPaperBtn, TitleQuizPaperDark } from './styles';
import { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addCard } from '../../store/reducers/cardSlice';
import { BlockQuiz } from '../../components/FormQuestion/BlockQuiz';
import { ITitleQuiz } from '../../components/utils/types';
import { BtnAddBlock } from '../BtnAddBlock/BtnAddBlock';

export const TitleQuiz = (props: ITitleQuiz) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [desription, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [blockQuestion, setBlockQuestion] = useState(['first']);
  const { block, setBlock } = props;
  const darkMode = useAppSelector((state) => state.darkMode.darkMode);

  const addNewCard = () =>
    dispatch(
      addCard({
        title,
        img,
        date: new Date().toISOString(),
        desription,
        questionsArr: [],
        passed: false,
        passedOn: 0,
      })
    );

  function handleClick() {
    setBlock([...block, new Date().toString()]);
  }

  const blocksQuestion = block.map((el, id) => {
    return (
      <BlockQuiz
        name={el}
        key={el}
        id={el}
        setBlock={setBlockQuestion}
        block={blockQuestion}
        num={id + 1}
      />
    );
  });
  return (
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
          <Typography sx={{ mb: '2px' }}>{SERVICE_MESSAGES.title}</Typography>
          <TextField
            multiline
            rows={2}
            placeholder={SERVICE_MESSAGES.writeSmth}
            sx={{ width: '100%' }}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          />
        </Box>
        <Box>
          <Typography sx={{ mb: '2px' }}>{SERVICE_MESSAGES.description}</Typography>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={3}
            placeholder={SERVICE_MESSAGES.writeSmth}
            sx={{ width: '100%' }}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
          />
        </Box>
        <Box>
          <Typography>{SERVICE_MESSAGES.addImage}</Typography>
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
          <Typography sx={{ textTransform: 'uppercase' }} onClick={handleClick}>
            {SERVICE_MESSAGES.addQBlock}
          </Typography>
        </Button>
      </Paper>
      <Box sx={CreateQuizBox2}>
        {blocksQuestion}
        <Button variant="contained" sx={{ m: '0 auto', color: '#ffffff' }} onClick={addNewCard}>
          {SERVICE_MESSAGES.configure}
        </Button>
      </Box>
      <BtnAddBlock handleClick={handleClick} />
    </Container>
  );
};
