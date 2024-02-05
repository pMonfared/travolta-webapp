import {
  Button,
  Box,
  ButtonGroup,
  IconButton,
  Menu,
  Paper,
  Stack,
} from '@mui/material';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import { useState } from 'react';
export default function PersonAndRoomPicker() {
  const [adultsCount, setAdultsCount] = useState<number>(1);
  const [childrenCount, setChildrenCount] = useState<number>(0);
  const [roomCount, setRoomCount] = useState<number>(1);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 170 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <GroupOutlinedIcon color="primary" />
      </IconButton>
      <Box sx={{ ml: 1, flex: 1 }}>
        <b>{adultsCount} Adults </b>

        {/* <span>{childrenCount} childern . </span>*/}

        <br />
        <span>{roomCount} room</span>
      </Box>

      {/* <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="What is your destinations?"
        inputProps={{ 'aria-label': 'search google maps' }}
      /> */}
      <IconButton
        type="button"
        sx={{ p: '10px' }}
        aria-label="search"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <KeyboardArrowDownOutlinedIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          style={{ paddingInline: 10 }}
        >
          <span>Adults</span>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button
              onClick={() =>
                setAdultsCount(adultsCount > 1 ? adultsCount - 1 : adultsCount)
              }
            >
              -
            </Button>
            <Button>{adultsCount}</Button>
            <Button onClick={() => setAdultsCount(adultsCount + 1)}>+</Button>
          </ButtonGroup>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          style={{ padding: 10 }}
        >
          <span>Childern</span>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button
              onClick={() =>
                setChildrenCount(
                  childrenCount > 0 ? childrenCount - 1 : childrenCount
                )
              }
            >
              -
            </Button>
            <Button>{childrenCount}</Button>
            <Button onClick={() => setChildrenCount(childrenCount + 1)}>
              +
            </Button>
          </ButtonGroup>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          style={{ paddingInline: 10 }}
        >
          <span>Room</span>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button
              onClick={() =>
                setRoomCount(roomCount > 1 ? roomCount - 1 : roomCount)
              }
            >
              -
            </Button>
            <Button>{roomCount}</Button>
            <Button onClick={() => setRoomCount(roomCount + 1)}>+</Button>
          </ButtonGroup>
        </Stack>
      </Menu>
    </Paper>
  );
}
