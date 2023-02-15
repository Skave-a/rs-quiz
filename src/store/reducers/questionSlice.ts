import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
//import { ParseJwt } from '../../components/utils/helpers';

export type Roles = 'admin' | 'user';

export interface IQuestion {
  id: string;
  image: string;
  description: string;
  userId: number;
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
  },
};

export const questionSlice = createSlice({
  initialState,
  name: 'questionSlice',
  reducers: {
    resetQuestState: () => initialState,
    addQuestion: (state, action: PayloadAction<IQuestion>) => {
      //console.log(`payload +>>>>>>>>>>>>`, action.payload);
      state.questions.push(action.payload);
      /* if (
        state.questions.length !== 0 &&
        !state.questions.some((item) => item.id === action.payload.id)
      ) {
        state.questions.push(action.payload);
      } */
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
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
  },
});

export default questionSlice.reducer;

export const { addQuestion, removeQuestion, setDescription, setImage, setUserId, setQuestions } =
  questionSlice.actions;
