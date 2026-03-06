import bannerImg from "../../assets/vector1.png";

const Banner = ({ inProgressTickets = [], resolvedTickets = [] }) => {
    const inProgressCount = inProgressTickets.length;
    const resolvedCount = resolvedTickets.length;

    return (
        <div className="w-11/12 mx-auto my-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/*left banner imported from daisy ui */}
                <div className="relative hero h-52 sm:h-64 rounded-lg overflow-hidden bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                    {/* Left Vector */}
                    <img
                        src={bannerImg}
                        className="absolute left-0 bottom-0 h-full object-contain"
                    />
                    {/* Right Vector  scale-x-[-1] make the vector image face to face*/}
                    <img
                        src={bannerImg}
                        className="absolute right-0 bottom-0 h-full object-contain scale-x-[-1]"
                    />

                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-2 sm:mb-5 text-3xl sm:text-5xl font-medium">In progress</h1>
                            <p className="mb-2 sm:mb-5"><span className="text-3xl sm:text-4xl">{inProgressCount}</span></p>
                        </div>
                    </div>
                </div>

                {/* right banner imported form daisy ui */}
                <div className="relative hero h-52 sm:h-64 rounded-lg overflow-hidden bg-gradient-to-r from-[#54CF68] to-[#00827A]">
                    {/* Left Vector */}
                    <img
                        src={bannerImg}
                        className="absolute left-0 bottom-0 h-full object-contain"
                    />
                    {/* Right Vector  scale-x-[-1] make the vector image face to face*/}
                    <img
                        src={bannerImg}
                        className="absolute right-0 bottom-0 h-full object-contain scale-x-[-1]"
                    />

                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-2 sm:mb-5 text-3xl sm:text-5xl font-medium">Resolved</h1>
                            <p className="mb-2 sm:mb-5"><span className="text-3xl sm:text-4xl">{resolvedCount}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;