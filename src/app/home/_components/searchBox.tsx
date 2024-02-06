import { Libraries, useGoogleMapsScript } from 'use-google-maps-script';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';

import '@reach/combobox/styles.css';
import { ChangeEvent } from 'react';
import { InputBase } from '@mui/material';

interface ISearchBoxProps {
  onSelectAddress: (
    address: string,
    latitude: number | null,
    longitude: number | null
  ) => void;
  defaultValue: string;
}

const libraries: Libraries = ['places'];

export function SearchBox({ onSelectAddress, defaultValue }: ISearchBoxProps) {
  const { isLoaded, loadError } = useGoogleMapsScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY ?? '',
    libraries,
  });

  if (!isLoaded) return null;
  if (loadError)
    return (
      <div>
        <span>Error loading</span>
      </div>
    );

  return (
    <ReadySearchBox
      onSelectAddress={onSelectAddress}
      defaultValue={defaultValue}
    />
  );
}

function ReadySearchBox({ onSelectAddress, defaultValue }: ISearchBoxProps) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 300, defaultValue });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    if (e.target.value === '') {
      onSelectAddress('', null, null);
    }
  };
  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      // results[0] is the best match lat and lng (location accuracy)
      const { lat, lng } = getLatLng(results[0]);
      onSelectAddress(address, lat, lng);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        id="search"
        value={value}
        onChange={handleChange}
        disabled={!ready}
        placeholder="What is your destinations?"
        className="w-full p-2"
        autoComplete="none"
        type="search"
      />

      {/* <InputBase
        id="search"
        value={value}
        onChange={handleChange}
        disabled={!ready}
        sx={{ ml: 1, flex: 1 }}
        placeholder="What is your destinations?"
        inputProps={{ 'aria-label': 'search google maps' }}
      /> */}
      <ComboboxPopover>
        <ComboboxList>
          {status === 'OK' &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}
