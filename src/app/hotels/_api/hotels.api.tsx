import { IHotelsSearchQueryParams } from './interfaces/hotelsSearchQueryParams.interface';

export const fatchHotelsSearch = async (data: IHotelsSearchQueryParams) => {
  let url = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/hotels`);

  // Safely iterate and append parameters using Object.entries()
  for (const [key, value] of Object.entries(data)) {
    url.searchParams.append(key, value.toString()); // Ensure value is a string
  }

  const response = await fetch(url);
  const result = await response.json();
  console.log('result', result);
};
