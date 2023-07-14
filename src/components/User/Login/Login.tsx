import { Link } from "react-router-dom";

import Button from "../../Parts/Button/Button";
import CheckboxInput from "../../Parts/Input/CheckboxInput";
import Label from "../../Parts/Label/Label";
import PasswordInput from "../../Parts/Input/PasswordInput";
import TextInput from "../../Parts/Input/TextInput";

const Login = () => {
  return (
    <section className="relative mt-8 lg:mt-0 overflow-hidden">
      <div className="flex lg:absolute h-32 lg:h-auto lg:w-1/2 lg:inset-y-0 lg:right-0 brightness-[.65] dark:brightness-[.45] lg:filter-none items-center">
        <img
          className="object-cover lg:w-full lg:h-full"
          src="background_login.webp"
          alt="banner"
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="relative lg:w-full lg:max-w-2xl pb-14 lg:py-20 bg-white dark:bg-gray-800">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-gray-800 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>
          <div className="max-w-md mx-auto">
            <h2 className="text-4xl text-gray-100 lg:text-primary-600 font-bold [text-shadow:_-1px_1px_7px_black] lg:[text-shadow:_none] text-center -translate-y-20 lg:translate-y-0">
              BIENVENIDO
            </h2>
            <form className="flex pt-6 lg:pt-12 pb-12 px-6 flex-col gap-4">
              <div>
                <Label forLabel="email" text="Correo electrónico" labelStyle="block mb-2 font-medium" />
                <TextInput
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  required={ true }
                />
              </div>
              <div className="relative">
                <Label forLabel="password" text="Contraseña" labelStyle="block mb-2 font-medium" />
                <PasswordInput />
              </div>
              <div className="flex mb-2 gap-2 items-center">
                <CheckboxInput id="remember" />
                <Label forLabel="remember" text="Recuérdame" />
                <a href="#" className="ml-auto text-xs text-right text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <Button text="Ingresar" />
            </form>
            <p className="mx-6 pt-6 pb-4 text-sm text-gray-600 dark:text-gray-300 text-center border-t border-gray-400 dark:border-gray-600">
              ¿No tienes una cuenta?
              <Link to="/register" className="ml-2 text-primary-600 hover:text-primary-700 font-semibold">
                Regístrate
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
