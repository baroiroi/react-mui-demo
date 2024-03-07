import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";
import { MuiHomeTest } from "./MuiHomeTest";
import { MuiFaveTest } from "./MuiFaveTest";
import { MuiProfTest } from "./MuiProfTest";


export const MuiBottomNavigation = () => {
    const [value, setValue] = useState(0);
    
    const renderComponent = () => {
        switch (value) {
          case 0:
            return <MuiHomeTest />;
          case 1:
            return <MuiFaveTest />;
          case 2:
            return <MuiProfTest />;
          default:
            return null;
        }
      };
  return (
    <>
    <Box>
    {renderComponent()}
    </Box>
    <BottomNavigation sx={{
        width: '100%',
        position: 'absolute',
        bottom: 0
    }} value={value} onChange={(event, newValue) => {setValue(newValue)}} showLabels>
       <BottomNavigationAction label="Home" icon={<HomeIcon />} />
       <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
       <BottomNavigationAction label="Profile" icon={<PersonIcon />} /> 
    </BottomNavigation>
    </>
  )
}
