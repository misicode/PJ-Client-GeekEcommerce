import CentralBar from "./CentralBar/CentralBar";
import NavBar from "./NavBar/NavBar";
import TopBar from "./TopBar/TopBar";

const Header = () => {
  return (
    <header className="dark:text-gray-50">
      <TopBar />
      <CentralBar />
      <NavBar />
    </header>
  );
};

export default Header;
