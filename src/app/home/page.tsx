'use client';
import Introduction from './_components/introduction';
import SearchDestination from './_components/searchDestination';
import { Button, Stack, colors } from '@mui/material';
import './style.css';

import DatePickerRange from './_components/datePickerRange';
import GuestsAndRoomPicker from './_components/guestsAndRoomPicker';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, useState } from 'react';

interface IFormData {
  checkIn: Date;
  checkOut: Date;
  destination: string;
  rooms: number;
  adults: number;
  children: number;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
      adults: 1,
      children: 0,
      rooms: 1,
      checkIn: new Date(),
    },
  });

  useEffect(() => {
    register('checkIn', { required: 'Please choose check in date' });
    register('checkOut', { required: 'Please choose check out date' });
    register('destination', { required: 'Please choose your destination' });
    register('rooms', { required: true, min: 1, max: 5 });
    register('adults', { required: true, min: 1, max: 15 });
    register('children', { required: true, min: 0, max: 10 });
  }, [register]);

  const handleSearch = async (data: IFormData) => {
    let url = new URL('http://localhost:5000/hotels');

    // Safely iterate and append parameters using Object.entries()
    for (const [key, value] of Object.entries(data)) {
      url.searchParams.append(key, value.toString()); // Ensure value is a string
    }

    const response = await fetch(url);
    const result = await response.json();
    console.log('result', result);
  };

  const onSubmit = (data: IFormData) => handleSearch(data);

  return (
    <Stack
      component={'form'}
      direction="column"
      height={500}
      justifyContent={'center'}
      alignItems={'center'}
      onSubmit={handleSubmit(onSubmit)}
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
        <SearchDestination
          required={errors.destination ? true : false}
          onSelectDestination={(address, latitude, longitude) => {
            setValue('destination', address);
          }}
          defaultValue=""
        />
        <DatePickerRange
          requiredStartDate={errors.checkIn ? true : false}
          requiredEndDate={errors.checkOut ? true : false}
          onSelectDateRange={(startDate, endDate) => {
            setValue('checkIn', startDate);
            if (endDate) setValue('checkOut', endDate);
          }}
        />
        <GuestsAndRoomPicker
          required={
            errors.adults || errors.children || errors.rooms ? true : false
          }
          onSelectGuestsAndRoom={(adultsCount, childrenCount, roomCount) => {
            setValue('adults', adultsCount);
            setValue('children', childrenCount);
            setValue('rooms', roomCount);
          }}
        />
        <Button
          type="submit"
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
