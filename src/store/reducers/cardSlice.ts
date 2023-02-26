import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  questionDefaultArt,
  questionDefaultHistory,
  questionDefaultLit,
  questionDefaultMus,
  questionDefaultProg,
} from '../../components/utils/defaultData';
import { IQuestion } from '../../components/utils/types';

export type Quiz = {
  title: string;
  img: string;
  id?: number;
  description: string;
  questionsArr: IQuestion[];
  answers?: [];
};

export type QuizList = {
  list: Quiz[];
};

export const initialState: QuizList = {
  list: [
    {
      title: 'History quiz',
      img: 'https://i.ytimg.com/vi/s6yKBM3meeE/maxresdefault.jpg',
      id: 1,
      description: `Belarus is mostly made up of forests, rivers and lakes and is mostly referred to as the rib of Europe. 
      The country has a very interesting history and people. Take up this quiz to test your knowledge of Belarus and its people.`,
      questionsArr: questionDefaultHistory,
    },
    {
      title: 'Programming quiz',
      img: 'https://obrmos.ru/kur/kur_dr/comp/img/pr.jpg',
      id: 2,
      description: `It's a nice way to see how much you know, or don't know, about JavaScript.`,
      questionsArr: questionDefaultProg,
    },
    {
      title: 'Art quiz',
      img: 'https://artinvestment.ru/lolo/yan/yan-main.jpg',
      id: 3,
      description: `See What you know about art!`,
      questionsArr: questionDefaultArt,
    },
    {
      title: 'Literature quiz',
      img: 'https://static.mk.ru/upload/entities/2019/04/11/23/articles/detailPicture/ec/ac/6d/01/306db442fae94a1476ddba3306b1f42f.jpg',
      id: 4,
      description: `Take this quiz and learn more about Adult Easy - Literature`,
      questionsArr: questionDefaultLit,
    },
    {
      title: 'Musical quiz',
      img: 'https://sadpanda.cn/wordpress/wp-content/uploads/2016/04/62c72e3218c9921f1ac0f28aba96f6c9wood-background-music-beat-wallchan-665381_1015x571.jpg',
      id: 5,
      description: `Music is the soothing balm to a troubled soul. How well versed are you about music? 
      Are you a music fanatic? Take this quiz to test your knowledge about the intricacies of music. 
      It takes more than just a pretty voice to make a memorable melody! Prove yourself to be a musical genius by attempting 
      all the questions.`,
      questionsArr: questionDefaultMus,
    },
  ],
};
export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addQuiz: (state, action: PayloadAction<Quiz>) => {
      if (action.payload.img === '') {
        action.payload.img =
          'https://cdn.riddle.com/website/riddle/2019/placeholders/placeholder-quiz.png';
      }
      state.list.push({
        title: action.payload.title ? action.payload.title : 'Quiz',
        img: action.payload.img,
        description: action.payload.description,
        questionsArr: action.payload.questionsArr,
        id: action.payload.id,
      });
    },
    removeQuiz: (state, action: PayloadAction<Quiz>) => {
      const cardId = action.payload.id;
      state.list = state.list.filter((el) => el.id !== Number(cardId));
    },
  },
});

export const { addQuiz, removeQuiz } = cardSlice.actions;

export default cardSlice.reducer;
