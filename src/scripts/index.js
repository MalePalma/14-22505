import regiones from "../data/regiones.js";
import { createHTMLRegionsCards } from "../render/regiones.js";

document.addEventListener("DOMContentLoaded", () => {
    const TOP = 3;

    const renderClosestRegions = (position) => {

        const { coords: { latitude, longitude } } = position;

        const distance = (latitude, longitude, regionLatitude, regionLongitude) => {

            // Fórmula del semiverseno
            const earthRadius = 6371;
            const radian = Math.PI / 180;

            const radiansLatitudesDif = radian * (regionLatitude - latitude);
            const radiansLongitudesDif = radian * (regionLongitude - longitude);
            const radiansRegionLatitude = radian * regionLatitude;
            const radianslatitude = radian * latitude;

            const linearDistance =
                Math.sin(radiansLatitudesDif / 2) ** 2 +
                Math.cos(radianslatitude) *
                Math.cos(radiansRegionLatitude) *
                Math.sin(radiansLongitudesDif / 2) ** 2;

            const distanceAngle = 2 * Math.atan2(Math.sqrt(linearDistance), Math.sqrt(1 - linearDistance));
            return Math.floor(earthRadius * distanceAngle);

        }

        const median = (distances) => {
            // Formula para calcular la mediana
            const sorted = distances.sort((a, b) => a - b);
            const middle = Math.floor(sorted.length / 2);
            return distances.length % 2 === 0 ? (sorted[middle - 1] + sorted[middle]) / 2 : sorted[middle];
        }

        const regions = regiones.map(region => ({ ...region, dist: distance(latitude, longitude, region.coordenadas.lat, region.coordenadas.long) }));

        const distances = regions.map(region => region.dist);
        const medianDist = median(distances);

        const closestRegions = regions.filter(region => region.dist < medianDist).sort((r1, r2) => r1.dist - r2.dist).slice(0, TOP);

        createHTMLRegionsCards(closestRegions, true);
    };

    const renderTopRegions = () => {
        const mostVisitedRegions = regiones.slice(0, TOP);
        createHTMLRegionsCards(mostVisitedRegions, false);
    }

    navigator.geolocation.getCurrentPosition(renderClosestRegions, renderTopRegions);

});
