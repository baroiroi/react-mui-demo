import { Stack, Avatar, AvatarGroup } from '@mui/material';

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={1}>
            <Avatar sx={{bgcolor: 'primary.light'}}>BW</Avatar>
            <Avatar sx={{bgcolor: 'success.light'}}>CK</Avatar>
        </Stack>
        <Stack direction='row' spacing={1}>
            <Avatar sx={{bgcolor: 'primary.light'}}>BW</Avatar>
            <Avatar sx={{bgcolor: 'success.light'}}>CK</Avatar>
            <Avatar src='https://randomuser.me/api/portraits/women/79.jpg' alt='Jane Doe' variant='square'></Avatar>
            <Avatar src='https://randomuser.me/api/portraits/men/51.jpg' alt='John Doe'></Avatar>
        </Stack>
        <Stack direction='row' spacing={1}>
            <AvatarGroup>
            <Avatar sx={{bgcolor: 'primary.light'}}>BW</Avatar>
            <Avatar sx={{bgcolor: 'success.light'}}>CK</Avatar>
            <Avatar src='https://randomuser.me/api/portraits/women/79.jpg' alt='Jane Doe' variant='square'></Avatar>
            <Avatar src='https://randomuser.me/api/portraits/men/51.jpg' alt='John Doe' variant='rounded'></Avatar>
            </AvatarGroup>
        </Stack>
    </Stack>
  )
}
