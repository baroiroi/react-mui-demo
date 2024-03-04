import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material';

export const MuiCard = () => {
  return (
    <Box width='600px'>
        <Card>
            <CardMedia
                component='img'
                height='140px'
                image='https://source.unsplash.com/random'
                alt='unsplash image'/>
            <CardContent>
                <Typography variant='h1' component='div'>ReactJS</Typography>
                <Typography variant='body2' color='text.secondary'>
                React (also known as React. js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}
