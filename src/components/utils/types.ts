import { Dispatch, SetStateAction } from 'react';
import { CardData } from '../../store/reducers/cardSlice';

export interface IQuestion {
  question: string;
  img: string;
  answers: string[];
  correctAnswer: string;
}

export interface IBlockQuiz {
  name: string;
  id: string;
  setBlock: Dispatch<SetStateAction<string[]>>;
  block: string[];
  num: number;
}

export interface ITitleQuiz {
  block: string[];
  setBlock: (arg0: string[]) => void;
}

export interface IItemBlockQuiz {
  name: string;
  blockQuestion: number[];
  setBlockQuestion: Dispatch<SetStateAction<number[]>>;
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
  card: CardData;
}

export interface IQuizCard {
  date: string;
  desription: string;
  questionsArr: never[];
  passed: boolean;
  passedOn: number;
  card: CardData;
}
