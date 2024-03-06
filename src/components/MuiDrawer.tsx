import { Drawer, Box, Typography, IconButton } from "@mui/material";
import { useState } from "react";
// import MenuIcon from '@mui/icons-material/Menu';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';


export const MuiDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    <>
        <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='logo'
            onClick={() => setIsOpen(true)}>
                <ArrowRightIcon />
            </IconButton>
            <Drawer anchor='left' open={isOpen} onClose={() => setIsOpen(false)}>
            <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='logo'
                onClick={() => setIsOpen(false)}>
                <ArrowLeftIcon />
            </IconButton>
            <Box 
            p={2}
            width='250px' 
            textAlign='center' 
            role='presentation'>
                <Typography variant='h6' component='div'>Side Panel</Typography>
            </Box>
            </Drawer>
        
    </>
  )
}
