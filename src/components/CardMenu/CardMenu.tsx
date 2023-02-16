import { Box, Menu, MenuItem, ListItemIcon, IconButton, Tooltip } from '@mui/material/';
import { MouseEvent, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { cardMenuText } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { ICardMenu } from '../utils/types';
import { removeQuiz } from '../../store/reducers/cardSlice';
import { useTranslation } from 'react-i18next';

export const CardMenu = (props: ICardMenu) => {
  const { card } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setAnchorEl(null);
  };
  function handleRemove(event: MouseEvent<HTMLElement>) {
    handleClose(event);
    dispatch(removeQuiz(card));
  }
  const { t } = useTranslation();
  return (
    <Box>
      <Box>
        <Tooltip title={cardMenuText.testSet}>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          {t('edit')}
        </MenuItem>
        <MenuItem onClick={handleRemove}>
          <ListItemIcon>
            <DeleteForeverIcon fontSize="small" />
          </ListItemIcon>
          {t('delete')}
        </MenuItem>
      </Menu>
    </Box>
  );
};
