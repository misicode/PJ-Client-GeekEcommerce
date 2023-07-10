import CartIcon from "../../Icons/CartIcon/CartIcon";
import UserIcon from "../../Icons/UserIcon/UserIcon";
import SearchBar from "../../Parts/SearchBar/SearchBar";

export const CentralBar = () => {
  return (
    <div className="h-24 px-6 sm:px-12 md:px-16 lg:px-24 flex items-center">
      <div className="flex items-center">
        <div className="w-16">
          <img className="h-14 w-14" height="100%" width="100%" src="logo.svg" alt="Logo TecnoCat" />
        </div>
        <span className="pl-2 text-4xl font-primary font-medium text-primary-500">
          TecnoCat
        </span>
      </div>
      <SearchBar />
      <div className="ml-10 text-gray-700 dark:text-white">
        <button className="ml-4 mr-3 px-2 hover:text-primary-600 text-center">
          <UserIcon />
          <p>Mi Perfil</p>
        </button>
        <button className="ml-4 pl-1 hover:text-primary-600">
          <CartIcon />
          <p>0.00</p>
        </button>
      </div>
    </div>
  );
};

export default CentralBar;