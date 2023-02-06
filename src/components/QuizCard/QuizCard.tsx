import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, CardHeader, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import QuizIcon from '@mui/icons-material/Quiz';
import { SERVICE_MESSAGES } from '../utils/constants';
import { CardData } from '../../store/reducers/cardSlice';
import { FC } from 'react';

export const QuizCard: FC<CardData> = ({ title, img, date }) => {
  return (
    <Card sx={{ maxWidth: 345, width: '100%', position: 'relative' }}>
      <CardHeader
        sx={{ position: 'absolute', zIndex: 5, padding: '10px', right: 0 }}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardActionArea>
        <CardMedia component="img" height="140" image={img} alt="card" />
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '10px' }}>
            <Typography
              sx={{
                color: '#424242',
                fontSize: '0.9rem',
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                display: 'flex',
                gap: '3px',
                alignItems: 'center',
              }}
            >
              <QuizIcon />
              {SERVICE_MESSAGES.quiz}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
              <Typography
                sx={{
                  color: 'rgba(66,66,66,.5)',
                  fontSize: '0.7rem',
                  letterSpacing: '.1em',
                  lineHeight: '1.1rem',
                  textTransform: 'uppercase',
                }}
              >
                {SERVICE_MESSAGES.published}
              </Typography>
              <Box
                sx={{
                  borderRadius: '50%',
                  display: 'inline-block',
                  height: '7px',
                  backgroundColor: '#5cb85c',
                  width: '7px',
                }}
              >
                {' '}
              </Box>
            </Box>
          </Box>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: '#424242', fontSize: '1.5rem', fontWeight: 700 }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: 'rgba(66,66,66,.5)',
              fontSize: '0.7rem',
              letterSpacing: '.05rem',
              lineHeight: '1.6rem',
            }}
          >
            {date}
          </Typography>
          <Box sx={{ display: 'flex', gap: '3px', color: '#5cb85c', alignItems: 'center' }}>
            <Box
              sx={{
                borderRadius: '50%',
                display: 'inline-block',
                height: '7px',
                backgroundColor: '#5cb85c',
                width: '7px',
              }}
            >
              {' '}
            </Box>
            Active
          </Box>
          <Box sx={{ display: 'flex', gap: '3px', color: '#05b4f9', alignItems: 'center' }}>
            <Box
              sx={{
                borderRadius: '50%',
                display: 'inline-block',
                height: '7px',
                backgroundColor: '#05b4f9',
                width: '7px',
              }}
            >
              {' '}
            </Box>
            Passed
          </Box>
          <Box sx={{ display: 'flex', gap: '3px', color: '#f1003a', alignItems: 'center' }}>
            <Box
              sx={{
                borderRadius: '50%',
                display: 'inline-block',
                height: '7px',
                backgroundColor: '#f1003a',
                width: '7px',
              }}
            >
              {' '}
            </Box>
            Failed
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
