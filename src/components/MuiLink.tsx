import { Stack, Link, Typography } from '@mui/material'
export const MuiLink = () => {
  return (
    <Stack spacing={2} direction='row' m={4}>
        <Link href='#' variant='h1'>Link</Link>
        <Typography variant='h2'>
            <Link href='#' color='secondary' underline='hover'>Secondary</Link>
        </Typography>
    </Stack>
  )
}
