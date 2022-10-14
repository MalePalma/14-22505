const regiones = [
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
    titulo: "Dique Jumeal",
    video: "https://www.youtube.com/embed/",
    descripcion: {
      contenido:
        "Dique El Jumeal es un espejo de agua, rodeado por pequeñas montañas, ubicado a 4km del centro de la Ciudad de San Fernando del Valle de Catamarca. El mismo se alimenta del río El Tala, y fue construido en 1.942, su nombre proviene del “Jume” planta parecida al junco, muy común en la zona.",
      img: "https://tripin.travel/wp-content/uploads/2017/01/El-Jumeal-trekk_Carolina-Cabrera_057-fcbk-1024x538.jpg",
    },
    coordenadas: {
      lat: -28.45,
      long: -65.8167,
    },
    fauna: [
      {
        nombre: "Nannopterum brasilianum",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Phalacrocorax_brasilianus_%28Costa_Rica%29.jpg/800px-Phalacrocorax_brasilianus_%28Costa_Rica%29.jpg",
      },
      {
        nombre: "Didelphis albiventris",
        img: "https://vetmarketportal.com.ar/uploads/ckeditor/20191014204640_original.jpg",
      },
      {
        nombre: "Phyllomedusa sauvagii",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Phyllomedusa_sauvagii.jpg/1200px-Phyllomedusa_sauvagii.jpg",
      },
    ],
    flora: [
      {
        nombre: "Tillandsia aeranthos",
        img: "https://4.bp.blogspot.com/-_-tSzTYVPHY/UbsvZuqKI3I/AAAAAAAARfs/goskAAT_VyQ/s1600/Tillandsia.JPG",
      },
      {
        nombre: "Geoffroea decorticans",
        img: "https://mapio.net/images-p/17243978.jpg",
      },
      {
        nombre: "Vachellia aroma",
        img: "https://conexionanimal.com.ar/dev/wp-content/uploads/2020/05/1.jpg",
      },
    ],
  },
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
    titulo: "Parque Nacional El Impenetrable",
    video: "https://www.youtube.com/embed/",
    descripcion: {
      contenido:
        "Sus 128.000 hectáreas lo convierten en el parque nacional más grande del norte argentino, lo cual resulta de suma importancia para mantener poblaciones de grandes mamíferos declarados Monumento Natural Provincial en Chaco.En el Parque Nacional El Impenetrable se permite realizar recorridos turísticos para conocer su naturaleza y asomarse a la cultura qom, wichí y criolla.Se ubica dentro de la ecorregión del Chaco seco, subregión semiárida y subregión del Teuco- Bermejo",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Parque_Nacional_El_Impenetrable.jpg",
    },
    coordenadas: {
      lat: -25.0095,
      long: -60.9959,
    },
    fauna: [
      {
        nombre: "Myrmecophaga tridactyla",
        img: "https://i.pinimg.com/736x/81/e4/91/81e491c4b201c5e3add532033e30b8c3.jpg",
      },
      {
        nombre: "Puma concolor anthonyi",
        img: "https://laeragatera.com/wp-content/uploads/2021/11/puma.jpg",
      },
      {
        nombre: "Tapirus terrestris",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tapirus_terrestris_1.jpg/500px-Tapirus_terrestris_1.jpg",
      },
    ],
    flora: [
      {
        nombre: "Geoffroea decorticans",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/02/Arbolcha%C3%B1ar.JPG",
      },
      {
        nombre: "Ceiba speciosa",
        img: "https://www.jardineriaon.com/wp-content/uploads/2016/12/Ceiba_speciosa.jpg",
      },
      {
        nombre: "Prosopis alba",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/73/Prosopis_caldenia.jpg",
      },
    ],
  },
  {
    titulo: "Parque Nacional El Palmar",
    video: "https://www.youtube.com/embed/MzMLx0V0NV8",
    descripcion: {
      contenido:
        " Es conocido por el palmar yatay que domina el paisaje. Los caminos conducen a la Calera del Palmar, donde se encuentran las ruinas de un establecimiento jesuita, y a los miradores del arroyo Los Loros y La Glorieta, desde donde se puede observar el parque.",
      img: "https://tripin.travel/wp-content/uploads/2017/06/el-palmar-entre-rios-1.jpg",
    },
    coordenadas: {
      lat: -31.853056,
      long: -58.3225,
    },
    fauna: [
      {
        nombre: "Bothrops alternatus",
        img: "https://sib.gob.ar/api/2.0.0/resized?filename=20190603154448_Bothrops_alternatus_de_Pablo_Jolivot.jpg&size=700",
      },
      {
        nombre: "Melanerpes candidus",
        img: "https://www.freebirds.com.ar/453_500/493/Melanerpes_candidus_Obispo_ER_freebirds_480-(6).jpg",
      },
      {
        nombre: "Rhea",
        img: "https://static.inaturalist.org/photos/47965897/large.jpg",
      },
    ],
    flora: [
      {
        nombre: "Butia yatay",
        img: "https://mapio.net/images-p/51672872.jpg",
      },
      {
        nombre: "Prosopis affinis",
        img: "https://sib.gob.ar/api/2.0.0/resized?filename=20190129135224_P1030330.JPG&size=700",
      },
      {
        nombre: "Petunia axillaris",
        img: "https://4.bp.blogspot.com/-j6eBqLG_rwQ/VtXvsWMg9CI/AAAAAAAAZsA/0vr_C2nlh2k/s900/Petunias%2Ben%2Bperterres%2By%2Bmacetas.jpg",
      },
    ],
  },
  {
    titulo: "Parque Nacional Tierra del Fuego",
    video: "https://www.youtube.com/embed/9dCZeYr4oKc",
    descripcion: {
      contenido:
        "Si estás buscando conectar con la naturaleza y la historia de la ciudad más austral del mundo, el Parque Nacional Tierra del Fuego es el lugar ideal para hacerlo. El parque protege 68909 hectáreas y es el único de la República Argentina que combina ambiente marino, boscoso y de montaña dando forma a la costa marina, lagos, valles, extensas turberas y magníficos bosques.",
      img: "https://www.patagoniaandina.com/wp-content/uploads/2019/07/parque-nacional-tierra-del-fuego.jpg",
    },
    coordenadas: {
      lat: -54.666944,
      long: -68.5,
    },
    fauna: [
      {
        nombre: "Chloephaga hybrida",
        img: "https://www.freebirds.com.ar/109_147/118/DSC_7182-Chloephaga-hybrida_Mariano-Costa_Freebirds.jpg",
      },
      {
        nombre: "Lycalopex culpaeus lycoides",
        img: "http://descubrirturismo.com/wp-content/uploads/2018/04/Zorro-Colorado_-Matarasso.jpeg",
      },
      {
        nombre: "Campephilus magellanicus",
        img: "http://www.tierraspatagonicas.com/wp-content/uploads/2014/12/Carpintero-Gigante-Campephilus-magellanicus.jpg",
      },
    ],
    flora: [
      {
        nombre: "Nothofagus pumilio",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Nothofagus_pumilio.jpg/1200px-Nothofagus_pumilio.jpg",
      },
      {
        nombre: "Prunus cerasus",
        img: "https://viveroarguello.com.ar/wp-content/uploads/2016/10/guindo.jpg",
      },
      {
        nombre: "Drimys winteri",
        img: "https://fundacionphilippi.cl/wp-content/uploads/2018/10/drimys_winteri_var._chilensis_alto-huemul_rgh-1000x675.jpg",
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
    titulo: "Reserva ecológica",
    video: "https://www.youtube.com/embed/rVbib7j_keE",
    descripcion: {
      contenido:
        "Con sus 350 hectáreas, la Reserva Ecológica es el mayor espacio verde de la Ciudad de Buenos Aires y uno de los paseos preferidos para caminar, andar en bicicleta, trotar, hacer senderismo o pasar el día en familia durante el fin de semana.",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/06/7e/d4/reserva-ecologica.jpg?w=1200&h=-1&s=1",
    },
    coordenadas: {
      lat: -34.5397,
      long: -58.4439,
    },
    fauna: [
      {
        nombre: "Amazonetta brasiliensis",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/63/Amazonetta_brasiliensis.jpg",
      },
      {
        nombre: "Phrynops hilarii",
        img: "https://www.reservacostanera.com.ar/wp-content/uploads/2015/12/tortu-laguna-JST-7-12-15.jpg",
      },
      {
        nombre: "Lasiurus cinereus",
        img: "http://www.ecoregistros.org/site/images/dataimages/2021/10/22/467301/DSC_0809--3-.JPG",
      },
    ],
    flora: [
      {
        nombre: "Salix humboldtiana",
        img: "https://i0.wp.com/www.maipue.org.ar/wp-content/uploads/2017/07/Salix-humboltiana-65-8-e1499105743623_opt.jpg?fit=500%2C500&ssl=1",
      },
      {
        nombre: "Juncus",
        img: "https://static.inaturalist.org/photos/50978777/large.jpg",
      },
      {
        nombre: "Erythrina crista-galli",
        img: "https://resizer.glanacion.com/resizer/qBwuUzO7n5epCNkTp9MPYoXMSSM=/1920x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/TTPXGO7PJ5BKJDPKLXG2NQFAOQ.jpg",
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
  {
    titulo: "Valle de Calamuchita",
    video: "https://www.youtube.com/embed/MC0brF6QyK0",
    descripcion: {
      contenido:
        "El valle con su Circuito de los Grandes Lagos y sus densos bosques de coníferas y caducifolias, su terreno fragoso con estrechos valles secundarios y las más elevadas cimas de las Sierras de Córdoba posee un gran atractivo turístico y mucha actividad deportiva, como la pesca y deportes acuáticos como el buceo y windsurf en sus lago-embalses; también hay actividades de montañismo en sus áreas serranas o la visita a localidades con aspecto centroeuropeo ubicadas en medio de bosques de coníferas y caducifolias.",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/92/Lago_en_Calamuchita.jpg",
    },
    coordenadas: {
      lat: -31.91667,
      long: -64.63333,
    },
    fauna: [
      {
        nombre: "Galictis cuja",
        img: "https://codeff.cl/crfs/wp-content/uploads/2017/05/quiques-2.jpg",
      },
      {
        nombre: "Herpailurus yagouaroundi ",
        img: "https://i.pinimg.com/736x/bc/e9/5b/bce95bec6b145d032168954d546c623f.jpg",
      },
      {
        nombre: "Chaetophractus nationi",
        img: "https://media.todojujuy.com/p/36067a99f4fea3b91854a4224e62f6c1/adjuntos/227/imagenes/003/223/0003223382/quirquincho.jpg",
      },
    ],
    flora: [
      {
        nombre: "Ruprechtia apetala",
        img: "https://www.consultaplantas.com/images/phocagallery/ruprechtia_apetala/thumbs/phoca_thumb_l_ruprechtia_apetala_3.jpg",
      },
      {
        nombre: "Schinus fasciculatus",
        img: "https://4.bp.blogspot.com/-OxqpgPSFIHI/ViVdAth7PkI/AAAAAAAAiGI/z6bgDI21--E/s1600/Schinus%2Bfasciculatus-rama%2Bflor%25C3%25ADfera1.jpg",
      },
      {
        nombre: "Celtis ehrenbergiana",
        img: "https://pbs.twimg.com/media/Eckx-MfXYAUIgK8.jpg",
      },
    ]
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
];

export default regiones;
