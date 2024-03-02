import { Box, Stack, Divider, Grid } from '@mui/material';

export const MuiLayout = () => {
  return (
    <>
  <Stack sx={{
    border: '1px solid',
  }} direction='row' spacing={2} divider={<Divider orientation='vertical' flexItem />}>
    <Box sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        height: '100px',
        width: '100px',
        padding: '16px',
        '&:hover' : {
            backgroundColor: 'secondary.main',
        },
    }}
    >
        Baroiroi
    </Box>
    <Box display='flex' 
    height='100px' 
    width='100px' 
    bgcolor='success.light' 
    p={2}
    color='white'>
        Noha
    </Box>
  </Stack>
  <Grid container my={4}>
    <Grid item xs={3}>
      <Box bgcolor='primary.light' padding={2}>Item 1</Box>
    </Grid>
    <Grid item xs={9}>
      <Box bgcolor='primary.light' padding={2}>Item 2</Box>
    </Grid>  
    <Grid item xs={9}>
      <Box bgcolor='primary.light' padding={2}>Item 3</Box>
    </Grid>  
    <Grid item xs={3}>
      <Box bgcolor='primary.light' padding={2}>Item 4</Box>
    </Grid>     
  </Grid>
  </>
  )
}
