import { use } from 'react';
import { CiCalendarDate } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
const Main = ({ ticketsPromise }) => {
    const allTickets = use(ticketsPromise)
    console.log(allTickets);

    return (
        <div className="mx-auto w-11/12 mt-4">
            <h3 className="font-medium text-2xl my-4">Customer Tickets</h3>

            {/* small card from daisy ui */}
            <div>
                <div className="card w-96 bg-base-100 card-xs shadow-sm">

                    <div className="card-body">

                        <div className="flex justify-between">
                            <h2 className="card-title text-[14px]">Login Issues - Can't Access Account</h2>
                            <button className="flex items-center bg-[#B9F8CF] rounded-xl px-2 text-[#0B5E06] font-medium text-[14px]"><GoDotFill size={25} />Open</button>
                        </div>

                        <p className="text-[13px]">Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
                        <div className="justify-between card-actions">
                            <div className="flex space-x-2.5">
                                <h4>#1001</h4>
                                <h4>HIGH PRIORITY</h4>
                            </div>
                            <div className="flex space-x-2.5">
                                <h4>John Smith</h4>
                                <div className="flex items-center">
                                    <CiCalendarDate />
                                    <h4>1/15/2024</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;