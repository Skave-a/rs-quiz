import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
//import { ParseJwt } from '../../components/utils/helpers';

export type Roles = 'admin' | 'user';

export interface IQuestion {
  id: string;
  image: string;
  description: string;
  userId: number;
  questId: number;
}

interface IQuestionState {
  question: IQuestion;
  questions: IQuestion[];
}
//const idUser = ParseJwt();

const initialState: IQuestionState = {
  questions: [],
  question: {
    id: nanoid(),
    description: '',
    image: '',
    userId: 0,
    questId: 1,
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
    removeQuestion: (state, action: PayloadAction<string>) => {
      //[...questions.filter((item) => item.id !== id)];
      state.questions = state.questions.filter((item) => item.id !== action.payload);
    },
    setDescription: (state, action) => {
      state.question.description = action.payload;
    },
    setImage: (state, action) => {
      state.question.description = action.payload;
    },
    setUserId: (state, action) => {
      state.question.userId = action.payload;
    },
  },
});

export default questionSlice.reducer;

export const { addQuestion, removeQuestion, setDescription, setImage, setUserId } =
  questionSlice.actions;
