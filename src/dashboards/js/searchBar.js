import { activarDashboard } from "./scripts.js";

export function searchBar(dashboardsTree) {
  let resultsContainer = document.getElementById("results");
  let searchBar = document.getElementById("search-bar");
  let searchInput = "";

  resultsContainer.addEventListener(
    "mouseleave",
    () => (resultsContainer.style.display = "none")
  );

  searchBar.addEventListener("focus", (event) => {
    searchBar.setAttribute("placeholder", "");
    if (searchInput) resultsContainer.style.display = "block";
  });

  searchBar.addEventListener("click", (event) => {
    if (searchInput) resultsContainer.style.display = "block";
  });

  searchBar.addEventListener("blur", (event) => {
    searchBar.setAttribute("placeholder", "⌕ Búsqueda");
  });

  searchBar.addEventListener("input", (event) => {
    // Se muestra el contenedor de resultados
    resultsContainer.replaceChildren([]);
    resultsContainer.style.display = "block";
    // Se filtra lo que se escribe
    searchInput = event.target.value;
    let searchList = searchInput.toLowerCase().split(" ");
    // console.log("Search List", searchList);
    const suggestions = dashboardsTree.filter((element) =>
      filtrar(element.txtButton.toLowerCase(), searchList)
    );
    // console.log("Results", suggestions);
    suggestions.forEach((suggestion) => {
      let option = document.createElement("div");
      option.innerHTML = suggestion.txtButton;
      option.addEventListener("click", () =>
        activarDashboard(suggestion.id, suggestion.url)
      );

      resultsContainer.appendChild(option);
    });
  });

  function filtrar(dashboardName, searchList) {
    let coincidencias = 0;
    searchList.forEach((palabra) => {
      if (dashboardName.includes(palabra)) coincidencias++;
    });
    if (coincidencias === searchList.length) return true;
    else return false;
  }
}
