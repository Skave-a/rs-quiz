import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { SERVICE_MESSAGES } from '../utils/constants';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { ItemBlockQuiz } from './ItemBlockQuiz';
import style from './FormQuestion.module.css';
import { BlockQuizBtn, BlockQuizPaper, BlockAnswer, ItemBlockQuizBox } from './styles';
import { IBlockQuiz } from '../../components/utils/types';
import { useFieldArray, useFormContext, useForm } from 'react-hook-form';
import { RNDstring } from './RNDstring';

export const BlockQuiz = (props: IBlockQuiz) => {
  const { name, num } = props;
  const methods = useFormContext();
  const { getValues } = methods;
  const formData = getValues(['questions', 'imgQuestion', 'questionsArr.answers']);
  console.log(formData);
  const { fields, append, remove } = useFieldArray({
    name: 'answers',
  });
  const rndStr = RNDstring();

  return (
    <Box>
      <Paper elevation={3} sx={BlockQuizPaper}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: '20px',
            alignItems: 'flex-end',
          }}
        >
          <Typography fontSize={'30px'}>
            {SERVICE_MESSAGES.questionNum}
            {num}
          </Typography>
        </Box>
        <TextField
          multiline
          rows={2}
          placeholder={SERVICE_MESSAGES.writeQuest}
          sx={{ width: '100%', mb: '15px' }}
          {...methods.register('questionsArr.questions')}
        />
        <TextField
          multiline
          rows={1}
          placeholder={SERVICE_MESSAGES.addLink}
          sx={{ width: '100%', mb: '15px' }}
          {...methods.register('questionsArr.imgQuestion')}
        />

        {fields.map((field, index) => {
          return (
            <Box sx={BlockAnswer} key={field.id}>
              <Box sx={ItemBlockQuizBox}>
                <TextField
                  multiline
                  placeholder={SERVICE_MESSAGES.answer}
                  sx={{ width: '100%' }}
                  {...methods.register('questionsArr.answers')}
                  name={name}
                />
                <input type="radio" name={name} id={rndStr} className={style.inputQuestion} />
                <label htmlFor={rndStr}></label>
              </Box>
              <Button
                onClick={() => remove(index)}
                variant="contained"
                color="error"
                sx={{ fontSize: '12px', textTransform: 'capitalize' }}
              >
                Remove
              </Button>
            </Box>
          );
        })}

        <Button sx={BlockQuizBtn} type="submit" onClick={append}>
          <ControlPointIcon sx={{ color: 'rgb(255, 110, 3)' }} />
          <Typography sx={{ textTransform: 'uppercase' }}>{SERVICE_MESSAGES.addAnswer}</Typography>
        </Button>
      </Paper>
    </Box>
  );
};
