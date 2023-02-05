import { IQuestion } from './types';

export const SERVICE_MESSAGES = {
  quiz: 'Quiz',
  published: 'published',
  createNew: 'CREATE NEW',
  myQuizzes: 'My quizzes',
  create: 'Create',
  addImage: 'Add image',
  title: 'Title',
  writeSmth: 'Write something ...',
  writeQuest: 'Write a question ...',
  description: 'Description (optional)',
  addQBlock: 'Add a question block',
  answerContent: 'Answer content',
  addAnswer: 'Add an answer',
  answer: 'Answer',
  configure: 'Configure results',
  addLink: 'Paste image link',
};

export const LINK_TO_THE_COURSE = 'https://rs.school/js/';
export const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
export const pages = ['Questions list', 'Create new question', 'Some disabled button'];

export const questionDefaultHistory: IQuestion[] = [
  { question: `How many countries border Belarus?`, img: '', answers: ['3', '4', '5', '6'] },
  {
    question: `What is the approximate population of Belarus?`,
    img: '',
    answers: ['10 million', '15 million', '20 million', '25 million'],
  },
];
