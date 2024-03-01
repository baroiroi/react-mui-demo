import { Box, FormControlLabel, Switch } from '@mui/material';
import { useState } from 'react';

export const MuiSwitch = () => {
    const [modes, setModes] = useState<boolean>(false);
    console.log({modes});
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModes(event.target.checked);
    };
  return (
    <Box>
        <FormControlLabel
        label='Dark Mode' 
        control={<Switch 
        checked={modes} 
        onChange={handleChange}
        size='medium'
        color='primary'/>}
        />
        
    </Box>
  )
}
