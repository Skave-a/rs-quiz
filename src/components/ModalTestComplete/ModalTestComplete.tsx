import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { SERVICE_MESSAGES } from '../utils/constants';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Link } from '@mui/material';

interface IModalTestComplete {
  open: boolean;
  handleClose: () => void;
  score: number;
  countOfquestions: number;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #19d2f1',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};

export const ModalTestComplete = (props: IModalTestComplete) => {
  const { open, handleClose, score, countOfquestions } = props;
  const percent = (score * 100) / countOfquestions;
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {SERVICE_MESSAGES.complete}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {percent > 79
              ? `${SERVICE_MESSAGES.congratulations}${percent}%`
              : `${SERVICE_MESSAGES.fail}${percent}%`}
          </Typography>
          <Link
            component={RouterLink}
            to="/"
            underline="none"
            sx={{ mt: '50px', display: 'block', textAlign: 'end' }}
          >
            <Button variant="contained" sx={{ color: '#fff', letterSpacing: '.1em' }}>
              {SERVICE_MESSAGES.toMain}
            </Button>
          </Link>
        </Box>
      </Modal>
    </div>
  );
};
