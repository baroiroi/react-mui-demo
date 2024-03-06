import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

export const MuiNavBar = () => {
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
                <Button color='inherit'>LOGIN</Button>
            </Stack>
        </Toolbar>
    </AppBar>
    
  )
}
