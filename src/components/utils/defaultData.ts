import { IQuestion } from './types';

export const questionDefaultHistory: IQuestion[] = [
  {
    question: `How many countries border Belarus?`,
    imgQuestion:
      'https://images.unsplash.com/photo-1600633349333-eebb43d01e23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    answers: ['3', '4', '5', '6'],
    correctAnswer: '5',
  },
  {
    question: `What is the approximate population of Belarus?`,
    imgQuestion:
      'https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    answers: ['10 million', '15 million', '20 million', '25 million'],
    correctAnswer: '10 million',
  },
  {
    question: `Belarus was sometimes called by which of these names?`,
    imgQuestion:
      'https://images.unsplash.com/photo-1559387188-d5cebb21de5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    answers: ['Livonia', 'Thuringia', 'Tasmania', 'Ruthenia'],
    correctAnswer: 'Ruthenia',
  },
  {
    question: `For the manufacturing of what product did Belarus become famous?`,
    imgQuestion: '',
    answers: ['Automobiles', 'Tractors', 'Steel', 'Televisions'],
    correctAnswer: 'Tractors',
  },
  {
    question: `What are the colors of the flag of Belarus?`,
    imgQuestion: '',
    answers: ['Red and green', 'Red, blue, white', 'Red and white', 'Blue and yellow'],
    correctAnswer: 'Red and green',
  },
];

export const questionDefaultArt: IQuestion[] = [
  {
    question: `Is this Picture the actual version or a makeover version?`,
    imgQuestion: 'https://www.proprofs.com/quiz-school/upload/yuiupload/1220564831.jpg',
    answers: ['Makeover', 'Actual', 'Both', 'Neither'],
    correctAnswer: 'Makeover',
  },
  {
    question: `Why is art important in our lives?`,
    imgQuestion: '',
    answers: [
      `Art isn't important`,
      `Art is important Because it's cool.`,
      'Art is important because it lets us express ourselves.',
      'Art is important because it brings in cash.',
    ],
    correctAnswer: 'Art is important because it lets us express ourselves.',
  },
  {
    question: `What is this picture called?`,
    imgQuestion: 'https://www.proprofs.com/quiz-school/upload/yuiupload/1033661298.jpg',
    answers: ['Blue Boy', 'Boy in Blue', 'Dutch Boy', 'Blue Pride'],
    correctAnswer: 'Blue Boy',
  },
  {
    question: `Who made this Picture?`,
    imgQuestion: 'https://www.proprofs.com/quiz-school/upload/yuiupload/810667367.jpg',
    answers: ['Claude Monet', 'Leonardo da Vinci', 'Edgar Degas', 'Paul Cezanne'],
    correctAnswer: 'Leonardo da Vinci',
  },
  {
    question: `What's Expressionism?`,
    imgQuestion: '',
    answers: [
      'When people express themselves in there art.',
      'Expressionism meaning that the artist wants to express a feeling more than a realistic rendering.',
      'Both',
      'Neither',
    ],
    correctAnswer:
      'Expressionism meaning that the artist wants to express a feeling more than a realistic rendering.',
  },
];

export const questionDefaultProg: IQuestion[] = [
  {
    question: `What is not a principle of object-oriented programming?`,
    imgQuestion: '',
    answers: ['Abstraction', 'Encapsulation', 'Injection', 'Inheritance'],
    correctAnswer: 'Injection',
  },
  {
    question: `How many data types are there in JavaScript?`,
    imgQuestion:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    answers: ['3', '8', '5', '6'],
    correctAnswer: '8',
  },
  {
    question: `Who created the Javascript programming language?`,
    imgQuestion:
      'https://cdn.facesofopensource.com/wp-content/uploads/2017/07/23193713/brendaneich25607.web_.jpg',
    answers: ['Yukihiro Matsumoto', 'James Gosling', 'Brendan Eich', 'Bjarne Stroustrup'],
    correctAnswer: 'Brendan Eich',
  },
  {
    question: `What is DOM?`,
    imgQuestion: '',
    answers: [
      'Document Object Model',
      'Document Object Markup',
      'Document Operated Model',
      'Dissociated Object Model',
    ],
    correctAnswer: 'Document Object Model',
  },
  {
    question: `What is a Callback Function?`,
    imgQuestion: '',
    answers: [
      'Is a function whose call has been postponed for the future',
      'Function without <i>return</i>',
      'Function assigned to a variable',
      'Is a combination of the function and the lexical environment in which the function has been defined',
    ],
    correctAnswer: 'Is a function whose call has been postponed for the future',
  },
];

export const questionDefaultLit: IQuestion[] = [
  {
    question: `What is the name of the heroine in Jane Austen's popular novel "Pride and Prejudice"?`,
    imgQuestion:
      'https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    answers: ['Caroline Bingley', 'Elizabeth Bennet', 'Mrs. Bennet', 'Lady Catherine'],
    correctAnswer: 'Elizabeth Bennet',
  },
  {
    question: `Who wrote the best-selling "Vampire Chronicles"?`,
    imgQuestion:
      'https://images.unsplash.com/photo-1505629557752-b84ec6489bef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    answers: ['Mercedes Lackey', 'Anne McAffery', 'Anne Rice', 'Emily Bronte'],
    correctAnswer: 'Anne Rice',
  },
  {
    question: `In Jane Austen's novel "Pride and Prejudice", what is the residence of the Bennet family called?`,
    imgQuestion: '',
    answers: ['Netherfield', 'Lucas Lodge', 'Oakham Mount', 'Longbourn'],
    correctAnswer: 'Longbourn',
  },
  {
    question: `In which place in England did Jane Austen die?`,
    imgQuestion:
      'https://images.unsplash.com/photo-1587978191773-ae3cd9e26501?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    answers: ['Portsmouth', 'Winchester', 'Southampton', 'Chawton'],
    correctAnswer: 'Winchester',
  },
  {
    question: `Which seaside town plays a significant role in Jane Austen's novel "Persuasion"?`,
    imgQuestion: '',
    answers: ['Kent', 'Bath', 'Lyme', 'Steventon'],
    correctAnswer: 'Lyme',
  },
];

export const questionDefaultMus: IQuestion[] = [
  {
    question: `How loud or soft the sound is, is determined by the ...`,
    imgQuestion:
      'https://images.unsplash.com/photo-1617994452722-4145e196248b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    answers: ['Rythm', 'Tempo', 'Beat', 'Dynamics'],
    correctAnswer: 'Dynamics',
  },
  {
    question: `The feel of the beat is displayed in...`,
    imgQuestion: '',
    answers: ['Chord', 'Note', 'Tempo', 'Meter'],
    correctAnswer: 'Meter',
  },
  {
    question: `The speed of a beat is called the...`,
    imgQuestion:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    answers: ['Music', 'Instrumentation', 'Tempo', 'Form'],
    correctAnswer: 'Tempo',
  },
  {
    question: `The "background" sounds of a song are called...`,
    imgQuestion: '',
    answers: ['Harmony', 'Instrumentation', 'Dynamics', 'Tempo'],
    correctAnswer: 'Harmony',
  },
  {
    question: `Three or more stacked notes are called...`,
    imgQuestion: '',
    answers: ['Intro', 'Music', 'Melody', 'Chord'],
    correctAnswer: 'Chord',
  },
];
