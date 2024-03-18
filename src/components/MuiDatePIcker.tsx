import React from 'react'
import { Stack } from '@mui/material';

import { DatePicker} from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState } from 'react';

export const MuiDatePIcker = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<Date | null>(null);
    const [selectedDateTime,setSelectedDateTime] = useState<Date |null>(null)
    console.log({ selectedDateTime });

  return (
    
    <Stack spacing={4} sx={{width: '250px'}}>
        <DatePicker label='Basic Date Picker'
                    value={selectedDate}
                    onChange={(newValue) => {
                        setSelectedDate(newValue);
                    }}/>

            <TimePicker
                    value={selectedTime}
                    onChange={(newValue) => {
                        setSelectedTime(newValue);
                    }}/>

                <DateTimePicker 
                    value={selectedDateTime}
                    onChange={(newValue) => {
                        setSelectedDateTime(newValue)}}/>
    </Stack>
  )
}
