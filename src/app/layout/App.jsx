import React ,{useState}  from 'react';
import { Container } from 'semantic-ui-react';
import EventDashbord from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/events/eventDashboard/nav/NavBar';

export default function App() {
  const[formOpen,setFormOpen]=useState(false);
  return (
    <>
     <NavBar setFormOpen={setFormOpen}/>
     <Container className='main'> 
        <EventDashbord formOpen={formOpen} setFormOpen={setFormOpen}/>
     </Container>  
    </> 
  );
}  


   