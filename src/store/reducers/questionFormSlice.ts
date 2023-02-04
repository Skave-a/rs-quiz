import { createSlice } from '@reduxjs/toolkit';

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