import regiones from "../data/regiones.js";
import { createHTMLRegion, createRegionsMenu } from "../render/regiones.js";

document.addEventListener("DOMContentLoaded", async () => {

    const selectedRegion = sessionStorage.getItem("selectedRegion") || regiones[0].id;

    createRegionsMenu(selectedRegion);
    await createHTMLRegion(selectedRegion);

});
