import { Suspense } from 'react';
import { HotelsList } from './_components/hotelsList';

export default function Hotels(props: any) {
  console.log('hotels props:', props);
  return (
    <section>
      <Suspense fallback={<p>Loading hotels...</p>}>
        <HotelsList />
      </Suspense>
    </section>
  );
}
