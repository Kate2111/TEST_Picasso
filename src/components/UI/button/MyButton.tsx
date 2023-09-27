
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ReactNode } from 'react';

interface MyButtonProps {
    children: ReactNode,
    clickHandler: () => void
}
const MyButton:React.FC<MyButtonProps> = ({children, clickHandler}) =>  {
  return (
    <Stack spacing={2} direction="row" onClick={clickHandler}>
      <Button variant="outlined">{children}</Button>
    </Stack>
  );
}

export default MyButton;