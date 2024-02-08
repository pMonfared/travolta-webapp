import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { GooglePlacesSearchBox } from '../googlePlacesSearchbox/googlePlacesSearchBox';
import { colors } from '@mui/material';
import { ISearchDestinationProps } from './interfaces/searchDestinationProps.interface';

export default function SearchDestination({
  onSelectDestination,
  defaultValue,
  required,
}: ISearchDestinationProps) {
  return (
    <Paper
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: 300,
        border: required === true ? 2 : 0,
        borderColor: colors.red[900],
      }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MapOutlinedIcon color="primary" />
      </IconButton>
      {/* <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="What is your destinations?"
          inputProps={{ 'aria-label': 'search google maps' }}
        /> */}

      <GooglePlacesSearchBox
        onSelectAddress={onSelectDestination}
        defaultValue={defaultValue}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon color="primary" />
      </IconButton>
    </Paper>
  );
}
