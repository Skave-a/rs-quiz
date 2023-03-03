import { Action } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { IAnswerCreate } from '../../store/api/AnswerApi';
import { IQuestionCerate } from '../../store/api/QuestionApi';
import { addQuiz } from '../../store/reducers/cardSlice';
import { IQuestion } from '../utils/types';

export const dataUser = (
  getQuestionsServer: IQuestionCerate[],
  isGetQuestions: boolean,
  getAnswersServer: IAnswerCreate[],
  dispatch: Dispatch<Action>
) => {
  if (isGetQuestions) {
    const theme = JSON.parse(localStorage.getItem('theme') as string);
    const questionsArr: IQuestion[] = [];
    for (let i = 0; i < getQuestionsServer.length; i++) {
      const answers: string[] = [];
      let correctAnswer = '';
      getAnswersServer.map((item) => {
        if (getQuestionsServer[i].id === item.questionId) {
          answers.push(item.title);
        }
        if (item.isCorrect) {
          correctAnswer = item.title;
        }
      });
      const objQuest = {
        question: getQuestionsServer[i].description,
        imgQuestion: getQuestionsServer[i].image,
        answers: answers,
        correctAnswer: correctAnswer,
      };
      questionsArr.push(objQuest);
    }
    const obj = {
      title: theme.title,
      img: theme.img,
      id: theme.id,
      description: theme.description,
      questionsArr: questionsArr,
    };
    dispatch(addQuiz(obj));
  }
};
