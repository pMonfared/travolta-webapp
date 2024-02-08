import HotelItem from '../hotelItem/hotelItem';
import { Stack } from '@mui/material';
import { HotelListProps } from './interfaces/hotelListProps.interface';

export function HotelsList({ hotels }: HotelListProps) {
  return (
    <>
      <Stack direction="column" flexWrap={'wrap'}>
        {hotels &&
          hotels?.map((p, i) => <HotelItem hotel={p} key={`hotel-i-${i}`} />)}
      </Stack>
    </>
  );
}
