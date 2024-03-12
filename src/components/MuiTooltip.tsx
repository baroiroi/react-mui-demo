import { Tooltip, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


export const MuiTooltip = () => {
  return (
    <Tooltip title='Delete' placement='top-start' arrow enterDelay={500} leaveDelay={1000}>
        <IconButton>
            <DeleteIcon />
        </IconButton>
    </Tooltip>
  )
}
