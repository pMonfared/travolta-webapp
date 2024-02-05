'use client';
import Introduction from './_components/introduction';
import SearchDestination from './_components/searchDestination';
import { Button, Stack, colors } from '@mui/material';
import './style.css';

import DatePickerRange from './_components/dateRangePicker';
import PersonAndRoomPicker from './_components/personAndRoomPicker';

export default function Home() {
  return (
    <Stack
      direction="column"
      height={500}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Introduction />
      <Stack
        direction="row"
        border={1}
        justifyContent="space-between"
        paddingInline={2}
        paddingBlock={1}
        borderRadius={2}
        borderColor={colors.grey[200]}
        style={{ backgroundColor: colors.grey[50] }}
      >
        <SearchDestination />
        <DatePickerRange />
        <PersonAndRoomPicker />
        <Button
          variant="contained"
          size="large"
          style={{ marginLeft: 10, minWidth: 180 }}
        >
          Search
        </Button>
      </Stack>
    </Stack>
  );
}
