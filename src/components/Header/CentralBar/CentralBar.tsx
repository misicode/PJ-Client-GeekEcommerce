import { useState } from "react";
import { Link } from "react-router-dom";

import CartIcon from "../../Icons/CartIcon/CartIcon";
import HamburgerIcon from "../../Icons/HamburgerIcon/HamburgerIcon";
import SearchBar from "../../Parts/SearchBar/SearchBar";
import UserIcon from "../../Icons/UserIcon/UserIcon";

export const CentralBar = () => {
  const [ isOpen, setIsOpen ] = useState<boolean>(false);

  return (
    <div className="lg:flex lg:h-24 lg:px-24 lg:items-center">
      <div className="fixed lg:static flex z-30 lg:z-0 w-full lg:w-auto px-6 sm:px-12 md:px-16 lg:px-0 items-center bg-gray-100 lg:bg-transparent dark:bg-gray-900 lg:dark:bg-transparent">
        <HamburgerIcon isOpen={ isOpen } setIsOpen={ setIsOpen } />
        <Link to="/" className="flex py-4 lg:py-0 pl-6 lg:pl-0 items-center justify-center">
          <div className="w-48 lg:w-64">
            <img className="h-10 lg:h-14 w-[11.2rem] lg:w-[15.65rem]" height="100%" width="100%" src="logo.webp" alt="Logo TecnoCat" />
          </div>
        </Link>
      </div>
      {
        isOpen && 
        <>
          <div className="fixed z-20 inset-0 h-full w-72 md:w-80 bg-gray-100 dark:bg-gray-800">
          </div>
          <div className="fixed inset-0 z-10 bg-gray-800/50 dark:bg-gray-900/60"></div>
        </>
      }
      <SearchBar />
      <div className="hidden lg:flex ml-10 text-gray-700 dark:text-white">
        <Link to="/login" className="ml-4 mr-3 px-2 hover:text-primary-600 text-center">
          <UserIcon />
          <p>Mi Perfil</p>
        </Link>
        <button className="ml-4 pl-1 hover:text-primary-600">
          <CartIcon />
          <p>0.00</p>
        </button>
      </div>
    </div>
  );
};

export default CentralBar;