import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
        <CircularProgress />
    </Box>
  );
}

export default Loader;