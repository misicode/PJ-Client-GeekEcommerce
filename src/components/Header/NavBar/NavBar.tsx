import { useState } from 'react';

import { convertText } from '../../../helpers/convertText';
import { DropdownOption } from '../../../types/menu';

import DropdownHoverList from '../../Parts/Dropdown/DropdownHoverList';

const accessories: DropdownOption[] = [
  { value: "ACC1", label: convertText("ACCESORIO 1") },
  { value: "ACC2", label: convertText("ACCESORIO 2") },
  { value: "ACC3", label: convertText("ACCESORIO 3") },
];
const collectibles: DropdownOption[] = [
  { value: "COL1", label: convertText("COLECCIONABLE 1") },
  { value: "COL2", label: convertText("COLECCIONABLE 2") },
];
const consoles: DropdownOption[] = [
  { value: "CON1", label: convertText("CONSOLA 1") },
  { value: "CON2", label: convertText("CONSOLA 2") },
  { value: "CON2", label: convertText("CONSOLA 3") },
];
const cards: DropdownOption[] = [
  { value: "CAR1", label: convertText("TARJETA 1") },
  { value: "CAR2", label: convertText("TARJETA 2") },
];
const videogames: DropdownOption[] = [
  { value: "VID1", label: convertText("VIDEOJUEGO 1") },
  { value: "VID2", label: convertText("VIDEOJUEGO 2") },
  { value: "VID3", label: convertText("VIDEOJUEGO 3") },
];

const NavBar = () => {
  return (
    <nav className="flex pb-8 font-medium justify-center">
      <DropdownHoverList
        firstOption="ACCESORIOS"
        options={ accessories }
      />
      <DropdownHoverList
        firstOption="COLECCIONABLES"
        options={ collectibles }
      />
      <DropdownHoverList
        firstOption="CONSOLAS"
        options={ consoles }
      />
      <DropdownHoverList
        firstOption="TARJETAS"
        options={ cards }
      />
      <DropdownHoverList
        firstOption="VIDEOJUEGOS"
        options={ videogames }
      />
    </nav>
  );
};

export default NavBar;
