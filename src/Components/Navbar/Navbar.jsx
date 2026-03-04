
const Navbar = () => {
    return (
        <div>
            <div className="navbar w-11/12 mx-auto bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">CS — Ticket System</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                        <li><button className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white ">+ New Ticket</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;