
const Banner = ({ tickets = [] }) => {

    const inProgressCount = tickets.filter(t => t.status?.toLowerCase() === "in progress").length;
    const resolvedCount = tickets.filter(t => t.status?.toLowerCase() === "resolved").length;

    return (
        <div>
            {/* banner from daisyUI */}
            <div className="grid grid-cols-2 gap-5 w-11/12 mx-auto">

                <div className="hero h-64 rounded-lg overflow-hidden bg-linear-to-r from-[#632EE3] to-[#9F62F2]"

                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-medium">In progress</h1>
                            <p className="mb-5">
                                <span className="text-4xl">{inProgressCount}</span>
                            </p>

                        </div>
                    </div>
                </div>


                <div className="hero h-64 rounded-lg overflow-hidden bg-linear-to-r from-[#54CF68] to-[#00827A]"

                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-medium">Resolved</h1>
                            <p className="mb-5">
                                <span className="text-4xl">{resolvedCount}</span>
                            </p>

                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Banner;