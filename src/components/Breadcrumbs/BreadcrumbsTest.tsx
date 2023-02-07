import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

interface IBreadcrumbsTest {
  title: string;
}

export const BreadcrumbsTest = (props: IBreadcrumbsTest) => {
  const { title } = props;
  return (
    <div role="presentation" onClick={(event) => event.preventDefault()}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link component={RouterLink} to="/" underline="none">
          Main
        </Link>
        <Typography color="text.primary">{title}</Typography>
      </Breadcrumbs>
    </div>
  );
};
