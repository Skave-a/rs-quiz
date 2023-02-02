import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, CardHeader, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import QuizIcon from '@mui/icons-material/Quiz';

export const QuizCard = () => {
  return (
    <Card sx={{ maxWidth: 345, position: 'relative' }}>
      <CardHeader
        sx={{ position: 'absolute', zIndex: 5, padding: '10px', right: 0 }}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.riddle.com/website/riddle/2019/placeholders/placeholder-quiz.png"
          alt="green iguana"
        />
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
              <QuizIcon /> Quiz
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
                published
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
            History Quiz
          </Typography>
          <Typography
            sx={{
              color: 'rgba(66,66,66,.5)',
              fontSize: '0.7rem',
              letterSpacing: '.05rem',
              lineHeight: '1.6rem',
            }}
          >
            2023-02-01 17:37:50
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
