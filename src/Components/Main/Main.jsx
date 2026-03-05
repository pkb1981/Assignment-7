import { use } from 'react';
import { CiCalendarDate } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
const Main = ({ ticketsPromise }) => {
    const allTickets = use(ticketsPromise)
    console.log(allTickets);

    return (
        <div className="mx-auto w-11/12 mt-4">
            <h3 className="font-medium text-2xl my-4">Customer Tickets</h3>


            <div className="grid md:grid-cols-2 sm:grid-cols-1 w-2/3 gap-8">
                {/* small card from daisy ui */}
                {

                    allTickets.map(ticket => <div className="card bg-base-100 card-xs shadow-sm">
                        <div className="card-body">
                            <div className="flex justify-between">
                                <h2 className="card-title font-bold text-[14px]">{ticket.title}</h2>

                                <button
                                    className={`btn btn-sm flex items-center rounded-3xl px-2 text-[14px] font-medium
                                        ${ticket.status?.toLowerCase() === "open"
                                            ? "bg-[#B9F8CF] text-[#0B5E06]"
                                            : ticket.status?.toLowerCase() === "in progress"
                                                ? "bg-yellow-200 text-yellow-800"
                                                : "bg-gray-200 text-gray-700"
                                        }`}
                                >
                                    <GoDotFill size={25} />
                                    {ticket.status}
                                </button>
                            </div>

                            <p className="text-[13px]">{ticket.description}</p>
                            <div className="justify-between card-actions">
                                <div className="flex space-x-2.5 font-bold">
                                    <span>#{ticket.id}</span>
                                    <span className={
                                        ticket.priority === "LOW" ? "text-[#02A53B]" :
                                            ticket.priority === "MEDIUM" ? "text-[#FEBB0C]" :
                                                ticket.priority === "HIGH" ? "text-[#F83044]" :
                                                    ticket.priority === "CRITICAL" ? "text-red-800" :
                                                        ""
                                    }>
                                        {ticket.priority} PRIORITY
                                    </span>
                                </div>
                                <div className="flex space-x-2.5">
                                    <span className="font-bold text-xs">{ticket.customer}</span>
                                    <div className="flex items-center">
                                        <CiCalendarDate />
                                        <span>{ticket.createdAt}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div >
    );
};

export default Main;