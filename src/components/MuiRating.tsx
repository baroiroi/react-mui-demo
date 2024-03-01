import { Stack, Rating } from '@mui/material';
import { useState } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

export const MuiRating = () => {
    const [rating, setRating] = useState<number | null>(null);
    console.log({rating});
    const handleChange = (event: React.ChangeEvent<{}>, newRating: number | null) => {
        setRating(newRating);
    }
  return (
    <Stack spacing={2}>
        <Rating  value={rating} 
        onChange={handleChange} 
        precision={0.5} 
        size='large'
        icon={<ThumbUpAltIcon fontSize='inherit' color='secondary'/>}
        emptyIcon={<ThumbUpOffAltIcon fontSize='inherit'/>}/>
        </Stack>
  )
}
