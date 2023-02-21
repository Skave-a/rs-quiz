import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Roles = 'admin' | 'user';

export interface IQuestion {
  id: number;
  image: string;
  description: string;
  userId: number;
}

interface IQuestionState {
  question: IQuestion;
  questions: IQuestion[];
}

const initialState: IQuestionState = {
  questions: [],
  question: {
    id: 1,
    description: '',
    image: '',
    userId: 0,
  },
};

export const questionSlice = createSlice({
  initialState,
  name: 'questionSlice',
  reducers: {
    resetQuestState: () => initialState,
    addQuestion: (state, action: PayloadAction<IQuestion>) => {
      state.questions.push(action.payload);
    },
    removeQuestion: (state, action: PayloadAction<number>) => {
      state.questions = state.questions.filter((item) => item.id !== action.payload);
    },
    setDescription: (state, action) => {
      state.question.description = action.payload;
    },
    setImage: (state, action) => {
      state.question.image = action.payload;
    },
    setUserId: (state, action) => {
      state.question.userId = action.payload;
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
  },
});

export default questionSlice.reducer;

export const {
  addQuestion,
  removeQuestion,
  setDescription,
  setImage,
  setUserId,
  setQuestions,
  resetQuestState,
} = questionSlice.actions;
