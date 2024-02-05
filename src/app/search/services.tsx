const url =
  'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=-2092174&search_type=CITY&arrival_date=2024-02-03&departure_date=2024-02-09&adults=1&children_age=0%2C17&room_qty=1&page_number=1&languagecode=en-us&currency_code=AED';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8a9c84b072msh0e0217d1b92f049p105a93jsn53ca283bdc9d',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
  },
};

async function getMovies() {
  const response = await fetch(url, options);
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  return response.json();
}

export { getMovies };
