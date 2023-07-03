import CentralBar from "./CentralBar/CentralBar";
import NavBar from "./NavBar/NavBar";
import TopBar from "./TopBar/TopBar";

const Header = () => {
  return (
    <header className="text-xs dark:text-white dark:bg-gray-800">
      <TopBar />
      <CentralBar />
      <NavBar />
    </header>
  );
};

export default Header;
