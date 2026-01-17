import React from 'react';
import { useColorScheme } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import DarkMode from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode';

const ModeToggle = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <IconButton size="sm" variant="outlined" color="neutral" disabled />;
  }

  return (
    <IconButton
      variant="outlined"
      color="neutral"
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
    >
      {mode === 'light' ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};

export default ModeToggle;