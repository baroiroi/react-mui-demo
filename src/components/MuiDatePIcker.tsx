import React from 'react'
import { Stack } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export const MuiDatePIcker = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Stack spacing={4} sx={{width: '250px'}}>
        <DatePicker label='Basic Date Picker'/>
    </Stack>
    </LocalizationProvider>
  )
}
