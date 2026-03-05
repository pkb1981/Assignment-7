
const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar max-w-7xl mx-auto px-4">

                {/* Left Side */}
                <div className="navbar-start">

                    {/* Mobile menu button */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        {/* Mobile dropdown menu */}
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            <li><a>Home</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Changelog</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Download</a></li>
                            <li><a>Contact</a></li>
                            <li>
                                <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
                                    + New Ticket
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <a className="btn btn-ghost text-lg lg:text-xl">
                        CS — Ticket System
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 items-center gap-2 whitespace-nowrap">

                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>

                        <li>
                            <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-none whitespace-nowrap">
                                + New Ticket
                            </button>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;