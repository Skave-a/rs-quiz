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
    // console.log('getQuestionsServer', getQuestionsServer);
    // console.log('getAnswersServer', getAnswersServer);
    const theme = JSON.parse(localStorage.getItem('theme') as string);
    // console.log('theme', theme);
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
    // console.log('questionsArr', questionsArr);
    dispatch(addQuiz(obj));
  }
};

// {
//   title: 'Musical quiz',
//   img: 'https://sadpanda.cn/wordpress/wp-content/uploads/2016/04/62c72e3218c9921f1ac0f28aba96f6c9wood-background-music-beat-wallchan-665381_1015x571.jpg',
//   id: 5,
//   description: `Music is the soothing balm to a troubled soul. How well versed are you about music?
//   Are you a music fanatic? Take this quiz to test your knowledge about the intricacies of music.
//   It takes more than just a pretty voice to make a memorable melody! Prove yourself to be a musical genius by attempting
//   all the questions.`,
//   questionsArr: questionDefaultMus,
// },

// {
//   question: `How loud or soft the sound is, is determined by the ...`,
//   imgQuestion:
//     'https://images.unsplash.com/photo-1617994452722-4145e196248b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//   answers: ['Rythm', 'Tempo', 'Beat', 'Dynamics'],
//   correctAnswer: 'Dynamics',
// },
