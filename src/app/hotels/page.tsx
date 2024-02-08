'use client';
import { useEffect, useState } from 'react';
import { HotelsList } from './_components/hotelsList/hotelsList';
import { fatchHotelsSearch } from './_api/hotels/hotels.api';
import { Backdrop, CircularProgress, Container, Stack } from '@mui/material';
import SearchForm from '../_shared/searchForm/searchForm';
import { IHotelsSearchQueryParams } from './_api/hotels/interfaces/hotelsSearchQueryParams.interface';

interface HotelsProps {
  searchParams: IHotelsSearchQueryParams;
}

export default function Hotels(props: HotelsProps) {
  const { searchParams } = props;

  const [hotels, setHotels] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fatchHotelsSearch(searchParams).then((hotelResponse) => {
      setHotels(hotelResponse);
      setIsLoading(false);
    });
  }, [searchParams]);

  return (
    <>
      <Stack direction="column" justifyContent={'center'} alignItems={'center'}>
        <SearchForm />
      </Stack>
      <Stack direction="column" alignItems={'center'}>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />

          <span style={{ padding: 10 }}>
            Please wait. We are looking to find best offers in your destination
          </span>
        </Backdrop>
        <HotelsList hotels={hotels} />
      </Stack>
    </>
  );
}
