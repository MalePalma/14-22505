const regiones = [
  {
    titulo: "Esteros del Iberá",
    video: "https://www.youtube.com/embed/8Y6eGFI_NQI?enablejsapi=1",
    descripcion: {
      contenido:
        "La Reserva Provincial del Iberá es un área protegida dentro de los extensos Esteros del Iberá, en el noreste de Argentina. Abarca pantanos, ciénagas y lagunas que se extienden al suroeste desde la ciudad de Ituzaingó hasta Chavarría.",
      img: "img/esteros-del-ibera.png",
    },
    coordenadas: {
      lat: -28.6,
      long: -57.817,
    },
    fauna: [
      {
        nombre: "Panthera onca",
        img: "img/fauna-jaguarete.jpg",
      },
      {
        nombre: "Hydrochoerus hydrochaeris",
        img: "img/fauna-carpincho.jpg",
      },
      {
        nombre: "Blastocerus dichotomus",
        img: "img/fauna-ciervo.jpg",
      },
    ],
    flora: [
      {
        nombre: "Sagittaria sagittifolia",
        img: "img/flora-flecha-agua.jpg",
      },
      {
        nombre: "Victoria cruziana",
        img: "img/flora-irupe.jpg",
      },
      {
        nombre: "Commelina erecta",
        img: "img/flora-santa-lucia.jpg",
      },
    ],
  },

  {
    titulo: "Cataratas del Iguazú",
    video: "https://www.youtube.com/embed/9lfMb20QLXg?enablejsapi=1",
    descripcion: {
      contenido:
        "Las Cataratas de Iguazú fueron elegias como una de las «Siete maravillas naturales del mundo». Este conjunto de cataratas, formadas por 275 saltos, se encuentran al límite entre la provincia de Misiones y el Estado Brasileño de Parná.",
      img: "img/cataratas-iguazu.png",
    },
    coordenadas: {
      lat: -25.695278,
      long: -54.436667,
    },
    fauna: [
      {
        nombre: "Ramphastos toco",
        img: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/96276931/900",
      },
      {
        nombre: "Cypseloides senex",
        img: "https://pbs.twimg.com/media/Ee9pYKAXYAAIBOa.jpg",
      },
      {
        nombre: "Leopardus pardalis",
        img: "https://www.faunia.es/content/dam/fau/images/descubre-faunia/planea-tu-visita/animales/mami%CC%81feros/ocelote/Ocelote-Animales-Faunia-5.jpg",
      },
    ],
    flora: [
      {
        nombre: "Aspidosperma polyneuron",
        img: "https://mapio.net/images-p/38918263.jpg",
      },
      {
        nombre: "Orchidaceae",
        img: "https://t1.uc.ltmcdn.com/es/posts/6/5/5/como_cuidar_las_orquideas_en_verano_26556_600.jpg",
      },
      {
        nombre: "Filicopsida",
        img: "https://t2.ev.ltmcdn.com/es/posts/5/0/0/dryopteris_wallichiana_o_cabeza_de_chivo_3005_6_600.jpg",
      },
    ],
  },

  {
    titulo: "Glaciar Perito Moreno",
    video: "https://www.youtube.com/embed/J0SMosOsQoA?enablejsapi=1",
    descripcion: {
      contenido:
        "El Calafate se encuentra al borde del Campo de Hielo Patagónico Sur en la provincia de Santa Cruz. Es el acceso al Parque Nacional Los Glaciares, hogar del enorme glaciar Perito Moreno, cuyo dinámico paisaje de hielo es popular para el turismo.",
      img: "img/glaciar-perito-moreno.png",
    },
    coordenadas: {
      lat: -50.483333,
      long: -73.05,
    },
    fauna: [
      {
        nombre: "Vultur gryphus",
        img: "https://mymodernmet.com/wp/wp-content/uploads/2020/07/Andean-Condor-Flying-thumbnail.jpg",
      },
      {
        nombre: "Hippocamelus bisulcus",
        img: "https://argentear.com/wp-content/uploads/2020/06/Huemul.jpg",
      },
      {
        nombre: "Lycalopex culpaeus",
        img: "https://cordobainteriorinforma.com/wp-content/contenidos/2021/06/zoro-scaled.jpg",
      },
    ],
    flora: [
      {
        nombre: "Nothofagus pumilio",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Nothofagus_pumilio.jpg/1200px-Nothofagus_pumilio.jpg",
      },
      {
        nombre: "Berberis microphylla",
        img: "https://i0.wp.com/laderasur.com/wp-content/uploads/2022/01/planta-de-calafate-berberis-microphylla-creditos-maria-teresa-pino.jpg?ssl=1",
      },
      {
        nombre: "Festuca gracillima",
        img: "http://1.bp.blogspot.com/-K19uLKHE6r8/Upo_vsarR1I/AAAAAAAABMY/IvjlA5phXSg/s1600/Coiron+(Festuca+gracillima).JPG",
      },
    ],
  },

  {
    titulo: "Valle de la luna",
    video: "https://www.youtube.com/embed/OfelcybWSFY?enablejsapi=1",
    descripcion: {
      contenido:
        "El Valle de la Luna pertenece al Parque Natural Provincial Ischigualasto, que se encuentra a 80 km. de San Agustín del Valle Fértil. El circuito del Valle de la Luna tiene aproximadamente 40km y realiza en vehículo alrededor de 3 hrs.",
      img: "https://www.ngenespanol.com/wp-content/uploads/2018/08/Valle-de-la-luna-1280x720.jpg",
    },
    coordenadas: {
      lat: -30.16385,
      long: -67.84254,
    },
    fauna: [
      {
        nombre: "Chaetophractus nationi",
        img: "https://www.eltucumano.com/fotos/notas/2018/12/17/181217100903_83179.jpg",
      },
      {
        nombre: "Puma concolor cabrerae",
        img: "https://laeragatera.com/wp-content/uploads/2021/11/puma.jpg",
      },
      {
        nombre: "Lagostomus maximus",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgxlm1pDcCmpKAK-6bpyyNwnxaD4QPZDgRaBOYhfxmDKbP8aDV0m4fzarw25OnH5KtmZQ&usqp=CAU",
      },
    ],
    flora: [
      {
        nombre: "Retama sphaerocarpa",
        img: "https://www.mijardin.es/wp-content/uploads/2017/03/Retama-flor-variedades.jpg",
      },
      {
        nombre: "Echinopsis atacamensis",
        img: "https://estag.fimagenes.com/img/1/X/j/c/Xjc_900.jpg",
      },
      {
        nombre: "Prosopis flexuosa",
        img: "https://upload.wikimedia.org/wikipedia/commons/a/a8/P._Flexuosa_a%C3%B1ejo.jpg",
      },
    ],
  },

  {
    titulo: "Península de Valdés",
    video: "https://www.youtube.com/embed/RlliTKoLRBg?enablejsapi=1",
    descripcion: {
      contenido:
        "Península de Valdés es una reserva de la naturaleza patagónica, en la costa de Argentina. Es conocida por los animales marinos que habitan en el mar y las playas circundantes, como ballenas, lobos y elefantes marinos.",
      img: "img/peninsula-valdes.png",
    },
    coordenadas: {
      lat: -42.5,
      long: -63.933333,
    },
    fauna: [
      {
        nombre: "Eubalaena australis",
        img: "https://viapais.com.ar/resizer/k0Ay9DHzlv8Jqdq0pb_lterTBFg=/1200x793/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/3EICU6UUVNGDRFUT2UOXAZ22ZA.jpg",
      },
      {
        nombre: "Spheniscus magellanicus",
        img: "https://diariohoynet.nyc3.cdn.digitaloceanspaces.com/adjuntos/galerias/000/476/0000476954.jpg",
      },
      {
        nombre: "Otaria flavescens",
        img: "https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2020/10/28/5fb27e3b25a08.jpeg",
      },
    ],
    flora: [
      {
        nombre: "Chuquiraga avellanedae",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Chuquiraga_avellanedae_%289092897263%29.jpg",
      },
      {
        nombre: "Condalia microphylla",
        img: "https://inta.gob.ar/sites/default/files/styles/imagen_nodo_grande/adaptive-image/public/inta_piquillin.png?itok=1nxQb09r",
      },
      {
        nombre: "Grindelia chiloensis",
        img: "https://i2.wp.com/www.maipue.org.ar/wp-content/uploads/2015/06/Melosa-Grindelia-Ch-1.jpg?fit=640%2C640&ssl=1",
      },
    ],
  },

  {
    titulo: "Siete Lagos",
    video: "https://www.youtube.com/embed/UazmOWeHSPI?enablejsapi=1",
    descripcion: {
      contenido:
        "En San Carlos Bariloche se encuentra la famosa Ruta de los Siete Lagos que inicia en San Martín de los Andes y llega a Villa la Angostura. Ideal para el excursionismo y el esquí de montaña en invierno.",
      img: "img/siete-lagos.png",
    },
    coordenadas: {
      lat: -40.40833,
      long: -71.49417,
    },
    fauna: [
      {
        nombre: "Oncorhynchus kisutch",
        img: "https://d38zjy0x98992m.cloudfront.net/b17ab7ed-37ee-4b1b-9cd3-87081b36547b/coho-salmon-underwater-12_xgaplus.jpg",
      },
      {
        nombre: "Sus scrofa",
        img: "https://d3qgqyymz2hc8x.cloudfront.net/wp-content/uploads/2020/06/que-come-jabali-e1591641754445.jpg",
      },
      {
        nombre: "Dromiciops gliroides",
        img: "https://chileestuyo.cl/wp-content/uploads/2021/05/monito-del-monte.jpg",
      },
    ],
    flora: [
      {
        nombre: "Ribes rubrum",
        img: "https://www.arandanoselcierron.com/datos/0/Grosella_roja_Ribes_rubrum1342.jpg",
      },
      {
        nombre: "Suillus Granulatus,",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/5f/K%C3%B6rnchen-R%C3%B6hrling_Suillus_granulatus_1.jpg",
      },
      {
        nombre: "Tulipa",
        img: "https://www.picturethisai.com/wiki-image/1080/6E9101231B9C483BA95872A94B5046E6.jpeg",
      },
    ],
  },
];

export default regiones;
