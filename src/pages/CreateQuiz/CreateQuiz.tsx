import { Box, Typography } from '@mui/material';
import { SERVICE_MESSAGES } from '../../components/utils/constants';
import { TitleQuiz } from './TitleQuiz';
import { BlockQuiz } from './BlockQuiz';

export const CreateQuiz = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: '3rem',
          letterSpacing: '-0.05em',
          lineHeight: '1em',
          marginBottom: '2.4rem',
          color: '#424242',
          fontWeight: '700',
        }}
      >
        {SERVICE_MESSAGES.create}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <TitleQuiz />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <BlockQuiz name="f" />
          <BlockQuiz name="s" />
        </Box>
      </Box>
    </Box>
  );
};
