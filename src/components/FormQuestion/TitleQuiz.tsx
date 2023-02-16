import { Box, Button, Container, IconButton, Paper, TextField, Typography } from '@mui/material';
import { useForm, useFieldArray, FormProvider } from 'react-hook-form';
import { SERVICE_MESSAGES } from '../utils/constants';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { CreateQuizBox2, BtnRemoveQuest, TitleQuizPaper, TitleQuizPaperBtn } from './styles';
import { ChangeEvent, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { addCard, CardData } from '../../store/reducers/cardSlice';
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

  const methods = useForm<CardData>();
  const { register, handleSubmit, control, getValues } = methods;
  const formData = getValues(['title', 'desription', 'img']);
  console.log(formData);
  const { fields, append, remove } = useFieldArray({
    name: 'questionsArr',
    control,
  });

  function handleClick() {
    setBlock([...block, new Date().toString()]);
  }
  const onSubmit = (data: CardData) => {
    console.log(data);
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
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              <Typography sx={{ mb: '2px' }}>{SERVICE_MESSAGES.title}</Typography>
              <TextField
                multiline
                rows={2}
                placeholder={SERVICE_MESSAGES.writeSmth}
                {...register('title')}
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
                {...register('desription')}
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
                {...register('img')}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setImg(e.target.value)}
              />
            </Box>
            <Button sx={TitleQuizPaperBtn}>
              <ControlPointIcon sx={{ color: 'rgb(255, 110, 3)' }} />
              <Typography
                sx={{ textTransform: 'uppercase' }}
                onClick={() =>
                  append({
                    question: '',
                    imgQuestion: '',
                    answers: [''],
                    correctAnswer: '',
                  })
                }
              >
                {SERVICE_MESSAGES.addQBlock}
              </Typography>
            </Button>
          </Paper>

          {fields.map((field, index) => {
            return (
              <Box sx={CreateQuizBox2} key={field.id}>
                <BlockQuiz
                  name={field.id}
                  id={field.id}
                  setBlock={setBlockQuestion}
                  block={blockQuestion}
                  num={index + 1}
                />
                <IconButton color="warning" sx={BtnRemoveQuest} onClick={() => remove(index)}>
                  &#10006;
                </IconButton>
              </Box>
            );
          })}
          <Button type="submit" variant="contained" sx={{ m: '0 auto', color: '#ffffff' }}>
            {SERVICE_MESSAGES.configure}
          </Button>

          <BtnAddBlock handleClick={handleClick} />
        </Container>
      </form>
    </FormProvider>
  );
};
