import { Dispatch, SetStateAction } from 'react';
import { Quiz } from '../../store/reducers/cardSlice';

export interface IQuestion {
  question: string;
  img: string;
  answers: string[];
  correctAnswer: string;
}

export interface IBlockQuiz {
  name: string;
  id: string;
  setQuestions: Dispatch<SetStateAction<string[]>>;
  questions: string[];
  num: number;
}

/* export interface ITitleQuiz {
  questions: string[];
  setQuestions: (arg0: string[]) => void;
} */

export interface IItemBlockQuiz {
  name: string;
  answers: number[];
  setAnswers: Dispatch<SetStateAction<number[]>>;
  id: number;
}

export type LoginInput = {
  email: string;
  password: string;
};
export interface IBtnAddBlock {
  handleClick: () => void;
}

export interface ICardMenu {
  card: Quiz;
}

export interface IQuizCard {
  date: string;
  desription: string;
  questionsArr: never[];
  passed: boolean;
  passedOn: number;
  card: Quiz;
}
