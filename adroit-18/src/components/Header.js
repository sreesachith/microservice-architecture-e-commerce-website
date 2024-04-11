import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logoDark from "./../images/logofinal.png"; // Import the logoDark image file

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavLinkClick = (path) => {
        // Check if the current location is already the same as the destination path
        if (location.pathname === path) {
            // If yes, simply return and do nothing
            return;
        }
        // If not, navigate to the destination path
        navigate(path);
    };

    return (
        <div className="w-full h-20 bg-white border-b-[1px] border-gray-800">
            <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
                <div>
                    <img className="w-28" src={logoDark} alt="logoDark" width='150px' />
                </div>
                <ul className="flex items-center gap-8">
                    <li className="text-base text-black font-bold hover:text-orange-900 hover:underline cursor-pointer duration-300" onClick={() => handleNavLinkClick('/Home')}>
                        Home
                    </li>
                    <li className="text-base text-black font-bold hover:text-orange-900 hover:underline cursor-pointer duration-300" onClick={() => handleNavLinkClick('/Home/landing')}>
                        Contact
                    </li>
                    <li className="text-base text-black font-bold hover:text-orange-900 hover:underline cursor-pointer duration-300" onClick={() => handleNavLinkClick('/Home/cart')}>
                        Cart
                    </li>
                    <li className="text-base text-black font-bold hover:text-orange-900 hover:underline cursor-pointer duration-300" onClick={() => handleNavLinkClick('/about')}>
                        About
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
