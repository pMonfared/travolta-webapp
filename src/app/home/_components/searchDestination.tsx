import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchDestination() {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: 300,
      }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MapOutlinedIcon color="primary" />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="What is your destinations?"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon color="primary" />
      </IconButton>
    </Paper>
  );
}
