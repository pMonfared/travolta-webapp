import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { HotelItemProps } from './interfaces/hotelItemProps.interface';

export default function HotelItem({ hotel }: HotelItemProps) {
  return (
    <Card sx={{ marginTop: 3 }}>
      <Stack direction="row" alignItems={'flex-start'}>
        <CardMedia
          style={{ flex: 4 }}
          component="img"
          alt="green iguana"
          height="240"
          image={`/hotels/hotel-photo.jpg`}
        />
        <div style={{ flex: 6 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {hotel.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {hotel.distance.value} {hotel.distance.unit}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color={hotel.availablity ? 'primary' : 'success'}
              // color={hotel.availablity ? colors.green : colors.grey[600]}
            >
              {hotel.availablity ? `Available` : `Unavailable`}{' '}
            </Button>
          </CardActions>
        </div>
      </Stack>
    </Card>
  );
}
