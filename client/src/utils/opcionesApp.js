/* import { useState } from "react"; */

import argentina from "../assets/flags/argentina.png";
import bolivia from "../assets/flags/bolivia.png";
import brazil from "../assets/flags/brazil.png";
import chile from "../assets/flags/chile.png";
import paraguay from "../assets/flags/paraguay.png";
import spain from "../assets/flags/spain.png";
import unitedS from "../assets/flags/united-states.png";
import uruguay from "../assets/flags/uruguay.png";

import claro from "../assets/base.png";
import oscuro from "../assets/oscuro.png";

import central from "../assets/central.png";
import logo from "../assets/Logo.png";
import full from "../assets/full.png";

import agua from "../assets/PAG.png";
import plastisol from "../assets/Plastisol.png";
import relieve from "../assets/relieve.png";
import foil from "../assets/foil.png";
import glitter from "../assets/Glittr.png";
import corrocion from "../assets/corrosion.png";
import dyp from "../assets/d&p.png";

export function opcionesApp() {
  const paises = [
    { bandera: argentina, texto: "Argentina" },
    { bandera: bolivia, texto: "Bolivia" },
    { bandera: brazil, texto: "Brazil" },
    { bandera: chile, texto: "Chile" },
    { bandera: paraguay, texto: "Paraguay" },
    { bandera: spain, texto: "España" },
    { bandera: unitedS, texto: "United States" },
    { bandera: uruguay, texto: "Uruguay" },
  ];

  const logosFondo = [
    { icono: claro, texto: "Fondo Claro" },
    { icono: oscuro, texto: "Fondo Oscuro" },
  ];

  const logosEstampado = [
    { icono: logo, texto: "Logo" },
    { icono: central, texto: "Central" },
    { icono: full, texto: "Full" },
  ];

  const logosPintura = [
    { logo: agua, texto: "Pintura al agua" },
    { logo: plastisol, texto: "Plastisol" },
    { logo: relieve, texto: "Relieve" },
    { logo: foil, texto: "Foil" },
    { logo: glitter, texto: "Glitter" },
    { logo: corrocion, texto: "Corrosión" },
    { logo: dyp, texto: "Dorado y Plateado" },
  ];

  const opcionesCotizar = [
    { name: "shablones", texto: "¿Se usarán shablones usados?" },
    { name: "cotizacion", texto: "¿Conversión de U$D a ARS?" },
  ];

 

  return {
    paises,
    logosFondo,
    logosEstampado,
    logosPintura,
    opcionesCotizar,
  };
}
