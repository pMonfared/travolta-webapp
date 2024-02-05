import { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import dayjs from 'dayjs';
import { IconButton, InputBase, Paper, Stack } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import 'react-datepicker/dist/react-datepicker.css';

export default function DatePickerRange() {
  const datePickerRef: any = useRef(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates: object) => {
    const [start, end]: any = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        style={{ paddingInline: 10 }}
        onClick={() => datePickerRef?.current?.setOpen(true)}
      >
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 110,
          }}
        >
          <IconButton sx={{ p: '10px' }} aria-label="menu">
            <CalendarTodayOutlinedIcon color="primary" />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="In"
            inputProps={{ 'aria-label': 'Check-In' }}
            value={dayjs(startDate).format('MMM D')}
          />
        </Paper>
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 110,
          }}
        >
          <IconButton sx={{ p: '10px' }} aria-label="menu">
            <CalendarTodayOutlinedIcon color="primary" />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Out"
            inputProps={{ 'aria-label': 'Check-Out' }}
            value={endDate ? dayjs(endDate).format('MMM D') : ''}
          />
        </Paper>
      </Stack>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        ref={datePickerRef}
      />
      {/* <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date: Date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      /> */}
    </>
  );
}
