import { Link, Breadcrumbs, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { useTranslation } from 'react-i18next';

interface IBreadcrumbsTest {
  title: string;
}

export const BreadcrumbsTest = (props: IBreadcrumbsTest) => {
  const { title } = props;
  const { t } = useTranslation();
  return (
    <div role="presentation" onClick={(event) => event.preventDefault()}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link component={RouterLink} to="/" underline="none">
          <HomeIcon sx={{ mr: 0.5, mb: '-2px' }} fontSize="inherit" />
          {t('main')}
        </Link>
        <Typography color="text.primary">{title}</Typography>
      </Breadcrumbs>
    </div>
  );
};
