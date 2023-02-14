import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Link } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useTranslation } from 'react-i18next';
import { logout } from '../../store/reducers/userSlice';

interface IModalTestComplete {
  open: boolean;
  handleClose: () => void;
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

export const ModalQuit = (props: IModalTestComplete) => {
  const { open, handleClose } = props;
  const { t } = useTranslation();
  const darkMode = useAppSelector((state) => state.darkMode.darkMode);
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logout());
    handleClose();
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ color: darkMode ? '#ffffff' : '' }}
          >
            {t('logout')}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, color: darkMode ? '#ffffff' : '' }}>
            {t('sure')}
          </Typography>
          <Button
            variant="contained"
            sx={{ color: '#fff', letterSpacing: '.1em', mt: '20px', display: 'block', ml: 'auto' }}
            onClick={handleLogOut}
          >
            {t('Yes')}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
