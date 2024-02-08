import { Suspense } from 'react';
import { HotelsList } from './_components/hotelsList/hotelsList';
import { fatchHotelsSearch } from './_api/hotels/hotels.api';
import { Stack } from '@mui/material';
import SearchForm from '../_shared/searchForm/searchForm';
import { IHotelsSearchQueryParams } from './_api/hotels/interfaces/hotelsSearchQueryParams.interface';

interface HotelsProps {
  searchParams: IHotelsSearchQueryParams;
}

export default async function Hotels(props: HotelsProps) {
  const { searchParams } = props;
  const hotels = await fatchHotelsSearch(searchParams);
  return (
    <>
      <Stack direction="column" justifyContent={'center'} alignItems={'center'}>
        <SearchForm />
      </Stack>
      <Stack direction="column" alignItems={'center'}>
        <Suspense fallback={<p>Loading hotels...</p>}>
          <HotelsList hotels={hotels} />
        </Suspense>
      </Stack>
    </>
  );
}
