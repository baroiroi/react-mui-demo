import { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';

export const MuiLoadingButton = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Stack spacing={2} direction='row'>
        <LoadingButton variant='outlined'centerRipple>Submit</LoadingButton>
        <LoadingButton variant='outlined' loading>Submit</LoadingButton>
        <LoadingButton variant='outlined' loadingIndicator='loading...' centerRipple>Fetch Data</LoadingButton>
        <LoadingButton variant='outlined' loadingIndicator='loading...' loading>Fetch Data</LoadingButton>
        <LoadingButton variant='outlined'
        loadingIndicator='loading'
        centerRipple
        >Fetch Data</LoadingButton>
    </Stack>
  )
}

