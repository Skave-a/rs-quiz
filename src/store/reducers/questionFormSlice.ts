import { createSlice } from '@reduxjs/toolkit';
import { number, string } from 'yargs';

const questionFormSlice = createSlice({
  name: 'questionForm',
  initialState: {
    questionForms: [],
  },
  reducers: {
    addForm(state, action){
      console.log('state', state);
      console.log('action', action);
      state.questionForms.push(
        // {
        // id: new Date().toISOString,
        // title: action.payload.title,
      // }
      )
    }
  }
});

export const {} = questionFormSlice;