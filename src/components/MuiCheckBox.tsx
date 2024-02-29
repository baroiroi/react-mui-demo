import { Box, Checkbox, FormControlLabel, FormControl, FormLabel, FormGroup, FormHelperText } from '@mui/material';
import { useState } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export const MuiCheckBox = () => {
    const [accept, setAccept] = useState<boolean>(false);
    console.log(accept);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccept(event.target.checked);
    };

    const [value, setValue] = useState<string[]>([]);
    console.log({value})
    const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = value.indexOf(event.target.value)
        if(index === -1) {
            setValue([...value, event.target.value]);
        } else {
            setValue(value.filter(skill => skill !== event.target.value))
        }
    }

  return (
    <Box>
        <Box>
            <FormControlLabel label='I accept terms and conditions' control={<Checkbox checked={accept} onChange={handleChange} color='warning' size='medium'/>}/>
        </Box>
        <Box>
            <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />}
            checked={accept}
            onChange={handleChange}/>
        </Box>
        <Box>
            <FormControl error>
                <FormLabel>SKills</FormLabel>
                <FormGroup row>
                    <FormControlLabel label='HTML' control={<Checkbox value='HTML' checked={value.includes('HTML')} onChange={handleValue}/>}/>
                    <FormControlLabel label='CSS' control={<Checkbox value='CSS' checked={value.includes('CSS')} onChange={handleValue}/>}/>
                    <FormControlLabel label='JavaScript' control={<Checkbox value='JavaScript' checked={value.includes('JavaScript')} onChange={handleValue}/>}/>
                </FormGroup>
                <FormHelperText>Invalid Selection</FormHelperText>
            </FormControl>
        </Box>
    </Box>
  )
}
