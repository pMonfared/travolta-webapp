export interface HotelItemProps {
  hotel: {
    name: string;
    distance: {
      value: number;
      unit: string;
    };
    country: string;
    city: string;
    offers: [];
    price: boolean;
  };
}
