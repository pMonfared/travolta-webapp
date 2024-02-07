export interface IHotelsSearchQueryParams {
  checkIn: Date;
  checkOut: Date;
  destination: string;
  latitude: number | null;
  longitude: number | null;
  rooms: number;
  adults: number;
  children: number;
}
