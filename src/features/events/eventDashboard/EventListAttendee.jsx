import React from 'react'
import { List,Image, Label } from 'semantic-ui-react'
//added comment 
export default function EventListAttendee({attendee}) {
  return (
   <List.Item>
     <a class='ui image label'>
     <Image size='mini' circular  src={attendee.photoURL} />
     {attendee.name}
     </a>
   </List.Item>
  )
}
