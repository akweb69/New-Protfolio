import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 ">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm md:text-base">
                    &copy; {new Date().getFullYear()} YourCompanyName. All rights reserved.
                </p>
                <div className="flex justify-center gap-4 mt-2 text-lg">
                    <a href="#" className="hover:text-blue-400">Privacy</a>
                    <a href="#" className="hover:text-blue-400">Terms</a>
                    <a href="#" className="hover:text-blue-400">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
