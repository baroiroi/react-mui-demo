import { Stack, Alert, AlertTitle, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
        <Alert severity='error'>
            <AlertTitle>Error</AlertTitle>
            This is an Error Alert</Alert>
        <Alert severity='warning'>
        <AlertTitle>Warning</AlertTitle>
        This is a Warning Alert</Alert>
        <Alert severity='info'>
        <AlertTitle>Info</AlertTitle>
        This is an Info Alert</Alert>
        <Alert severity='success'>
        <AlertTitle>Success</AlertTitle>
        This is a Success Alert</Alert>

        <Alert severity='error' variant='outlined'>
        <AlertTitle>Error</AlertTitle>
        This is an Error Alert</Alert>
        <Alert severity='warning' variant='outlined'>
        <AlertTitle>Warning</AlertTitle>
        This is a Warning Alert</Alert>
        <Alert severity='info' variant='outlined'>
        <AlertTitle>Info</AlertTitle>
        This is an Info Alert</Alert>
        <Alert severity='success' variant='outlined'>
        <AlertTitle>Success</AlertTitle>
        This is a Success Alert</Alert>

        <Alert severity='error' variant='filled' onClose={() => alert('Closed Alert')}>
        <AlertTitle>Error</AlertTitle>
        This is an Error Alert</Alert>
        <Alert severity='warning' variant='filled'>
        <AlertTitle>Warning</AlertTitle>
        This is a Warning Alert</Alert>
        <Alert severity='info' variant='filled'>
        <AlertTitle>Info</AlertTitle>
        This is an Info Alert</Alert>
        <Alert severity='success' variant='filled'
            icon = {<CheckIcon fontSize='inherit' />}
            action={
            <Button color='inherit' size='small'>
                Undo
            </Button>
        }><AlertTitle>Success</AlertTitle>
        This is a Success Alert</Alert>
    </Stack>
  )
}
