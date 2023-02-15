import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

export type Roles = 'admin' | 'user';

export interface IAnswer {
  id: string;
  title: string;
  isCorrect: boolean;
  userId: number;
  questionId: number;
}

interface IAnswerState {
  answer: IAnswer;
  answers: IAnswer[];
}

const initialState: IAnswerState = {
  answers: [],
  answer: {
    id: nanoid(),
    title: '',
    isCorrect: false,
    userId: 0,
    questionId: 1,
  },
};

export const answerSlice = createSlice({
  initialState,
  name: 'answerSlice',
  reducers: {
    resetAnswerState: () => initialState,
    addAnswer: (state, action: PayloadAction<IAnswer>) => {
      state.answers.push(action.payload);
    },
    removeAnswer: (state, action: PayloadAction<string>) => {
      state.answers = state.answers.filter((item) => item.id !== action.payload);
    },
    setTitle: (state, action) => {
      state.answer.title = action.payload;
    },
    setUserId: (state, action) => {
      state.answer.userId = action.payload;
    },
    setAnswers: (state, action) => {
      state.answers = action.payload;
    },
  },
});

export default answerSlice.reducer;

export const { addAnswer, removeAnswer, setTitle, setUserId, setAnswers } = answerSlice.actions;
