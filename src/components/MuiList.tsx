import { Box, List, ListItem, ListItemText, ListItemIcon, Avatar, ListItemAvatar, ListItemButton, Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

export const MuiList = () => {
  return (
    <Box sx={{ width: '400px', bgcolor: '#efefef'}}>
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <EmailIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                        <ListItemText primary='List Item 1' secondary='Secondary List Item 1' />
                </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemIcon>
                    <ListItemAvatar>
                        <Avatar>
                            <EmailIcon />
                        </Avatar>
                    </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary='List Item 2' secondary='Secondary List Item 2' />
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemIcon>
                    <ListItemAvatar>
                        <Avatar>
                            <EmailIcon />
                        </Avatar>
                    </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary='List Item 3' secondary='Secondary List Item 3' />
            </ListItem>
        </List>
    </Box>
  )
}
