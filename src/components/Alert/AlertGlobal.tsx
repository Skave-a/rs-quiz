import React, { FC } from 'react';
//import Alert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';
import { setServerError } from '../../store/reducers/serviceSlice';
import { useAppDispatch } from '../../store/hooks';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface IAlertGlobalProps {
  message: string;
  severityProp: boolean;
  onSuccess?: {
    setOpenSuccessAlert: (item: boolean) => void;
    openSuccessAlert: boolean;
  };
  onError?: {
    setOpenErrorAlert: (item: boolean) => void;
    openErrorAlert: boolean;
  };
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertGlobal: FC<IAlertGlobalProps> = ({
  message,
  severityProp,
  onSuccess,
  onError,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    if (onSuccess) {
      onSuccess.openSuccessAlert && onSuccess.setOpenSuccessAlert(false);
    }
    if (onError) {
      onError.openErrorAlert && onError.setOpenErrorAlert(false);
      dispatch(setServerError(false));
    }
  };

  return (
    <Snackbar
      open={severityProp ? onSuccess?.openSuccessAlert : onError?.openErrorAlert}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      sx={{ marginTop: '10%' }}
    >
      <Alert
        onClose={handleClose}
        severity={severityProp ? 'success' : 'error'}
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertGlobal;
