import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Roles = 'admin' | 'user';

export interface IAnswer {
  id: number;
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
    id: 1,
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
    removeAnswer: (state, action: PayloadAction<number>) => {
      state.answers = state.answers.filter((item) => item.id !== action.payload);
    },
    deleteAnswers: (state, action: PayloadAction<number>) => {
      state.answers = state.answers.filter((item) => item.questionId !== action.payload);
    },
    setTitle: (state, action) => {
      state.answer.title = action.payload;
    },
    setIsCorrect: (state, action) => {
      state.answer.isCorrect = action.payload;
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

export const {
  addAnswer,
  removeAnswer,
  setTitle,
  setUserId,
  setAnswers,
  deleteAnswers,
  resetAnswerState,
  setIsCorrect,
} = answerSlice.actions;
