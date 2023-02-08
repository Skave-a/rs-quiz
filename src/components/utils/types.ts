import { Dispatch, SetStateAction } from 'react';

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
