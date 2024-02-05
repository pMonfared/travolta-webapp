import { Stack } from '@mui/material';

export default function Introduction() {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      style={{ padding: 10, marginBottom: 30 }}
    >
      <h1>We love to travel as much as you do</h1>
      <p style={{ textAlign: 'center' }}>
        We <b>CREATE</b> unbeatable deals you will not get anywhere else - so
        you can <br />
        save your money for an unforgettable travel exprience
      </p>
    </Stack>
  );
}
