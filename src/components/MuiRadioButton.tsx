import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from '@mui/material';
import { useState } from 'react';

export const MuiRadioButton = () => {
    const [value, setValue] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    console.log({value})
  return (
    <Box>
        <FormControl error>
            <FormLabel id='job-experience-group-label'>
                Years of Experience
            </FormLabel>
            <RadioGroup name='job-experience-group' 
            aria-label='job-experience-group-label'
            value={value}
            onChange={handleChange}
            row>
                <FormControlLabel control={<Radio size='small' color='primary'/>} label='0-2' value='0-2'/>
                <FormControlLabel control={<Radio size='medium' color='secondary'/>} label='3-5' value='3-5'/>
                <FormControlLabel control={<Radio size='small' color='warning'/>} label='6-10' value='6-10'/>
            </RadioGroup>
            <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
    </Box>
  )
}
