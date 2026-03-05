import { use, useState } from 'react';
import TicketCard from '../TIcketCard/TIcketCard';


const Main = ({ ticketsPromise, onTicketClick }) => {
    const allTickets = use(ticketsPromise)
    // console.log(allTickets);

    const [selectedTicket, setSelectedTicket] = useState([]);

    const handleAddTask = (ticket) => {
        const exists = selectedTicket.find(t => t.id === ticket.id);
        if (!exists) {
            const updatedTicket = { ...ticket, status: "in progress" };
            const updatedTickets = [...selectedTicket, updatedTicket];
            setSelectedTicket(updatedTickets);

            // notify App.jsx to update Banner
            if (onTicketClick) {
                onTicketClick(updatedTickets);
            }
        }
    };

    return (
        <>
            <h3 className="mx-auto w-11/12 font-medium text-2xl my-4">Customer Tickets</h3>


            <div className="flex justify-between  mt-4 mx-auto w-11/12">

                <div className="grid md:grid-cols-2 sm:grid-cols-1 w-2/3 gap-8">
                    {/* small card from daisy ui */}
                    {/* eact ticket mapped and  */}
                    {

                        allTickets.map(ticket => <TicketCard key={ticket.id} ticket={ticket} handleAddTask={handleAddTask}>
                        </TicketCard>)
                    }

                </div>


                {/* Task  status area  */}
                <div>
                    <div className="font-medium text-2xl my-4">
                        <h1>Task Status</h1>

                        {
                            selectedTicket.map(ticket => (
                                <div key={ticket.id} className="p-4 border rounded-lg mt-2 mb-4">
                                    <h2 className="mb-4 font-semibold text-[16px]">
                                        {ticket.title}
                                    </h2>

                                    <button className="btn text-white rounded-xl w-full bg-[#02A53B]">
                                        Complete
                                    </button>
                                </div>
                            ))

                        }
                    </div>

                    <div className="font-medium text-2xl my-4">
                        <h1>Resolved Task</h1>
                    </div>
                </div>

            </div >
        </>
    );
};

export default Main;