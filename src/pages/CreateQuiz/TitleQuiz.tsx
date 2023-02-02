import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { SERVICE_MESSAGES } from '../../components/utils/constants';
import ImageIcon from '@mui/icons-material/Image';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const btnImgSX = {
  alignItems: 'center',
  backgroundColor: '#f6f8f9',
  border: '0.1rem solid rgba(0,32,91,.2)',
  borderRadius: '0.2rem',
  color: '#424242',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '3rem',
  textAlign: 'center',
  transition: 'all .3s',
  width: '100%',
};

export const TitleQuiz = () => {
  function handleClick() {
    console.log('da');
  }
  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          padding: '1.2rem 2.4rem',
          maxWidth: '300px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}
      >
        <Button sx={btnImgSX}>
          <ImageIcon />
          <Typography>{SERVICE_MESSAGES.addImage}</Typography>
        </Button>
        <Box>
          <Typography sx={{ mb: '2px' }}>{SERVICE_MESSAGES.title}</Typography>
          <TextField
            id="outlined-multiline-static"
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
        <Button sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ControlPointIcon sx={{ color: 'rgb(255, 110, 3)' }} />
          <Typography sx={{ textTransform: 'uppercase' }} onClick={handleClick}>
            {SERVICE_MESSAGES.addQBlock}
          </Typography>
        </Button>
        <Button variant="contained" sx={{ m: '0 auto' }}>
          {SERVICE_MESSAGES.configure}
        </Button>
      </Paper>
    </Box>
  );
};
