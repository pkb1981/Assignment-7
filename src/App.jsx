import { Suspense, useState } from "react";
import './App.css';
import Banner from './Components/Banner/Banner';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';

const fetchTickets = async () => {
  const res = await fetch("tickets.json");
  return res.json();
}

function App() {
  const ticketsPromise = fetchTickets();

  // State for in-progress and resolved tickets
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  return (
    <>
      <Navbar />
      <Banner
        inProgressTickets={inProgressTickets}
        resolvedTickets={resolvedTickets}
      />
      <Suspense>
        <Main
          ticketsPromise={ticketsPromise}
          inProgressTickets={inProgressTickets}
          setInProgressTickets={setInProgressTickets}
          resolvedTickets={resolvedTickets}
          setResolvedTickets={setResolvedTickets}
        />
      </Suspense>
    </>
  );
}

export default App;