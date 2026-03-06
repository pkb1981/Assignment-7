// react icons imported for twitter facebook email and linked in logo
// footer section design from daisyUI
import { BsTwitterX } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { PiLinkedinLogoLight } from "react-icons/pi";

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content mt-10">

            <div className="max-w-7xl mx-auto px-5 py-10
                            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

                {/* Company Info */}
                <div>
                    <h6 className="footer-title text-lg mb-3">CS — Ticket System</h6>
                    <p className="text-sm leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s.
                    </p>
                </div>

                {/* Company */}
                <div>
                    <h6 className="footer-title mb-3">Company</h6>
                    <a className="link link-hover block">About us</a>
                    <a className="link link-hover block">Our Mission</a>
                    <a className="link link-hover block">Contact Sales</a>
                </div>

                {/* Services */}
                <div>
                    <h6 className="footer-title mb-3">Services</h6>
                    <a className="link link-hover block">Products & Services</a>
                    <a className="link link-hover block">Customer Stories</a>
                    <a className="link link-hover block">Download Apps</a>
                </div>

                {/* Information */}
                <div>
                    <h6 className="footer-title mb-3">Information</h6>
                    <a className="link link-hover block">Privacy Policy</a>
                    <a className="link link-hover block">Terms & Conditions</a>
                    <a className="link link-hover block">Facebook</a>
                    <a className="link link-hover block">Join Us</a>
                </div>

                {/* Social */}
                <div>
                    <h6 className="footer-title mb-3">Social Links</h6>

                    <div className="space-y-2">

                        <div className="flex items-center gap-2">
                            <BsTwitterX className="bg-white text-black p-1 rounded-full text-xl" />
                            <span>@CS Ticket System</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <PiLinkedinLogoLight className="bg-white text-black p-1 rounded-full text-xl" />
                            <span>@CS Ticket System</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <CiFacebook className="bg-white text-black p-1 rounded-full text-xl" />
                            <span>@CS Ticket System</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <MdEmail className="bg-white text-black p-1 rounded-full text-xl" />
                            <span>support@cstickets.com</span>
                        </div>

                    </div>
                </div>

            </div>

            {/* Bottom copyright */}
            <div className="text-center text-sm py-4 border-t border-neutral-700">
                © 2026 CS Ticket System. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;