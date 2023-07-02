import { useEffect, useRef, useState } from "react";

export const useToggleDropdown = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    setIsOpen,
    dropdownRef,
    toggleDropdown,
  };
};
