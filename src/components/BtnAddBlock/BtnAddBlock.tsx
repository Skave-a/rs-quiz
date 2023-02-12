import SpeedDial from '@mui/material/SpeedDial';
import AddIcon from '@mui/icons-material/Add';
import { IBtnAddBlock } from '../utils/types';
import { Tooltip } from '@mui/material';
import { SERVICE_MESSAGES } from '../utils/constants';

export const BtnAddBlock = (props: IBtnAddBlock) => {
  const { handleClick } = props;
  return (
    <Tooltip title={SERVICE_MESSAGES.addNewQuestion} placement="top">
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 80, right: 26 }}
        icon={<AddIcon />}
        onClick={handleClick}
      />
    </Tooltip>
  );
};
