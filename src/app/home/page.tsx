import Introduction from './_components/introduction';
import { Stack } from '@mui/material';
import './style.css';
import SearchForm from '../_shared/searchForm/searchForm';

export default function Home() {
  return (
    <Stack
      direction="column"
      height={500}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Introduction />
      <SearchForm />
    </Stack>
  );
}
