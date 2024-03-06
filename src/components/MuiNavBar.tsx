import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export const MuiNavBar = () => {
    
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
  return (
    <AppBar position='static'>
        <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                <CatchingPokemonIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                POKEMON APP
            </Typography>
            <Stack direction='row' spacing={2}>
                <Button color='inherit'>FEATURES</Button>
                <Button color='inherit'>PRICING</Button>
                <Button color='inherit'>ABOUT</Button>
                <Button color='inherit' 
                id='resources-button' 
                onClick={handleClick} 
                aria-controls={open ? 'resources-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                endIcon={open ? <KeyboardDoubleArrowUpIcon /> : <KeyboardDoubleArrowDownIcon />}>Resources</Button>
                <Button color='inherit'>LOGIN</Button>
            </Stack>
            <Menu id='resources-menu' 
            anchorEl={anchorEl} 
            open={open} 
            MenuListProps={{
                'aria-labelledby': 'resources-button',
            }}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}>
                <MenuItem onClick={handleClose}>Blog</MenuItem>
                <MenuItem onClick={handleClose}>Podcast</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>
    
  )
}
