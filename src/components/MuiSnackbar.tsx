import { Snackbar, Button } from "@mui/material";
import { useState } from "react";

export const MuiSnackbar = () => {
    const [open, setOpen] = useState(false);
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if(reason === 'Clickaway') {
            return;
    };
        setOpen(false);
}
  return (
    <>
    <Button onClick={() => setOpen(true)}>Submit</Button>
    <Snackbar message='Form Submitted Successfully' autoHideDuration={4000}
    open={open}
    onClose={handleClose}
    anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
    }}/>    
    </>
  )
}
