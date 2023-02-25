import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const SelectLang = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('language') ?? 'en';
  });
  const handleChange = (event: SelectChangeEvent) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120, mr: '35px' }} size="small">
      <InputLabel id="demo-select-small">Language</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        label="Language"
        onChange={handleChange}
        defaultValue={lang}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ru">Russian</MenuItem>
      </Select>
    </FormControl>
  );
};
