import { CiCalendarDate } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";



const TicketCard = ({ ticket, handleAddTask }) => {

    return (
        <div onClick={() => handleAddTask(ticket)} className="card bg-base-100 card-xs shadow-sm cursor-pointer hover:shadow-lg transition">
            <div className="card-body" >
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
        </div >
    );
};

export default TicketCard;