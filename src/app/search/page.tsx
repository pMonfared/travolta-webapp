import React, { useState, useEffect } from 'react';

import { getMovies } from './services';
import './style.css';

export default function Search() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getMovies();
        setHotels(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  console.log('hotels:', hotels);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>Movies</h3>
      <ul></ul>
    </div>
  );
}
