// importing React hook(use)
//custom component TicketCard importing
import { use } from 'react';
import TicketCard from '../TIcketCard/TIcketCard';

// 5 props received from its parent Component App.jsx
const Main = ({ ticketsPromise, inProgressTickets, setInProgressTickets, resolvedTickets, setResolvedTickets }) => {

    // use is a react19 hook to read promise inside the component directly
    const allTickets = use(ticketsPromise);

    // the handleAddTask function runs when any ticket clicked
    // find is used to check ticket.id if same ticket stay then do not update
    // new ticket will be added in the area if not exists
    // spread operator use to update the clicked ticket
    // setInProgressTickets useState set the updated ticket
    const handleAddTask = (ticket) => {
        const exists = inProgressTickets.find(t => t.id === ticket.id);
        if (!exists) {
            const updatedTicket = { ...ticket, status: "in progress" };
            setInProgressTickets([...inProgressTickets, updatedTicket]);
        }
    };

    // when used clicked complete task button
    // filter used to keep other than complete ticket
    // setResolvedTickets useState to set the completed task ticket
    const handleCompleteTask = (ticket) => {
        const updatedInProgress = inProgressTickets.filter(t => t.id !== ticket.id);
        setInProgressTickets(updatedInProgress);
        const resolvedTicket = { ...ticket, status: "resolved" };
        setResolvedTickets([...resolvedTickets, resolvedTicket]);
    };

    return (
        <>
            <h3 className="mx-auto w-11/12 font-medium text-2xl my-4">Customer Tickets</h3>

            <div className="flex flex-col lg:flex-row justify-between mt-4 mx-auto w-11/12 gap-6">

                <div className="grid grid-cols-1 sm:grid-cols-2  w-full lg:w-2/3 gap-6">

                    {/* map all tickets to select the ticket for task area */}
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

                    {/* map the resolved tickets to go to the resolved area */}
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