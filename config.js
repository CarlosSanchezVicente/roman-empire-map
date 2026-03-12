var config = {
    style: 'mapbox://styles/carlossv-mapbox/cmmdo1vpb00gb01scbu3v08dc',
    accessToken: 'pk.eyJ1IjoiY2FybG9zc3YtbWFwYm94IiwiYSI6ImNtbW04eWY5aDEyY2IycXNiMDVuN2FoejEifQ.xKaab7LbnlNJGQL5YKGqkg',
    projection: 'globe',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: true,
    auto: false,
    title: 'La expansión de Roma: De la República al Imperio',
    subtitle: 'Un viaje cartográfico por el crecimiento del mundo romano.',
    byline: '',
    footer: `Fuentes: <a href="https://github.com/siriusbontea/roman-empire/tree/main?tab=readme-ov-file" target="_blank">Repositorio "Roman-empire"</a> · Datos cartográficos e históricos (GeoJSON) &nbsp;|&nbsp; <em>National Geographic Historia</em> · Imágenes históricas <br> Creado con <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>`,
    chapters: [
        {
            id: 'order-0',
            alignment: 'left',
            title: '500 a.C. — La Aurora de la República',
            description: `
                <p>En el siglo VI a. C., Roma era todavía una pequeña ciudad dominada culturalmente por los etruscos. Tras la expulsión de los reyes etruscos, Roma nace como una pequeña república en el Lacio. El mapa muestra un territorio limitado, rodeado de pueblos hostiles como los ecuos y los volscos.</p>
                <div class="media-container">
                    <img src="./assets/order0_500ac.webp" alt="Nacimiento de la república romana" class="story-img">
                    <p class="image-caption">Cubierta etrusca de sarcófago de Cerveteri. Museo de Villa Giulia, Roma. Siglo VI. <a href="https://historia.nationalgeographic.com.es/a/etruscos-primeros-senores-italia_23052" target="_blank">Fuente</a></p>
                </div>
            `,
            location: { center: [12.49, 41.89], zoom: 7.5, pitch: 40, bearing: 0 },
            onChapterEnter: [
                { layer: 'extentlayers-order0',     opacity: 0.5 },
                { layer: 'capitales-orden0',         opacity: 1   },
                { layer: 'point-capitales-order0',   opacity: 1   },
                { layer: 'majorforts-order0',        opacity: 1   },
                { layer: 'point-majorfort-order0',   opacity: 0.9 },
                { layer: 'roads-order0',             opacity: 0.9 }
            ],
            onChapterExit: [
                { layer: 'extentlayers-order0',   opacity: 0 },
                { layer: 'majorforts-order0',     opacity: 0 },
                { layer: 'point-majorfort-order0',opacity: 0 },
                { layer: 'roads-order0',          opacity: 0 }
            ]
        },
        {
            id: 'order-1',
            alignment: 'left',
            title: '338 a.C. — La Unión del Lacio',
            description: '<p>Finaliza la Gran Guerra Latina. Roma disuelve la Liga Latina y establece un sistema de alianzas y colonias que consolida su control sobre el centro de Italia. Por primera vez, la ciudad impone un modelo administrativo que servirá como prototipo de su futura expansión.</p>',
            location: { center: [12.80, 41.60], zoom: 7, pitch: 40, bearing: 0 },
            onChapterEnter: [
                { layer: 'extentlayers-order1',   opacity: 0.5 },
                { layer: 'point-majorfort-order1',opacity: 0.9 },
                { layer: 'roads-order1',          opacity: 0.9 }
            ],
            onChapterExit: [
                { layer: 'extentlayers-order1',    opacity: 0 },
                { layer: 'capitales-orden1',        opacity: 0 },
                { layer: 'point-capitales-order0',  opacity: 0 },
                { layer: 'point-majorfort-order1',  opacity: 0 },
                { layer: 'roads-order1',            opacity: 0 }
            ]
        },
        {
            id: 'order-2',
            alignment: 'left',
            title: '298 a.C. — El Desafío Samnita',
            description: '<p>Bajo los cónsules Barbatus y Centumalus, Roma expande su influencia hacia los Apeninos, enfrentándose a los samnitas y capturando ciudades clave como Bojano. La maquinaria militar romana demuestra una capacidad organizativa superior.</p>',
            location: { center: [13.80, 41.30], zoom: 6.8, pitch: 45, bearing: 0 },
            onChapterEnter: [
                { layer: 'extentlayers-order2',   opacity: 0.5 },
                { layer: 'capitales-orden2',       opacity: 1   },
                { layer: 'point-capitales-order2', opacity: 1   },
                { layer: 'point-majorfort-order2', opacity: 0.9 },
                { layer: 'roads-order2',           opacity: 0.9 }
            ],
            onChapterExit: [
                { layer: 'extentlayers-order2',   opacity: 0 },
                { layer: 'point-majorfort-order2',opacity: 0 },
                { layer: 'roads-order2',          opacity: 0 }
            ]
        },
        {
            id: 'order-3',
            alignment: 'left',
            title: '290 a.C. — El Control de Italia Central',
            description: '<p>Roma derrota definitivamente a los samnitas y somete a los sabinos. El territorio romano se extiende ya de costa a costa, desde el Tirreno hasta el Adriático. La unión de casi toda Italia central crea una plataforma sólida para futuras campañas.</p>',              
            location: { center: [13.50, 42.10], zoom: 6.5, pitch: 30, bearing: 0 },
            onChapterEnter: [
                { layer: 'extentlayers-order3',   opacity: 0.5 },
                { layer: 'point-majorfort-order3',opacity: 0.9 },
                { layer: 'roads-order3',          opacity: 0.9 }
            ],
            onChapterExit: [
                { layer: 'extentlayers-order3',   opacity: 0 },
                { layer: 'point-majorfort-order3',opacity: 0 },
                { layer: 'roads-order3',          opacity: 0 }
            ]
        },
        {
            id: 'order-4',
            alignment: 'left',
            title: '272 a.C. — La Capitulación de Tarento',
            description: ` 
                <p>Tras la retirada de Pirro de Epiro, Roma captura Tarento y se convierte en la dueña indiscutible de toda la península itálica, hasta el sur de la Magna Grecia. Es el verdadero punto de partida de la expansión mediterránea.</p>,
                <div class="media-container">
                    <img src="./assets/order3_298ac.webp" alt="Derrota a los samnitas" class="story-img">
                    <p class="image-caption">La derrota de la flota cartaginesa en el cabo Ecnomo según un grabado de Gabriel de Saint-Aubin. 1763, Museo Getty, Los Ángeles. <a href="https://historia.nationalgeographic.com.es/a/primera-guerra-punica-conflicto-entre-roma-y-cartago-por-control-sicilia24788" target="_blank">Fuente</a></p>
                </div>
            `,
                location: { center: [15.50, 40.50], zoom: 6.2, pitch: 40, bearing: 0 },
            onChapterEnter: [
                { layer: 'extentlayers-order4',   opacity: 0.5 },
                { layer: 'point-majorfort-order4',opacity: 0.9 },
                { layer: 'roads-order4',          opacity: 0.9 }
            ],
            onChapterExit: [
                { layer: 'extentlayers-order4',   opacity: 0 },
                { layer: 'point-majorfort-order4',opacity: 0 },
                { layer: 'roads-order4',          opacity: 0 }
            ]
        },
        {
            id: 'order-5',
            alignment: 'left',
            title: '264 a.C. — Hacia el Primer Conflicto Púnico',
            description: '<p>Roma y Cartago se enfrentan por Sicilia. La joven potencia romana aprende rápidamente la guerra naval, demostrando que está lista para competir por el dominio del Mediterráneo. El inicio de la Primera Guerra Púnica marca el paso de Roma de potencia terrestre a potencia mediterránea.</p>',
            location: { center: [14.50, 38.50], zoom: 6, pitch: 45, bearing: 0 },
            onChapterEnter: [
                { layer: 'extentlayers-order5',   opacity: 0.5 },
                { layer: 'point-majorfort-order5',opacity: 0.9 },
                { layer: 'roads-order5',          opacity: 0.9 }
            ],
            onChapterExit: [
                { layer: 'extentlayers-order5',   opacity: 0 },
                { layer: 'point-majorfort-order5',opacity: 0 },
                { layer: 'roads-order5',          opacity: 0 }
            ]
        },
        {
            id: 'order-6',
            alignment: 'left',
            title: '218 a.C. — La Invasión de Aníbal',
            description: `
                <p>Comienza la Segunda Guerra Púnica. Roma controla Sicilia, Córcega y Cerdeña, pero el ejército cartaginés amenaza la propia supervivencia de la República. El mundo romano queda conmocionado: Aníbal, al frente de sus tropas y elefantes, irrumpe en Italia por los Alpes. Roma afronta uno de los momentos más críticos de su historia.</p>
                <div class="media-container">
                    <img src="./assets/order6_218ac.webp" alt="La Invasión de Aníbal" class="story-img">
                    <p class="image-caption">Aníbal cruzando los Alpes con el ejército cartaginés camino a Roma. Ilustración del siglo XIX. <a href="https://historia.nationalgeographic.com.es/a/anibal-barca-guerrero-que-aterrorizo-roma23343" target="_blank">Fuente</a></p>
                </div>
            `,
            location: { center: [10.50, 40.00], zoom: 5.5, pitch: 20, bearing: 0 },
            onChapterEnter: [
                { layer: 'extentlayers-order6',   opacity: 0.5 },
                { layer: 'point-majorfort-order6',opacity: 0.9 },
                { layer: 'roads-order6',          opacity: 0.9 }
            ],
            onChapterExit: [
                { layer: 'extentlayers-order6',   opacity: 0 },
                { layer: 'point-majorfort-order6',opacity: 0 },
                { layer: 'roads-order6',          opacity: 0 }
            ]
        },
        {
            id: 'order-7',
            alignment: 'left',
            title: '133 a.C. — El Legado de Átalo',
            // Nota: se eliminó la propiedad description duplicada vacía que existía en el original
            description: `
                <p>Roma hereda el Reino de Pérgamo y destruye Numancia. Tras su victoria en las Guerras Púnicas, Roma ya controla amplias zonas de la península ibérica y ha convertido la antigua Cartago en provincia africana. En este contexto de poder creciente, la República se expande ahora hacia Oriente: la anexión del reino de Pérgamo y la destrucción de Corinto consolidan el dominio romano sobre Grecia y Asia Menor. La influencia helenística se integra plenamente en la cultura romana, transformando su arte, arquitectura y vida urbana.</p>
                <div class="media-container">
                    <img src="./assets/order7_133ac.jpg" alt="El Legado de Átalo" class="story-img">
                    <p class="image-caption">La toma de Corinto por las legiones de Lucio Mummio. Pintura de Thomas Allom. <a href="https://historia.nationalgeographic.com.es/a/brutal-conquista-romana-corinto-218500" target="_blank">Fuente</a></p>
                </div>
            `,
            location: { center: [15.00, 38.00], zoom: 5, pitch: 30, bearing: 0 },
            onChapterEnter: [
                { layer: 'extentlayers-order7',    opacity: 0.5 },
                { layer: 'point-majorfort-order7', opacity: 0.9 },
                { layer: 'fortifications-order7',  opacity: 1   },
                { layer: 'roads-order7',           opacity: 0.9 }
            ],
            onChapterExit: [
                { layer: 'extentlayers-order7',   opacity: 0 },
                { layer: 'point-majorfort-order7',opacity: 0 },
                { layer: 'fortifications-order7', opacity: 0 },
                { layer: 'roads-order7',          opacity: 0 }
            ]
        },
        {
            id: 'order-8',
            alignment: 'left',
            title: '60 a.C. — El Primer Triunvirato',
            description: `
                <p>César, Pompeyo y Craso sellan una alianza que controla la República desde las sombras. Es el preludio de las guerras civiles que llevarán al nacimiento del Imperio. Julio César conquista la Galia mientras Pompeyo expande el poder romano en Oriente. La República se extiende por tres continentes bajo un mando militar sin precedentes.</p>
                <div class="media-container">
                    <img src="./assets/order8_60ac.jpg" alt="El Primer Triunvirato" class="story-img">
                    <p class="image-caption">Bustos de Julio César, Pompeyo y Craso. <a href="https://historiaeweb.com/2020/12/15/primer-triunvirato/" target="_blank">Fuente</a></p>
                </div>
            `,
            location: { center: [12.00, 42.00], zoom: 4.8, pitch: 35, bearing: 0 },
            onChapterEnter: [
                { layer: 'extentlayers-order8',   opacity: 0.5 },
                { layer: 'point-majorfort-order8',opacity: 0.9 },
                { layer: 'fortifications-order8', opacity: 1   },
                { layer: 'roads-order8',          opacity: 0.9 }
            ],
            onChapterExit: [
                { layer: 'extentlayers-order8',   opacity: 0 },
                { layer: 'point-majorfort-order8',opacity: 0 },
                { layer: 'fortifications-order8', opacity: 0 },
                { layer: 'roads-order8',          opacity: 0 }
            ]
        },
        {
            id: 'order-9',
            alignment: 'left',
            title: '16 d.C. — La Consolidación de Augusto',
            description: '<p>Bajo el reinado de Tiberio, tras la muerte de Augusto, el Imperio establece sus límites naturales en los ríos Rin y Danubio. Roma alcanza un alto grado de estabilidad administrativa y económica.</p>',
            location: { center: [15.00, 45.00], zoom: 5, pitch: 40, bearing: 0 },
            onChapterEnter: [
                { layer: 'extentlayers-order9',   opacity: 0.5 },
                { layer: 'point-majorfort-order9',opacity: 0.9 },
                { layer: 'fortifications-order9', opacity: 1   },
                { layer: 'roads-order9',          opacity: 0.9 }
            ],
            onChapterExit: [
                { layer: 'extentlayers-order9',    opacity: 0 },
                { layer: 'capitales-orden2',        opacity: 0 },
                { layer: 'point-capitales-order2',  opacity: 0 },
                { layer: 'point-majorfort-order9',  opacity: 0 },
                { layer: 'fortifications-order9',   opacity: 0 },
                { layer: 'roads-order9',            opacity: 0 }
            ]
        },
        {
            id: 'order-10',
            alignment: 'left',
            title: '47 d.C. — La Conquista de Britania',
            description: '<p>Las estructuras implantadas por Augusto siguen reformando el Estado romano. El Imperio funciona como una maquinaria administrativa eficiente y centralizada. El emperador Claudio expande las fronteras hacia el norte, cruzando el Canal de la Mancha e incorporando el sur de Britania al dominio romano.</p>',
            location: { center: [0.00, 50.00], zoom: 5.5, pitch: 45, bearing: -15 },
            onChapterEnter: [
                { layer: 'extentlayers-order10',   opacity: 0.5 },
                { layer: 'capitales-orden10',       opacity: 1   },
                { layer: 'point-capitales-order10', opacity: 1   },
                { layer: 'point-majorfort-order10', opacity: 0.9 },
                { layer: 'fortifications-order10',  opacity: 1   },
                { layer: 'roads-order10',           opacity: 0.9 }
            ],
            onChapterExit: [
                { layer: 'extentlayers-order10',   opacity: 0 },
                { layer: 'point-majorfort-order10',opacity: 0 },
                { layer: 'fortifications-order10', opacity: 0 },
                { layer: 'roads-order10',          opacity: 0 }
            ]
        },
        {
            id: 'order-11',
            alignment: 'left',
            title: '69 d.C. — La Dinastía Flavia',
            description: `
                <p>Tras el caótico año de los cuatro emperadores, Vespasiano toma el mando. El triunfo de la dinastía Flavia simboliza el retorno del orden. Se refuerza el control en el Limes Germánico y se sofocan revueltas en Judea.</p>
                <div class="media-container">
                    <img src="./assets/order11_69dc.webp" alt="La Dinastía Flavia" class="story-img">
                    <p class="image-caption">Rendida Jerusalén, Tito y Vespasiano celebraron un triunfo conjunto en el año 71. Representado por Giulio Romano en esta pintura sobre tabla realizada en 1537. Museo del Louvre, París. <a href="https://historia.nationalgeographic.com.es/a/ano-cuatro-emperadores-guerra-civil-que-sacudio-a-roma-imperial25495" target="_blank">Fuente</a></p>
                </div>
            `,
            location: { center: [15.00, 42.00], zoom: 4.5, pitch: 20, bearing: 0 },
            onChapterEnter: [
                { layer: 'extentlayers-order11',   opacity: 0.5 },
                { layer: 'point-majorfort-order11', opacity: 0.9 },
                { layer: 'fortifications-order11',  opacity: 1   },
                { layer: 'roads-order11',           opacity: 0.9 }
            ],
            onChapterExit: [
                { layer: 'extentlayers-order11',   opacity: 0 },
                { layer: 'point-majorfort-order11',opacity: 0 },
                { layer: 'fortifications-order11', opacity: 0 },
                { layer: 'roads-order11',          opacity: 0 }
            ]
        },
        {
            id: 'order-12',
            alignment: 'left',
            title: '84 d.C. — Las Fronteras del Norte',
            description: '<p>Domiciano consolida las defensas del imperio. En Britania, Agrícola alcanza los límites de Escocia mientras se fortifica el espacio entre el Rin y el Danubio.</p>',
            location: { center: [10.00, 50.00], zoom: 5, pitch: 40, bearing: 0 },
            onChapterEnter: [
                { layer: 'extentlayers-order12',   opacity: 0.5 },
                { layer: 'point-majorfort-order12',opacity: 0.9 },
                { layer: 'fortifications-order12', opacity: 1   },
                { layer: 'roads-order12',          opacity: 0.9 }
            ],
            onChapterExit: [
                { layer: 'extentlayers-order12',   opacity: 0 },
                { layer: 'point-majorfort-order12',opacity: 0 },
                { layer: 'fortifications-order12', opacity: 0 },
                { layer: 'roads-order12',          opacity: 0 }
            ]
        },
        {
            id: 'order-13',
            alignment: 'left',
            title: '102 d.C. — Las Guerras Dacias',
            description: '<p>Trajano cruza el Danubio para someter al Reino de Dacia. Roma busca asegurar sus fronteras orientales y acceder a las ricas minas de oro de la región. La impresionante organización de las legiones, representada en la Columna de Trajano, muestra el poder militar del Imperio.</p>',
            location: { center: [23.00, 45.00], zoom: 6, pitch: 45, bearing: 0 },
            onChapterEnter: [
                { layer: 'extentlayers-order13',   opacity: 0.5 },
                { layer: 'point-majorfort-order13',opacity: 0.9 },
                { layer: 'fortifications-order13', opacity: 1   },
                { layer: 'roads-order13',          opacity: 0.9 }
            ],
            onChapterExit: [
                { layer: 'extentlayers-order13',   opacity: 0 },
                { layer: 'point-majorfort-order13',opacity: 0 },
                { layer: 'fortifications-order13', opacity: 0 },
                { layer: 'roads-order13',          opacity: 0 }
            ]
        },
        {
            id: 'order-14',
            alignment: 'left',
            title: '117 d.C. — La Cúspide de Trajano',
            // Nota: se eliminó la propiedad description duplicada vacía que existía en el original
            description: `
                <p>Roma alcanza su máxima extensión histórica. A la muerte de Trajano, Roma alcanza su mayor extensión territorial: desde Hispania hasta Mesopotamia, desde Britania (muro de Adriano) hasta el desierto del Sahara. Es el punto álgido de la historia imperial.</p>
                <div class="media-container">
                    <img src="./assets/order14_102dc.webp" alt="La Cúspide del Imperio" class="story-img">
                    <p class="image-caption">Una legión romana en marcha y estableciendo su campamento en un relieve de la columna de Trajano. <a href="https://historia.nationalgeographic.com.es/a/ano-cuatro-emperadores-guerra-civil-que-sacudio-a-roma-imperial25495" target="_blank">Fuente</a></p>
                </div>
            `,
            location: { center: [20.00, 40.00], zoom: 4, pitch: 20, bearing: 0 },
            onChapterEnter: [
                { layer: 'extentlayers-order14',   opacity: 0.5 },
                { layer: 'point-majorfort-order14',opacity: 0.9 },
                { layer: 'fortifications-order14', opacity: 1   },
                { layer: 'roads-order14',          opacity: 0.9 }
            ],
            onChapterExit: [
                { layer: 'extentlayers-order14',   opacity: 0 },
                { layer: 'point-majorfort-order14',opacity: 0 },
                { layer: 'fortifications-order14', opacity: 0 },
                { layer: 'roads-order14',          opacity: 0 }
            ]
        }
    ]
};
