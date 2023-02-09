import SpeedDial from '@mui/material/SpeedDial';
import AddIcon from '@mui/icons-material/Add';
import { IBtnAddBlock } from '../utils/types';
import { Box, Tooltip } from '@mui/material';
import { SERVICE_MESSAGES } from '../utils/constants';

export const BtnAddBlock = (props: IBtnAddBlock) => {
  const { handleClick } = props;
  return (
    // <Box sx={{ height: 100, transform: 'translateZ(0px)', flexGrow: 1 }}>
    <Tooltip title={SERVICE_MESSAGES.addQBlock} placement="top">
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 80, right: 26 }}
        icon={<AddIcon />}
        onClick={handleClick}
      />
    </Tooltip>

    // </Box>
  );
};
