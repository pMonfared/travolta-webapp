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
import { Libraries, useLoadScript } from '@react-google-maps/api';
import { IGooglePlacesSearchBoxProps } from './interfaces/googlePlacesSearchBoxProps.interfaces';

const libraries: Libraries = ['places'];

export function GooglePlacesSearchBox({
  onSelectAddress,
  defaultValue,
}: IGooglePlacesSearchBoxProps) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) return <div className="w-full p-2"></div>;
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

function ReadySearchBox({
  onSelectAddress,
  defaultValue,
}: IGooglePlacesSearchBoxProps) {
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
        style={{ border: 0 }}
      />

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
