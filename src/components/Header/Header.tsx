import CentralBar from "./CentralBar/CentralBar";
import TopBar from "./TopBar/TopBar";

const Header = () => {
  return (
    <header className="dark:text-gray-50">
      <TopBar />
      <CentralBar />
    </header>
  );
};

export default Header;
