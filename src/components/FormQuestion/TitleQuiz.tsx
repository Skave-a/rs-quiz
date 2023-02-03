import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { SERVICE_MESSAGES } from '../utils/constants';
import ImageIcon from '@mui/icons-material/Image';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { btnImgSX, TitleQuizPaper, TitleQuizPaperBtn } from './styles';

interface ITitleQuiz {
  block: string[];
  setBlock: (arg0: string[]) => void;
}

export const TitleQuiz = (props: ITitleQuiz) => {
  const { block, setBlock } = props;
  function handleClick() {
    setBlock([...block, new Date().toString()]);
  }
  return (
    <Box sx={{ margin: '0 auto' }}>
      <Paper elevation={3} sx={TitleQuizPaper}>
        <Button sx={btnImgSX}>
          <ImageIcon />
          <Typography>{SERVICE_MESSAGES.addImage}</Typography>
        </Button>
        <Box>
          <Typography sx={{ mb: '2px' }}>{SERVICE_MESSAGES.title}</Typography>
          <TextField
            multiline
            rows={3}
            placeholder={SERVICE_MESSAGES.writeSmth}
            sx={{ width: '100%' }}
          />
        </Box>
        <Box>
          <Typography sx={{ mb: '2px' }}>{SERVICE_MESSAGES.description}</Typography>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={2}
            placeholder={SERVICE_MESSAGES.writeSmth}
            sx={{ width: '100%' }}
          />
        </Box>
        <Button sx={TitleQuizPaperBtn}>
          <ControlPointIcon sx={{ color: 'rgb(255, 110, 3)' }} />
          <Typography sx={{ textTransform: 'uppercase' }} onClick={handleClick}>
            {SERVICE_MESSAGES.addQBlock}
          </Typography>
        </Button>
        <Button variant="contained" sx={{ m: '0 auto', color: '#ffffff' }}>
          {SERVICE_MESSAGES.configure}
        </Button>
      </Paper>
    </Box>
  );
};
