import { Suspense, useState } from "react";
import './App.css';
import Banner from './Components/Banner/Banner';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';

// fetching the JSON data
const fetchTickets = async () => {
  const res = await fetch("tickets.json")
  return res.json();
}

function App() {

  const ticketsPromise = fetchTickets();

  // state to hold the selected ticket
  const [selectedTickets, setSelectedTickets] = useState([]);

  // function to handle click from TicketCard
  const handleTicketClick = (ticketsArray) => {
    setSelectedTickets(ticketsArray);
  };


  return (
    <>

      {/* navbar section */}
      <Navbar></Navbar>

      {/* Banner Section */}
      <Banner tickets={selectedTickets}></Banner>

      {/* Main Section */}
      <Suspense>
        <Main
          ticketsPromise={ticketsPromise}
          onTicketClick={handleTicketClick}></Main>
      </Suspense>

    </>
  )
}

export default App
