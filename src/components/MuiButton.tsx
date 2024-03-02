import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import { useState } from 'react';

export const MuiButton = () => {
  const [format, setFormat] = useState<string | null>(null);
  console.log({format});
  const handleFormatChange = (e: React.MouseEvent<HTMLElement>, updatedFormat: string | null) => {
    setFormat(updatedFormat)
  };
  return (
  <Stack spacing={4}>
    <Stack spacing={2} direction='row'>
        <Button variant='text' href='https://google.com'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
    </Stack>

    <Stack spacing={2} direction='row'>
      <Button variant='outlined' color='primary'>Primary</Button>
      <Button variant='outlined' color='secondary'>Secondary</Button>
      <Button variant='outlined' color='error'>Error</Button>
      <Button variant='outlined' color='warning'>Warning</Button>
      <Button variant='outlined' color='info'>Info</Button>
      <Button variant='outlined' color='success'>Success</Button>
    </Stack>
    
    <Stack display='block' spacing={2} direction='row'>
      <Button variant='contained' size='small'>Small</Button>
      <Button variant='contained' size='medium'>Medium</Button>
      <Button variant='contained' size='large'>Large</Button>
    </Stack>

    <Stack spacing={2} direction='row'>
      <Button 
      variant='outlined' 
      startIcon={<SendIcon />} 
      disableRipple
      onClick={() => alert('Clicked')}>
      Send
      </Button>
      <Button variant='outlined' endIcon={<SendIcon />} disableElevation>Send</Button>
      <IconButton aria-label='send' color='success' size='small'> <SendIcon /> </IconButton>
    </Stack>
    <Stack direction='row'>
      <ButtonGroup 
      variant='contained' 
      disableRipple 
      orientation='horizontal' 
      size='large'
      color='warning'
      aria-label='alignment button group'
      >
      <Button onClick={() => alert('left clicked')}>Left</Button>
      <Button onClick={() => alert('center clicked')}>Center</Button>
      <Button onClick={() => alert('right clicked')}>Right</Button>
      </ButtonGroup>
    </Stack>
    <Stack direction='row'>
      <ToggleButtonGroup 
      aria-label='text formatting' 
      value={format} 
      onChange={handleFormatChange} 
      size='large' 
      color='success' 
      exclusive>
        <ToggleButton value='bold' aria-label='bold' ><FormatBoldIcon /></ToggleButton>
        <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon /></ToggleButton>
        <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon /></ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  </Stack>
  )
}