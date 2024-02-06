import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { SearchBox } from './searchBox';
import { Box, Card, colors } from '@mui/material';

interface ISearchDestinationProps {
  onSelectDestination: (
    address: string,
    latitude: number | null,
    longitude: number | null
  ) => void;
  required: boolean;
  defaultValue: string;
}

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

      <SearchBox
        onSelectAddress={onSelectDestination}
        defaultValue={defaultValue}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon color="primary" />
      </IconButton>
    </Paper>
  );
}
