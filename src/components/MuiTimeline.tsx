import { 
    Timeline, 
    TimelineItem, 
    TimelineSeparator, 
    TimelineConnector, 
    TimelineContent, 
    TimelineDot, 
    TimelineOppositeContent
} from "@mui/lab"
import FavoriteIcon from '@mui/icons-material/Favorite';

export const MuiTimeline = () => {
  return (
    <Timeline position='alternate-reverse'>
        <TimelineItem>
            <TimelineOppositeContent color='text.secondary'>08:30 AM</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='secondary'><FavoriteIcon /></TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>City A</TimelineContent>
        </TimelineItem>

        <TimelineItem>
        <TimelineOppositeContent>10:30 AM</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='warning' variant='outlined'/>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>City B</TimelineContent>
        </TimelineItem>

        <TimelineItem>
        <TimelineOppositeContent>12:30 PM</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='error'/>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>City C</TimelineContent>
        </TimelineItem>

        <TimelineItem>
        <TimelineOppositeContent>02:30 PM</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='success' variant='outlined'/>
            </TimelineSeparator>
            <TimelineContent>City D</TimelineContent>
        </TimelineItem>
    </Timeline>

    
  )
}
