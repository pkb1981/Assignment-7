import { Suspense } from "react";
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

  return (
    <>

      {/* navbar section */}
      <Navbar></Navbar>

      {/* Banner Section */}
      <Banner></Banner>

      {/* Main Section */}
      <Suspense>
        <Main ticketsPromise={ticketsPromise}></Main>
      </Suspense>

    </>
  )
}

export default App
