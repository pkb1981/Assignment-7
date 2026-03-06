// importing react hook(useState) use to store & update data inside a component
// importing suspense (react component) to render other components data 
// importing other Component(banner,footer,Main,Navbar) into the parent component
import { Suspense, useState } from "react";
import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from "./Components/Footer/Footer";
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';


// now fetching the data from tickets.json file which is created by giving all the required info for this project
// fetching is doing here using async & await(wait untill request finished)
// response stores data from the fetch request
// return the converted respnse to json data
const fetchTickets = async () => {
  const res = await fetch("tickets.json");
  return res.json();
}

// this is the main component which controls the enitre UI & used to show  output 
// the ticketsPromise is storing data of promise  from fetchTickets function 
function App() {
  const ticketsPromise = fetchTickets();

  // crating two useState function for in-progress and resolved tickets
  // two parameter 1st used for taking variable and 2nd used for seting variable
  // initial value is empty array 
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  return (
    <>

      {/*imported navbar component */}
      <Navbar></Navbar>

      {/* imported banner coponent */}
      {/* two props are sent to the banner component. */}
      <Banner
        inProgressTickets={inProgressTickets}
        resolvedTickets={resolvedTickets}
      >
      </Banner>

      {/* 5 props sent to Main components */}
      {/* Suspense is a react Components which is a wrapper components to wrap other components and tells to wait until promise is ready */}
      <Suspense>
        <Main
          ticketsPromise={ticketsPromise}
          inProgressTickets={inProgressTickets}
          setInProgressTickets={setInProgressTickets}
          resolvedTickets={resolvedTickets}
          setResolvedTickets={setResolvedTickets}
        >
        </Main>
      </Suspense>

      {/* footer component  */}
      <Footer></Footer>
    </>
  );
}

export default App;