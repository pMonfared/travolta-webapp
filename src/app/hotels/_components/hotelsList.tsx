import SearchForm from '@/app/_shared/searchForm';

export function HotelsList() {
  return (
    <div>
      <SearchForm />
      <ul>
        <li>Name: Beauty hotel</li>
        <li>Rate: 4.6/5 (2751 reviews)</li>
      </ul>
    </div>
  );
}
