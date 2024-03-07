import { Stack, Badge } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction='row'>
        <Badge badgeContent={99} color='primary'>
            <EmailIcon />
        </Badge>
        <Badge badgeContent={0} color='secondary' showZero>
            <EmailIcon />
        </Badge>
        <Badge badgeContent={100} color='primary' max={999}>
            <EmailIcon />
        </Badge>
        <Badge variant='dot' color='primary' invisible={true}>
            <EmailIcon />
        </Badge>
    </Stack>
  )
}
