import { use } from 'react';
import { CiCalendarDate } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
const Main = ({ ticketsPromise }) => {
    const allTickets = use(ticketsPromise)
    console.log(allTickets);

    return (
        <div className="mx-auto w-11/12 mt-4">
            <h3 className="font-medium text-2xl my-4">Customer Tickets</h3>


            <div className="grid grid-cols-2 w-2/3 gap-8">
                {/* small card from daisy ui */}
                {

                    allTickets.map(ticket => <div className="card w-96 bg-base-100 card-xs shadow-sm">
                        <div className="card-body">
                            <div className="flex justify-between">
                                <h2 className="card-title text-[14px]">{ticket.title}</h2>
                                <button className=" btn btn-sm flex items-center bg-[#B9F8CF] rounded-3xl px-2 text-[#0B5E06] text-[14px] font-medium "><GoDotFill size={25} />{ticket.status}</button>
                            </div>

                            <p className="text-[13px]">{ticket.description}</p>
                            <div className="justify-between card-actions">
                                <div className="flex space-x-2.5">
                                    <span>#{ticket.id}</span>
                                    <span>{ticket.priority
                                    } PRIORITY</span>
                                </div>
                                <div className="flex space-x-2.5">
                                    <span>{ticket.customer}</span>
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

        </div>
    );
};

export default Main;