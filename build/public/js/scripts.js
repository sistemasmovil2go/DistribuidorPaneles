// --- Metodos del documento --- //

// -- Método de Recorrido del Menú Multidinámico -- //

export let dashboardsTree = [];

export function recorrerMenu(tree, parentId) {
  tree.forEach((element) => {
    let parent = document.getElementById(parentId);
    // console.log(element.txtButton);
    // console.log(element.type);
    let htmlText;
    switch (element.type) {
      case "menu":
        console.log("Se recorrerá un menú");
        htmlText = `<li> 
        <div class="dropdown menu"> 
        <button class="btn btn-secondary dropdown-toggle menu-button" type="button" id="${element.idButton}" data-bs-toggle="dropdown" aria-expanded="false">
        ${element.txtButton}
        </button>
        <ul class="dropdown-menu" id="${element.idDropDown}" aria-labelledby="dropdownMenuButton1">
        </ul>
        </div>
        </li>`;
        parent.innerHTML += htmlText;
        break;
      case "submenu":
        console.log("Se recorrerá un submenu");
        htmlText = `<li> 
          <div class="dropdown submenu"> 
          <button class="btn dropdown-toggle menu-button" type="button" id="${element.idButton}" data-bs-toggle="dropdown" aria-expanded="false">${element.txtButton}</button> 
          <ul class="dropdown-menu" id="${element.idDropDown}" aria-labelledby="dropdownMenuButton1"> 
          </ul> 
          </div> 
          </li>`;

        parent.innerHTML += htmlText;
        break;
      case "dashboard":
        dashboardsTree.push({
          txtButton: element.txtButton,
          url: element.url,
          id: element.id,
        });
        console.log("Se imprime un dashboard");
        htmlText = `<li> 
          <button
          id="${element.idButton}"
          class="dropdown-item"
          href="${element.url}"
          name="${element.id}}"> 
          ${element.txtButton} 
          </button> 
          </li>`;
        parent.innerHTML += htmlText;
        break;
      default:
        console.log("XD");
        break;
    }

    if (element.items != null) {
      recorrerMenu(element.items, element.idDropDown);
    } else {
      return;
    }
  });
}

// Fin metodo recorrer menu multidinámico

// document.body.addEventListener("mousemove", function (event) {
//   //Esucha si el cursor esta en el tope de la pantalla y oculta o muestra el div topOfBody segun eso
//   //Segun la resolucion de pantalla se espera que el % esté por debajo del 60% para mostrar el menu

//   if (event.pageX < window.screen.width * 0.6) {
//     document.getElementById("topOfBody").removeAttribute("hidden");
//   } else {
//     document.getElementById("topOfBody").setAttribute("hidden", "");
//   }
// });

// let buttons = document.querySelectorAll(".dropdown-item");
// buttons.forEach((button) => {
//   // Agrega un eventListener a cada button de la clase dropdown-item

//   const url = button.getAttribute("href");
//   const id = button.getAttribute("name");
//   button.addEventListener("click", () => activarDashboard(id, url));
// });

export function activarDashboard(id, url) {
  // Genera el dashboard segun el id y el url recibidos

  document.getElementById("dashboard-container").innerHTML =
    '<iframe class="dashboard" src="' + url + '" id="' + id + '"></iframe>';
}

export function iniciarBucle(defaultDashboard) {
  //Se ejecuta el primer dashboard para luego ejecutar los que siguen

  // console.log("Se imprime el dashboard predeterminado");
  activarDashboard(defaultDashboard[0]["id"], defaultDashboard[0]["url"]);

  let segundo = 0;
  let iteradorDashboard = 0;

  let varBucle = setInterval(function () {
    segundo++;

    if (segundo % getTiempoCambio("horas", 1) == 0) {
      console.log("pasaron " + getTiempoCambio("horas", 1) + " horas");
      iteradorDashboard++;

      if (iteradorDashboard == defaultDashboard.length) {
        iteradorDashboard = 0;
        console.log(
          "Se imprime = " + defaultDashboard[iteradorDashboard]["id"]
        );

        activarDashboard(
          defaultDashboard[iteradorDashboard]["id"],
          defaultDashboard[iteradorDashboard]["url"]
        );
      } else {
        console.log(
          "Se imprime = " + defaultDashboard[iteradorDashboard]["id"]
        );

        activarDashboard(
          defaultDashboard[iteradorDashboard]["id"],
          defaultDashboard[iteradorDashboard]["url"]
        );
      }
    }
  }, 1000);

  //document.getElementById('inicioPausaBucle').innerText = "Desactivar Bucle";

  //insertarDashboardBotones("disabled");

  return varBucle;
}

function getTiempoCambio(tipoTiempo, cantTiempo) {
  let segundos;

  switch (tipoTiempo) {
    case "segundos":
      segundos = cantTiempo;
      break;

    case "minutos":
      segundos = cantTiempo * 60;
      break;

    case "horas":
      segundos = cantTiempo * 60 * 60;
      break;
  }
  return segundos;
}

export function eventListeners() {
  document.body.addEventListener("mousemove", function (event) {
    //Esucha si el cursor esta en el tope de la pantalla y oculta o muestra el div topOfBody segun eso
    //Segun la resolucion de pantalla se espera que el % esté por debajo del 60% para mostrar el menu

    if (event.pageX < window.screen.width * 0.6) {
      document.getElementById("topOfBody").removeAttribute("hidden");
    } else {
      document.getElementById("topOfBody").setAttribute("hidden", "");
    }
  });

  let buttons = document.querySelectorAll(".dropdown-item");
  buttons.forEach((button) => {
    // Agrega un eventListener a cada button de la clase dropdown-item

    const url = button.getAttribute("href");
    const id = button.getAttribute("name");
    button.addEventListener("click", () => activarDashboard(id, url));
  });
}

// ------------------------------------------------------------------------------------------------------------ //

// --- Métodos deprecados o sin uso --- //
//@deprecated
function activarDesactivarBucle() {
  // De acuerdo al mensaje que contenga el boton de gestión del bucle, se activa o desactiva
  let estadoBoton = document.getElementById("inicioPausaBucle").innerText;
  if (estadoBoton === "Desactivar Bucle") {
    detenerBucle(idBucle);
  } else {
    idBucle = iniciarBucle();
  }
}

//@deprecated
function findAndExecuteDashboard(idDashboard) {
  let dashboard = defaultDashboard.find(
    (element) => element.id === idDashboard
  );
  activarDashboard(dashboard.id, dashboard.url);
}

//@deprecated
function ocultarPanel() {
  document.getElementById("topOfBody").setAttribute("hidden", "");
}

//@deprecated
function detenerBucle(idBucle) {
  //Se obtiene el id del bucle que es variable global y se desactiva
  clearInterval(idBucle);
  document.getElementById("inicioPausaBucle").innerText = "Activar Bucle";
  insertarDashboardBotones("enabled");
}

//@deprecated
function insertarDashboardBotones(attributeSetted) {
  //Recorre todos los dashboards en el json y crea sus botones de activacion
  let htmlButton;
  document.getElementById("dashboardButtons").innerHTML = null;
  defaultDashboard.forEach((element) => {
    htmlButton =
      '<button id="' +
      element.idButtonAsigned +
      '" onclick="findAndExecuteDashboard(\'' +
      element.id +
      "')\" " +
      attributeSetted +
      ">" +
      element.textButtonAsigned +
      "</button>";
    document.getElementById("dashboardButtons").innerHTML += htmlButton;
  });
}
