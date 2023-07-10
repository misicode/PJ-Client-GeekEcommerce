import WhatsAppIcon from "../Icons/WhatsAppIcon/WhatsAppIcon";
import EmailIcon from "../Icons/EmailIcon/EmailIcon";

const year = (new Date()).getFullYear();

const Footer = () => {
  return (
    <footer className="pt-8 px-6 sm:px-12 md:px-16 lg:px-24 text-gray-700 dark:text-gray-400 bg-gray-200 dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] md:gap-16 lg:gap-48 xl:gap-96">
        <div>
          <a href="#" className="flex items-center">
            <div className="w-11">
              <img className="h-10" src="logo.svg" alt="Logo TecnoCat" />
            </div>
            <span className="pl-2 text-3xl font-primary font-medium text-primary-500">
              TecnoCat
            </span>
          </a>
          <p className="mt-4">
            Tienda online especializada en videojuegos, consolas y accesorios del mundo gamer.
          </p>
          <div className="flex mt-5 text-sm items-center">
            <WhatsAppIcon />
            <div className="ml-3">
              <p className="mb-1 font-medium">WhatsApp</p>
              <p>+51 999 999 999</p>
            </div>
          </div>
          <div className="flex mt-2 text-sm items-center">
            <EmailIcon />
            <div className="ml-3">
              <p className="mb-0.5 font-medium">Correo</p>
              <p>tecnocat@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="grid mt-6 md:mt-3 grid-cols-2 gap-8 sm:gap-6">
          <div>
            <h4 className="mb-6 font-bold uppercase text-primary-600">
              Información
            </h4>
            <ul className="flex flex-wrap flex-col text-sm space-y-4">
              <li className="last:mr-0 md:mr-6">
                <a href="#" className="hover:text-black dark:hover:text-white">
                  Preguntas Frecuentes
                </a>
              </li>
              <li className="last:mr-0 md:mr-6">
                <a href="#" className="hover:text-black dark:hover:text-white">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-bold uppercase text-primary-600">
              Enlaces
            </h4>
            <ul className="flex flex-wrap flex-col text-sm space-y-4">
              <li className="last:mr-0 md:mr-6">
                <a href="#" className="hover:text-black dark:hover:text-white">
                Sitio web
                </a>
              </li>
              <li className="last:mr-0 md:mr-6">
                <a href="https://github.com/misicode/PJ-Client-GeekEcommerce" className="hover:text-black dark:hover:text-white" target="_blank" rel="noreferrer">
                Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mt-6 mb-3 lg:mt-8 lg:mb-5 border-gray-300 dark:border-gray-600" />
      <div className="pb-3 lg:pb-5 font-medium tracking-wide text-center">
        <p className="text-sm">
          © { year } Learning and Programming | Coded by { " " }
          <a href="https://github.com/misicode" className="text-primary-600 font-bold" target="_blank" rel="noreferrer">
            MISICODE
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
