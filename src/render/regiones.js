import climas from "../data/climas.js";

/**
 * Función asíncrona para renderizar las distintas regiones a visitar incluido menú de selección.
 * Se utiliza la API open-meteo para obtener previsión meteorológica a 3 días de cada una de las regiones.
 *
 * @returns { null }
 *
 * @param { Array.<{
 *            titulo: string,
 *            video: string,
 *            descripcion: { contenido: string, img: string },
 *            coordenadas: { lat: number, long: number },
 *            fauna: Array.<{ nombre: string, img: string }>,
 *            flora: Array.<{ nombre: string, img: string }>,
 *          }> } regions - Listado de regiones a mostrar en documento.
 */
async function createHTMLRegions(regions) {
    const template = document.getElementById("region-template");
    const container = document.getElementById("main-content");

    regions.forEach(async (region, index) => {
        const node = template.content.cloneNode(true);

        if (index === 0) node.querySelector(".destino").classList.add("visible");

        node.querySelector(".region-video").setAttribute("src", region.video);
        node.querySelector(".region-title").textContent = region.titulo;
        node.querySelector(".region-description").textContent =
            region.descripcion.contenido;
        node
            .querySelector(".region-description-img")
            .setAttribute("src", region.descripcion.img);

        const fauna = createHTMLImages(region.fauna);
        const flora = createHTMLImages(region.flora);
        const forecasts = await createHTMLForecast(
            region.coordenadas.lat,
            region.coordenadas.long
        );

        node
            .querySelector(".fauna-section .grid-container-fauna-flora")
            .append(fauna);
        node
            .querySelector(".flora-section .grid-container-fauna-flora")
            .append(flora);
        node
            .querySelector(".forecast-section .grid-container-fauna-flora")
            .append(forecasts);

        node.querySelector(".destino").setAttribute("id", region.titulo);


        createRegionMenuItem(region);
        container.append(node);
    });

    return null;

    async function createHTMLForecast(lat, lon) {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`;

        const response = await fetch(url);
        const { daily } = await response.json(); // Destructuracion de objectos en JS.
        const timeRange = daily.time.slice(0, 3); // Solo usamos 3 días.
        const fragment = document.createDocumentFragment();

        timeRange.forEach((time, index) => {
            const code = daily.weathercode[index];

            const min = daily.temperature_2m_min[index];
            const max = daily.temperature_2m_max[index];
            const weather = climas[code];

            const container = document.createElement("div");
            const htmlMin = document.createElement("p");
            const htmlMax = document.createElement("p");
            const htmlWeather = document.createElement("p");
            const htmlTime = document.createElement("time"); //<time></time>

            htmlMin.textContent = `Min: ${min} °C`; // <p>15 °C</p>
            htmlMax.textContent = `Max: ${max} °C`; // <p>30 °C</p>
            htmlWeather.textContent = weather; // <p>Parcialmente Nublado</p>

            htmlTime.textContent = time; //<time>2011-11-18</time>
            htmlTime.setAttribute("datetime", time); //<time datetime="2011-11-18">2011-11-18</time>
            container.append(htmlTime, htmlWeather, htmlMin, htmlMax);
            fragment.append(container);
        });

        return fragment;
    }

    function createHTMLImages(items) {
        const fragment = document.createDocumentFragment();

        items.forEach((item) => {
            const figure = document.createElement("figure");
            const figcaption = document.createElement("figcaption");
            const img = document.createElement("img");

            figcaption.textContent = item.nombre;

            img.setAttribute("src", item.img);
            img.setAttribute("alt", item.nombre);

            figure.append(img, figcaption);
            fragment.append(figure);
        });

        return fragment;
    }

    function createRegionMenuItem(region) {
        const menu = document.getElementById("region-selector");
        const li = document.createElement("li");
        const button = document.createElement("button");

        button.setAttribute("value", region.titulo);
        button.textContent = region.titulo;

        button.addEventListener("click", (event) => {
            const regionToShow = document.getElementById(event.target.value);
            const currentVisibleRegion = document.querySelector(".destino.visible");


            // Pausar todos los videos
            const iframes = [...document.querySelectorAll("iframe")];
            const pauseCommand = JSON.stringify({
                event: "command",
                func: "stopVideo",
            });

            iframes.forEach((iframe) =>
                iframe.contentWindow.postMessage(pauseCommand, '*')
            );
            // 

            if (currentVisibleRegion)
                currentVisibleRegion.classList.remove("visible");

            regionToShow.classList.add("visible");
        });

        li.append(button);
        menu.append(li);
    }
}

export default createHTMLRegions;
