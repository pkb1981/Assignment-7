const Banner = () => {
    return (
        <div>
            {/* banner from daisyUI */}
            <div class="grid grid-cols-2 gap-5 w-11/12 mx-auto">

                <div class="hero h-64 rounded-lg overflow-hidden bg-linear-to-r from-[#632EE3] to-[#9F62F2]"

                >
                    <div class="hero-overlay"></div>
                    <div class="hero-content text-neutral-content text-center">
                        <div class="max-w-md">
                            <h1 class="mb-5 text-5xl font-medium">In-Progress</h1>
                            <p class="mb-5">
                                <span class="text-4xl">0</span>
                            </p>

                        </div>
                    </div>
                </div>

                <div class="hero h-64 rounded-lg overflow-hidden bg-linear-to-r from-[#54CF68] to-[#00827A]"

                >
                    <div class="hero-overlay"></div>
                    <div class="hero-content text-neutral-content text-center">
                        <div class="max-w-md">
                            <h1 class="mb-5 text-5xl font-medium">Resolved</h1>
                            <p class="mb-5">
                                <span class="text-4xl">0</span>
                            </p>

                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Banner;