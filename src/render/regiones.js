import climas from "../data/climas.js";
import regiones from "../data/regiones.js";


async function createHTMLRegion(selectedId) {

    const template = document.getElementById("region-template");
    const prevRegion = document.querySelector(".destino");
    const main = document.querySelector("main");

    const region = regiones.find(region => region.id == selectedId);
    const node = template.content.cloneNode(true);

    const wildlife = createHTMLImages(region.fauna);
    const plants = createHTMLImages(region.flora);
    const forecasts = await createHTMLForecast(region.coordenadas.lat, region.coordenadas.long);

    node.querySelector(".region-video").setAttribute("src", region.video);
    node.querySelector(".region-title").textContent = region.titulo;
    node.querySelector(".region-description").textContent = region.descripcion.contenido;
    node.querySelector(".region-description-img").setAttribute("src", region.descripcion.img);

    node.querySelector(".fauna").append(wildlife);
    node.querySelector(".flora").append(plants);
    node.querySelector(".clima").append(forecasts);


    if (prevRegion) {
        prevRegion.remove()
    }

    main.append(node);

    async function createHTMLForecast(lat, lon) {

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`;

        const MAX_DAYS = 3;

        const response = await fetch(url);
        const { daily } = await response.json();
        const timeRange = daily.time.slice(0, MAX_DAYS);

        const fragment = document.createDocumentFragment();

        timeRange.forEach((time, index) => {


            const code = daily.weathercode[index];
            const weather = climas[code];


            const min = daily.temperature_2m_min[index];
            const max = daily.temperature_2m_max[index];


            const container = document.createElement("div");
            const htmlMin = document.createElement("p");
            const htmlMax = document.createElement("p");
            const htmlWeather = document.createElement("p");
            const htmlTime = document.createElement("time");


            htmlMin.textContent = `Min: ${min} °C`;
            htmlMax.textContent = `Max: ${max} °C`;
            htmlWeather.textContent = weather;


            htmlTime.textContent = time;
            htmlTime.setAttribute("datetime", time);

            container.classList.add("forecast");
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


}

function createRegionsMenu(storedRegion) {

    const regionSelector = document.getElementById("region-selector");
    const fragment = document.createDocumentFragment();

    regiones.forEach((region) => {

        const li = document.createElement("li");
        const button = document.createElement("button");

        button.setAttribute("value", region.id);
        button.setAttribute("id", region.titulo);
        button.textContent = region.titulo;

        if (region.id == storedRegion) {
            button.classList.add("selected");
        }

        button.addEventListener("click", async (event) => {

            const currentSelectedButton = document.querySelector("#region-selector button.selected");

            if (currentSelectedButton.value != event.target.value) {
                currentSelectedButton.classList.remove("selected");
                await createHTMLRegion(event.target.value);
                event.target.classList.add("selected");
                sessionStorage.setItem("selectedRegion", event.target.value);
            }

        });

        li.append(button);
        fragment.append(li);
    })

    regionSelector.append(fragment);
}


function createHTMLRegionsCards(regions, showDistance = false) {

    const template = document.getElementById("region-card-template");
    const fragment = document.createDocumentFragment();
    const container = document.querySelector(".main-container .grid-container");

    regions.forEach((region) => {

        const node = template.content.cloneNode(true);

        node.querySelector(".region-card-title").textContent = region.titulo;
        node.querySelector(".region-card-img").setAttribute("src", region.descripcion.img);
        node.querySelector(".region-card-img").setAttribute("alt", region.titulo);
        node.querySelector(".region-card-content").textContent = region.descripcion.contenido;
        node.querySelector(".region-card-link").setAttribute("value", region.id);


        if (showDistance) {
            node.querySelector(".region-card-distance-container").classList.replace("invisible", "visible");
            node.querySelector(".region-card-distance").textContent = `${region.dist} km`
        }

        node.querySelector(".region-card-link").addEventListener("click", (event) => {
            sessionStorage.setItem("selectedRegion", event.target.value);
            window.location.assign("./destinos.html");
        });

        fragment.append(node);
    });

    container.append(fragment);
}

export { createHTMLRegionsCards, createRegionsMenu, createHTMLRegion };
