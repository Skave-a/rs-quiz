import { Box, TextField, Button, TextareaAutosize, Typography } from '@mui/material';
import { ChangeEvent } from 'react';
import { useState } from 'react';
import styles from './Profile.module.css';
import { DataInput, NamesInput } from '../utils/types';
import { useAppSelector } from '../../store/hooks';
import { useTranslation } from 'react-i18next';

export default function ProfileInput(props: DataInput) {
  const { rows } = props;
  const [isEditMode, setIsEditMode] = useState(false);
  const [rowsState, setRowsState] = useState(rows);
  const [editedRow, setEditedRow] = useState<NamesInput>();
  const handleEdit = () => {
    setIsEditMode(true);
    setEditedRow(undefined);
  };
  const darkMode = useAppSelector((state) => state.darkMode.darkMode);
  const { t } = useTranslation();

  const handleOnChangeField = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name: fildName, value } = e.target;
    setEditedRow({
      [fildName]: value,
    });
  };

  const handleSaveRowChanges = () => {
    setTimeout(() => {
      setIsEditMode(false);

      const newData = rowsState.map((row) => {
        if (editedRow !== undefined) {
          if (editedRow.nameUser) row.nameUser = editedRow.nameUser;
          if (editedRow.about) row.about = editedRow.about;
        }
        return row;
      });
      setRowsState(newData);
      setEditedRow(undefined);
    }, 1000);
  };

  return (
    <Box component="form">
      {rowsState.map((row) => {
        return (
          <Box key={row.id} className={styles.profile__inputs}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                color: darkMode ? '#ffffff' : '#292626',
              }}
            >
              {isEditMode ? (
                <TextField
                  label="Your name"
                  name="nameUser"
                  id={row.id}
                  variant="standard"
                  sx={{ color: darkMode ? '#ffffff' : '#292626' }}
                  defaultValue={editedRow ? editedRow.nameUser : row.nameUser}
                  onChange={(e) => handleOnChangeField(e)}
                />
              ) : (
                row.nameUser
              )}
              &nbsp;
              <Box className={styles.profile__btns}>
                {isEditMode ? (
                  <Button
                    onClick={() => handleSaveRowChanges()}
                    style={{ background: 'rgb(120 217 124)' }}
                    variant="contained"
                  >
                    {t('Save')}
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleEdit()}
                    variant="contained"
                    sx={{ color: '#fff', letterSpacing: '0' }}
                  >
                    {t('edit profile')}
                  </Button>
                )}
              </Box>
            </Box>
            <Box className={styles.profile__about} sx={{ color: darkMode ? '#ffffff' : '#292626' }}>
              <Box className={styles.profile__about_txt}>
                <Typography variant="h6" mt={2} sx={{ color: darkMode ? '#ffffff' : '#292626' }}>
                  {t('About me')}
                </Typography>
                &nbsp;
              </Box>
              {isEditMode ? (
                <TextareaAutosize
                  style={{ height: 'auto', width: '100%' }}
                  name="about"
                  id={row.id}
                  placeholder="About me"
                  minRows={5}
                  defaultValue={editedRow ? editedRow.about : row.about}
                  onChange={(e) => handleOnChangeField(e)}
                />
              ) : (
                row.about
              )}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
