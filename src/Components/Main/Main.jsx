import { use } from 'react';
import TicketCard from '../TIcketCard/TIcketCard';

const Main = ({ ticketsPromise, inProgressTickets, setInProgressTickets, resolvedTickets, setResolvedTickets }) => {
    const allTickets = use(ticketsPromise);

    // Add ticket to in-progress
    const handleAddTask = (ticket) => {
        const exists = inProgressTickets.find(t => t.id === ticket.id);
        if (!exists) {
            const updatedTicket = { ...ticket, status: "in progress" };
            setInProgressTickets([...inProgressTickets, updatedTicket]);
        }
    };

    // Complete task
    const handleCompleteTask = (ticket) => {
        // Remove from in-progress
        const updatedInProgress = inProgressTickets.filter(t => t.id !== ticket.id);
        setInProgressTickets(updatedInProgress);

        // Add to resolved
        const resolvedTicket = { ...ticket, status: "resolved" };
        setResolvedTickets([...resolvedTickets, resolvedTicket]);
    };

    return (
        <>
            <h3 className="mx-auto w-11/12 font-medium text-2xl my-4">Customer Tickets</h3>

            <div className="flex flex-col lg:flex-row justify-between mt-4 mx-auto w-11/12 gap-6">

                <div className="grid grid-cols-1 sm:grid-cols-2  w-full lg:w-2/3 gap-6">
                    {allTickets.map(ticket => (
                        <TicketCard
                            key={ticket.id}
                            ticket={ticket}
                            handleAddTask={handleAddTask}
                        />
                    ))}
                </div>

                {/* Task status area */}
                <div className="w-full lg:w-1/3 flex flex-col gap-6">
                    <div className="font-medium text-xl sm:text-2xl">
                        <h1 className="mb-2">Task Status</h1>
                        {inProgressTickets.map(ticket => (
                            <div key={ticket.id} className="p-3 sm:p-4 border rounded-lg ">
                                <h2 className="mb-2 font-semibold text-sm sm:text-[16px]">{ticket.title}</h2>
                                <button
                                    className="btn text-white rounded-xl w-full bg-[#02A53B]"
                                    onClick={() => handleCompleteTask(ticket)}
                                >
                                    Complete
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="font-medium text-xl sm:text-2xl">
                        <h1 className="mb-2">Resolved Task</h1>
                        {resolvedTickets.map(ticket => (
                            <div key={ticket.id} className="p-3 sm:p-4 border rounded-lg">
                                <h2 className="mb-2 font-semibold text-sm sm:text-[16px]">{ticket.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>

            </div >
        </>
    );
};

export default Main;