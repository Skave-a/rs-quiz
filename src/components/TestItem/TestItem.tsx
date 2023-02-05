import { Box } from '@mui/material';
import { IQuestion } from '../utils/types';

interface ItestItem {
  questions: IQuestion[];
}

export const TestItem = (props: ItestItem) => {
  const { questions } = props;
  console.log(questions);
  return <Box>TestItem</Box>;
};
