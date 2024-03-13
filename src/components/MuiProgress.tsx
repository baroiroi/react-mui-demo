import { Stack, CircularProgress, LinearProgress } from '@mui/material';

export const MuiProgress = () => {
  return (
    <Stack spacing={2}>
        <CircularProgress color='error'/>
        <CircularProgress color='info'/>
        <CircularProgress color='inherit'/>
        <CircularProgress color='primary'/>
        <CircularProgress color='secondary'/>
        <CircularProgress color='success'/>
        <CircularProgress color='warning'/>
        <CircularProgress color='secondary' variant='determinate' value={50}/>

        <LinearProgress color='error'/>
        <LinearProgress color='info'/>
        <LinearProgress color='inherit'/>
        <LinearProgress color='primary'/>
        <LinearProgress color='secondary'/>
        <LinearProgress color='success'/>
        <LinearProgress color='warning'/>
        <LinearProgress color='secondary' variant='determinate' value={50}/>
    </Stack>
  )
}
