import { Typography } from "@mui/material"

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4' component= 'h1' gutterBottom>h4 Heading</Typography>
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='h6'>h6 Heading</Typography>

        <Typography variant='subtitle1'>Subtitle 1</Typography>
        <Typography variant='subtitle2'>Subtitle 2</Typography>

        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam nihil similique vitae, doloremque ab deleniti sequi nam dignissimos cupiditate harum enim numquam officia in quas suscipit ducimus molestiae quidem sapiente!</Typography>
        
        <Typography variant='body2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit vitae dolor, possimus dicta minima aliquid perspiciatis quod sit magnam doloribus natus molestiae similique itaque, expedita, saepe ipsa consectetur? Id, voluptatem!</Typography>
    </div>
  )
}
