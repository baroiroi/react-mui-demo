import { Stack, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const MuiTextField = () => {

    const [value, setValue] = useState('');
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <TextField label='Name' variant='outlined' />
            <TextField label='Name' variant='filled' />
            <TextField label='Name' variant='standard' />
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label='Name' variant='outlined' color='secondary' size='small' />
            <TextField 
            label='Form Input' 
            variant='outlined' 
            color='secondary' 
            size='small' 
            required 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            error={!value}
            helperText={!value ? 'Required' : 'Do not share your Password'}/>
            <TextField label='Name' variant='outlined' color='secondary' size='small' helperText='Do not show your password to anyone' />
            <TextField label='Password' variant='outlined' color='secondary' size='small' type='password' disabled />
            <TextField label='Read Only' InputProps={ {readOnly: true} }/>
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label='Amount' InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
            }}/>
            <TextField label='Weight' InputProps={{
             endAdornment: <InputAdornment position='end'>kg</InputAdornment>
             }}/>
             <TextField label='password' InputProps={{endAdornment: <InputAdornment position='end'><VisibilityIcon /></InputAdornment>}}/>
        </Stack>
    </Stack>
  )
}

