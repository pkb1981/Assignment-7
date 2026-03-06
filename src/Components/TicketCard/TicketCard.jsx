// two react icons imported for dot and calender icon
import { CiCalendarDate } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

// two props received from parent Component Main.jsx
const TicketCard = ({ ticket, handleAddTask }) => {

    // adding onClick event for ticket card to be clicked
    // giving id, title, description, customer, priority, status, createdAt in each card dynamically from already stored data in ticket.json
    return (
        <div onClick={() => handleAddTask(ticket)} className="card bg-base-100 card-xs shadow-sm cursor-pointer hover:shadow-lg transition w-full sm:w-auto">
            <div className="card-body p-3 sm:p-4" >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 sm:mb-0">
                    <h2 className="card-title font-bold text-sm sm:text-[14px]">{ticket.title}</h2>

                    <button
                        className={`btn btn-sm flex items-center rounded-3xl px-2 text-[12px] sm:text-[14px] font-medium
                                ${ticket.status?.toLowerCase() === "open"
                                ? "bg-[#B9F8CF] text-[#0B5E06]"
                                : ticket.status?.toLowerCase() === "in progress"
                                    ? "bg-yellow-200 text-yellow-800"
                                    : "bg-gray-200 text-gray-700"
                            }`}
                    >
                        <GoDotFill size={20} className="sm:mr-1" />
                        {ticket.status}
                    </button>
                </div>

                <p className="text-[12px] sm:text-[13px] mb-2">{ticket.description}</p>
                <div className=" flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div className="flex flex-col sm:flex-row sm:space-x-2.5 font-bold mb-2 sm:mb-0">
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
                    <div className="flex space-x-2.5 text-[10px]">
                        <span className="font-medium ">{ticket.customer}</span>
                        <div className="flex items-center">
                            <CiCalendarDate className="mr-1" />
                            <span>{ticket.createdAt}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TicketCard;