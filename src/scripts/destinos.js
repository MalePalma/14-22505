import regiones from "../data/regiones.js";
import createHTMLRegions from "../render/regiones.js";

document.addEventListener("DOMContentLoaded", () => createHTMLRegions(regiones));