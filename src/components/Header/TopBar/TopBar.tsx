import ToggleTheme from "../../Parts/ToggleTheme/ToggleTheme";
import SelectorLC from "../../Parts/SelectorLC/SelectorLC";

const TopBar = () => {
  return (
    <div className="fixed lg:static z-40 flex right-0 py-3 lg:py-0 pr-6 sm:pr-12 md:pr-16 lg:px-24 items-center justify-between bg-gray-100 dark:bg-gray-900">
      <SelectorLC />
      <div className="flex-1"></div>
      <div className="flex items-center">
        <a href="#" className="hidden lg:block px-4 hover:text-primary-500">
          SUSCRÍBETE
        </a>
        <a href="#" className="hidden lg:block px-4 hover:text-primary-500 border-l-2 border-gray-300 dark:border-gray-700">
          PREGUNTAS
        </a>
        <ToggleTheme />
      </div>
    </div>
  );
};

export default TopBar;
