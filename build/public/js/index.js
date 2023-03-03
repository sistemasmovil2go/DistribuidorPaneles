/*

    The jsonDashboard contains the data structure for the entire url's that i need to show into the index page

*/

/*
    Dashboards M2G Version 3.0
    Comentarios: 
    1. Se usa un hibrido entre la versión anterior de botones secuenciales sin orden
    y un menu multinivel de opciones

    Actualizaciones:
    14-11-2022: Se agrega botones (Claro y TVCable) como enlaces en el menu principal
    21-11-2022: Se corrige bug de muestreo del menú en pantallas FullHD
    31-01-2023: Se agrega barra de busquedas y se refactoriza el código


    Corregir:
    - Activar el dashboard sin la funcion inicial
    - Implementar un bucle de acuerdo al nuevo arreglo
    - Depender de dos json a solo uno
    - Generar un json unidimensional de todos los elementos tipo dashboard para el bucle DONE
*/

import { sideMenuTree, defaultDashboard } from "./constants.js";
import {
  iniciarBucle,
  recorrerMenu,
  eventListeners,
  dashboardsTree,
} from "./scripts.js";
import { searchBar } from "./searchBar.js";

/* 

    El idBucle funciona para obtener el bucle que esta ejecutándose en ese momento

    Esta instruccion inicializa el proceso del documento

*/

// Bucle está activo

let idBucle = iniciarBucle(defaultDashboard);

recorrerMenu(sideMenuTree, "dashboard-container-menu");
searchBar(dashboardsTree);

//let variable = Array.from(document.getElementsByClassName("menu-button"));

Array.from(document.getElementsByClassName("menu-button")).forEach(
  (element) => {
    element.setAttribute("style", "pointer-events: none;");
  }
);
eventListeners();
