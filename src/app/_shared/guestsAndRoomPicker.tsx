import {
  Button,
  Box,
  ButtonGroup,
  IconButton,
  Menu,
  Paper,
  Stack,
  colors,
} from '@mui/material';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import { useState } from 'react';

interface IGuestsAndRoomPickerProps {
  onSelectGuestsAndRoom: (
    adultsCount: number,
    childrenCount: number,
    roomCount: number
  ) => void;
  required: boolean;
}

export default function GuestsAndRoomPicker({
  onSelectGuestsAndRoom,
  required,
}: IGuestsAndRoomPickerProps) {
  const [adultsCount, setAdultsCount] = useState<number>(1);
  const [childrenCount, setChildrenCount] = useState<number>(0);
  const [roomCount, setRoomCount] = useState<number>(1);
  const [onceTriggerDone, setOnceTriggerDone] = useState<boolean>(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    if (onceTriggerDone === false) {
      setAdultsCount(1);
      setChildrenCount(0);
      setRoomCount(1);
    }

    onSelectGuestsAndRoom(adultsCount, childrenCount, roomCount);

    setAnchorEl(null);
  };

  const handleDone = () => {
    setOnceTriggerDone(true);

    onSelectGuestsAndRoom(adultsCount, childrenCount, roomCount);

    setAnchorEl(null);
  };

  return (
    <Paper
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 170,
        border: required === true ? 2 : 0,
        borderColor: colors.red[900],
      }}
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
        <Stack style={{ padding: 10 }}>
          <Button onClick={handleDone} variant="outlined">
            Done
          </Button>
        </Stack>
      </Menu>
    </Paper>
  );
}
