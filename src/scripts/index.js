import regiones from "../data/regiones.js";
import { createHTMLRegionsCards } from "../render/regiones.js";

document.addEventListener("DOMContentLoaded", () => {

    const renderClosestRegions = (position) => {

        const { coords: { latitude, longitude } } = position;

        const distance = (lat1, long1, lat2, long2) => {
            const a = Math.pow(Math.abs(lat2) - Math.abs(lat1), 2);
            const b = Math.pow(Math.abs(long2) - Math.abs(long1), 2);
            const d = Math.sqrt(a + b);

            return Math.floor(d);
        }

        const distances = regiones.map(region => ({
            ...region, distance: distance(latitude, longitude, region.coordenadas.lat, region.coordenadas.long)
        }));

        const distancesSum = distances.reduce((sum, region) => sum + region.distance, 0);
        const distanceAvg = Math.floor(distancesSum / distances.length);

        const closestRegions = distances.filter(region => region.distance < distanceAvg);

        createHTMLRegionsCards(closestRegions);
        document.getElementById("main-title").textContent = "Destinos cercanos a vos";
        document.getElementById("closest-region-hint").classList.replace("visible", "invisible")

    };

    const renderTopRegions = () => {
        const TOP = 3;
        createHTMLRegionsCards(regiones.slice(0, TOP));
    }

    navigator.geolocation.getCurrentPosition(renderClosestRegions, renderTopRegions);

});
