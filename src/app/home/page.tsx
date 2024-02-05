import './style.css';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>Hello World!</h3>
      <Button variant="contained">Hello world</Button>
    </main>
  );
}
