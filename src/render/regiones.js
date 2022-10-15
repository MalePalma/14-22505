import climas from "../data/climas.js";

function createHTMLRegions(regions) {

    const template = document.getElementById("region-template");
    const container = document.querySelector(".main-container main");
    const regionSelector = document.getElementById("region-selector");
    const regionSelected = sessionStorage.getItem("regionSelected") || regions[0].titulo;


    regions.forEach(async (region) => {

        const node = template.content.cloneNode(true);
        const isSelected = region.titulo === regionSelected;


        const wildlife = createHTMLImages(region.fauna);
        const plants = createHTMLImages(region.flora);
        const forecasts = await createHTMLForecast(region.coordenadas.lat, region.coordenadas.long);


        const item = createRegionMenuItem(region.titulo, isSelected);


        node.querySelector(".region-video").setAttribute("src", region.video);
        node.querySelector(".region-title").textContent = region.titulo;
        node.querySelector(".region-description").textContent = region.descripcion.contenido;
        node.querySelector(".region-description-img").setAttribute("src", region.descripcion.img);


        node.querySelector(".fauna-section .grid-container-fauna-flora").append(wildlife);
        node.querySelector(".flora-section .grid-container-fauna-flora").append(plants);
        node.querySelector(".forecast-section .grid-container-fauna-flora").append(forecasts);


        node.querySelector(".destino").setAttribute("id", region.titulo);


        if (isSelected) {
            node.querySelector(".destino").classList.add("visible");
        } else {
            node.querySelector(".destino").classList.add("invisible");
        }


        regionSelector.append(item);
        container.append(node);
    })



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


    function createRegionMenuItem(regionTitle, isSelected) {

        const li = document.createElement("li");
        const button = document.createElement("button");

        button.setAttribute("value", regionTitle);
        button.textContent = regionTitle;

        if (isSelected) {
            button.classList.add("selected");
        }


        button.addEventListener("click", (event) => {

            const regionToShow = document.getElementById(event.target.value);

            const currentVisibleRegion = document.querySelector(".destino.visible");
            const currentSelectedButton = document.querySelector("#region-selector button.selected");

            const iframes = [...document.querySelectorAll("iframe")];
            const pauseCommand = JSON.stringify({ event: "command", func: "stopVideo" });

            iframes.forEach((iframe) => iframe.contentWindow.postMessage(pauseCommand, "*"));

            if (currentVisibleRegion && currentSelectedButton) {
                currentVisibleRegion.classList.replace("visible", "invisible")
                currentSelectedButton.classList.remove("selected");
            }

            regionToShow.classList.replace("invisible", "visible");
            event.target.classList.add("selected");

            sessionStorage.setItem("regionSelected", regionTitle);
        });

        li.append(button);
        return li
    }
}



function createHTMLRegionsCards(regions) {

    const template = document.getElementById("region-card-template");
    const fragment = document.createDocumentFragment();
    const container = document.querySelector(".main-container .grid-container");

    regions.forEach((region) => {

        const node = template.content.cloneNode(true);

        node.querySelector(".region-card-title").textContent = region.titulo;
        node.querySelector(".region-card-img").setAttribute("src", region.descripcion.img);
        node.querySelector(".region-card-img").setAttribute("alt", region.titulo);
        node.querySelector(".region-card-content").textContent = region.descripcion.contenido;
        node.querySelector(".region-card-link").setAttribute("value", region.titulo);

        node.querySelector(".region-card-link").addEventListener("click", (event) => {
            sessionStorage.setItem("regionSelected", event.target.value);
            window.location.assign("./destinos.html");
        });

        fragment.append(node);
    });

    container.append(fragment);
}

export { createHTMLRegionsCards, createHTMLRegions };
