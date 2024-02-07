'use client';

import SearchDestination from '../_shared/searchDestination';
import { Button, Stack, colors } from '@mui/material';

import DatePickerRange from '../../components/picker/datePickerRange';
import GuestsAndRoomPicker from '../_shared/guestsAndRoomPicker';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { IHotelsSearchQueryParams } from '../hotels/_api/interfaces/hotelsSearchQueryParams.interface';

export default function SearchForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm<IHotelsSearchQueryParams>({
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
    register('latitude', { required: 'Please choose your latitude' });
    register('longitude', { required: 'Please choose your longitude' });
    register('rooms', { required: true, min: 1, max: 5 });
    register('adults', { required: true, min: 1, max: 15 });
    register('children', { required: true, min: 0, max: 10 });
  }, [register]);

  // const onSubmit = (data: IHotelsSearchQueryParams) => fatchHotelsSearch(data);

  const onSubmit = (data: IHotelsSearchQueryParams) => {
    let url = new URL(`http://localhost:3000/hotels`);

    // Safely iterate and append parameters using Object.entries()
    for (const [key, value] of Object.entries(data)) {
      url.searchParams.append(key, value.toString()); // Ensure value is a string
    }

    router.push(`hotels?${url.searchParams.toString()}`);
  };

  return (
    <Stack
      onSubmit={handleSubmit(onSubmit)}
      component={'form'}
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
          setValue('latitude', latitude);
          setValue('longitude', longitude);
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
  );
}
