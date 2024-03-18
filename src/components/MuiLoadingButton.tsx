import { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';

export const MuiLoadingButton = () => {
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
  }, 13000);
};

const handleSave = (event: React.MouseEvent<HTMLElement>) => {
  setSaving(true);

  setTimeout(() => {
    setSaving(false);
}, 13000);
};


  return (
    <Stack spacing={2} direction='row'>
        <LoadingButton variant='outlined'centerRipple>Submit</LoadingButton>
        <LoadingButton variant='outlined' loading>Submit</LoadingButton>
        <LoadingButton variant='outlined' loadingIndicator='loading...' centerRipple>Fetch Data</LoadingButton>
        <LoadingButton variant='outlined' loadingIndicator='loading...' loading>Fetch Data</LoadingButton>
        <LoadingButton variant='outlined'
        centerRipple
        onClick={handleClick}>
          {
            loading ? 'Loading...' : 'Fetch Data'
          }
        </LoadingButton>
        <LoadingButton variant='outlined' loadingIndicator='loading...' onClick={handleSave} loadingPosition='start'>
          {
            saving ? 'Saving...' : 'Save'
          }
        </LoadingButton>
    </Stack>
  )
}