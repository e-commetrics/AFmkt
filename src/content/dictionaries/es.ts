import type { PhotoKey, ServiceId } from "@/content/services";

/**
 * Spanish copy (primary language).
 *
 * Markup: *text* renders as the italic serif accent, \n as a line break.
 *
 * Items marked PENDING are drafts shown on the site until the real content
 * arrives (see src/content/pending.ts).
 */
export const es = {
  meta: {
    siteName: "AF Marketing",
    defaultTitle: "AF Marketing · Agencia de eventos y marketing en Tijuana",
    titleTemplate: "%s · AF Marketing",
    description:
      "Agencia de eventos en Tijuana: producción, logística, staff, prensa, marketing digital, patrocinios y video con dron para marcas y artistas en Baja California.",
    ogAlt: "AF Marketing. Tu evento, en buenas manos.",
  },

  common: {
    skipToContent: "Saltar al contenido",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    menu: "Menú",
    switchLocale: "English",
    switchLocaleLabel: "View this page in English",
    primaryCta: "Cuéntanos tu evento",
    whatsappCta: "Escríbenos por WhatsApp",
    emailCta: "Escríbenos un correo",
    exploreService: "Explorar servicio",
    allServices: "Ver todos los servicios",
    home: "Inicio",
    breadcrumb: "Ruta de navegación",
    backToTop: "Volver arriba",
    whatsappMessage: "Hola, AF Marketing. Me gustaría platicar sobre un evento.",
    serviceOf: "de",
    newTab: "(se abre en una pestaña nueva)",
  },

  anchors: {
    services: "servicios",
    work: "proyectos",
    process: "proceso",
    faq: "preguntas",
    about: "quienes-somos",
  },

  nav: {
    services: "Servicios",
    work: "Proyectos",
    about: "Nosotros",
    contact: "Contacto",
    mainLabel: "Navegación principal",
    servicesMenu: "Servicios por área",
    viewAll: "Todos los servicios",
  },

  pillars: {
    produce: { name: "Producir", tagline: "Que suceda, sin fricción." },
    amplify: { name: "Amplificar", tagline: "Que se vea y se escuche." },
    connect: { name: "Conectar", tagline: "Que el público y las marcas participen." },
  },

  services: {
    events: {
      name: "Organización y producción de eventos",
      navName: "Organización de eventos",
      short: "Del concepto al cierre: diseño, presupuesto, proveedores y dirección en sitio.",
      what: "Diseñamos y producimos tu evento de principio a fin: concepto, presupuesto, proveedores, montaje, programa y dirección general el día del evento.",
      why: "Sin una dirección central, un evento acumula retrasos, sobrecostos y huecos de comunicación que el público sí nota.",
      result: "Un evento que arranca a tiempo, respeta el presupuesto y se ve como lo imaginaste.",
      deliverables: [
        "Concepto y guion del evento",
        "Presupuesto integral por partida",
        "Selección y gestión de proveedores",
        "Diseño de montaje y layout",
        "Permisos y protección civil",
        "Programa minuto a minuto",
        "Dirección general en sitio",
        "Reporte de cierre",
      ],
      audiences: {
        business: "Convenciones, lanzamientos, aniversarios, inauguraciones y fiestas de fin de año.",
        artists: "Conciertos, presentaciones de disco, showcases y encuentros con fans.",
      },
      faq: [
        {
          q: "¿Con cuánta anticipación debo contactarlos?",
          a: "Para eventos masivos recomendamos de 8 a 12 semanas; para eventos corporativos, de 3 a 6. Si tu fecha está más cerca, escríbenos: te decimos con honestidad qué es viable.",
        },
        {
          q: "¿Pueden trabajar con mis proveedores?",
          a: "Sí. Integramos a tus proveedores de confianza al programa y los coordinamos bajo la misma dirección.",
        },
        {
          q: "¿Se encargan de los permisos?",
          a: "Gestionamos los permisos y la coordinación con protección civil que requiera tu evento, según el municipio y el tipo de recinto.",
        },
      ],
      seo: {
        title: "Organización de eventos en Tijuana",
        description:
          "Organización y producción de eventos en Tijuana y Baja California: concepto, presupuesto, proveedores, permisos y dirección en sitio para empresas y artistas.",
      },
    },
    activations: {
      name: "Activaciones de marca",
      navName: "Activaciones de marca",
      short: "Experiencias que ponen tu marca en manos del público.",
      what: "Diseñamos y operamos experiencias de marca: sampling, stands, dinámicas, pop-ups y activaciones en eventos o en punto de venta.",
      why: "Un anuncio se ve; una experiencia se cuenta. Las activaciones generan contacto directo, datos y contenido orgánico.",
      result: "Interacciones reales con tu público, registros medibles y contenido que la gente comparte.",
      deliverables: [
        "Concepto creativo de la activación",
        "Diseño y producción de stand",
        "Promotores y edecanes capacitados",
        "Mecánicas y dinámicas de participación",
        "Registro de datos y leads",
        "Reporte de interacciones con evidencia",
      ],
      audiences: {
        business: "Lanzamientos de producto, sampling, presencia en festivales y activaciones en punto de venta.",
        artists: "Experiencias para fans, pop-ups de merch y dinámicas con patrocinadores.",
      },
      faq: [
        {
          q: "¿Pueden activar mi marca dentro de un evento de terceros?",
          a: "Sí. Negociamos el espacio con el organizador, producimos el stand y operamos la activación durante todo el evento.",
        },
        {
          q: "¿Cómo se mide una activación?",
          a: "Definimos los indicadores antes de empezar —interacciones, registros, muestras entregadas, contenido generado— y los entregamos en un reporte con evidencia.",
        },
      ],
      seo: {
        title: "Activaciones de marca en Tijuana",
        description:
          "Activaciones de marca en Tijuana y Baja California: sampling, stands, pop-ups y dinámicas en eventos y punto de venta, con registro de datos y reporte de resultados.",
      },
    },
    logistics: {
      name: "Logística y operación",
      navName: "Logística y operación",
      short: "Staff, accesos y tiempos: la operación que hace que todo funcione.",
      what: "Planeamos la operación y ponemos al personal en campo: staff, accesos, acreditaciones, flujos de público, traslados y coordinación de proveedores el día del evento.",
      why: "El público no ve la logística. Solo nota cuando falla.",
      result: "Accesos fluidos, tiempos cumplidos y un equipo en campo que sabe exactamente qué hacer.",
      deliverables: [
        "Plan operativo y cronograma",
        "Staff, hostess y personal de apoyo",
        "Control de accesos y acreditaciones",
        "Flujos de público y señalización",
        "Traslados y hospitalidad de artistas",
        "Coordinación con seguridad y protección civil",
        "Montaje y desmontaje",
      ],
      audiences: {
        business: "Convenciones, ferias, eventos masivos y eventos con registro.",
        artists: "Rider, hospitalidad, traslados, backstage y acreditaciones de producción.",
      },
      faq: [
        {
          q: "¿El staff es propio?",
          a: "El staff que operamos porta el uniforme de AF Marketing y recibe el brief antes de cada fecha: conoce el programa, los accesos y a quién reportar.",
        },
        {
          q: "¿Pueden operar solo la logística de un evento que ya está producido?",
          a: "Sí. Podemos sumarnos únicamente para la operación en campo, el staff o el control de accesos.",
        },
      ],
      seo: {
        title: "Logística y staff para eventos en Tijuana",
        description:
          "Logística y operación de eventos en Tijuana: staff, hostess, control de accesos, acreditaciones, flujos de público y hospitalidad de artistas en Baja California.",
      },
    },
    pr: {
      name: "Relaciones públicas y medios",
      navName: "Relaciones públicas y medios",
      short: "Ruedas de prensa y relación con medios para que tu historia se publique.",
      what: "Diseñamos la estrategia de comunicación y gestionamos a los medios: ruedas de prensa, boletines, convocatoria, entrevistas y monitoreo de publicaciones.",
      why: "Una nota en medios genera una credibilidad que la publicidad pagada no puede comprar.",
      result: "Medios presentes, notas publicadas y un mensaje consistente en prensa, radio, televisión y medios digitales.",
      deliverables: [
        "Estrategia y mensajes clave",
        "Redacción de boletines",
        "Convocatoria y acreditación de medios",
        "Producción de rueda de prensa",
        "Gestión de entrevistas",
        "Monitoreo y reporte de cobertura",
      ],
      audiences: {
        business: "Anuncios, aperturas, inversiones y posicionamiento de voceros.",
        artists: "Lanzamientos, giras, presentaciones y entrevistas en medios.",
      },
      faq: [
        {
          q: "¿Garantizan publicaciones?",
          a: "Nadie puede garantizar lo que un medio decide publicar. Lo que sí garantizamos es una convocatoria bien dirigida, materiales listos para publicar y seguimiento puntual con cada medio.",
        },
        {
          q: "¿Con qué medios trabajan?",
          a: "Con prensa, radio, televisión y medios digitales de Baja California, y con medios nacionales según el proyecto.",
        },
      ],
      seo: {
        title: "Ruedas de prensa y relaciones públicas en Tijuana",
        description:
          "Relaciones públicas en Tijuana: ruedas de prensa, boletines, convocatoria de medios, entrevistas y monitoreo de cobertura en Baja California.",
      },
    },
    digital: {
      name: "Marketing digital",
      navName: "Marketing digital",
      short: "Campañas en redes sociales que llenan fechas y construyen audiencia.",
      what: "Planeamos y operamos campañas en redes sociales: contenido, pauta, colaboraciones con creadores, cobertura en vivo y reportes.",
      why: "La conversación sobre un evento empieza semanas antes y sigue días después. Ahí se deciden los boletos vendidos y la memoria de la marca.",
      result: "Más alcance, más registros o boletos vendidos y una comunidad que vuelve al siguiente evento.",
      deliverables: [
        "Campaña por etapas: expectativa, venta, evento y cierre",
        "Calendario y producción de contenido",
        "Pauta en Meta, TikTok y Google",
        "Colaboraciones con creadores",
        "Cobertura en vivo",
        "Reporte de métricas",
      ],
      audiences: {
        business: "Lanzamientos, eventos con registro y campañas de marca.",
        artists: "Venta de boletos, lanzamientos y crecimiento de comunidad.",
      },
      faq: [
        {
          q: "¿La pauta está incluida en el precio?",
          a: "La inversión en pauta se presupuesta por separado y se paga directo a las plataformas. Nuestra propuesta incluye la estrategia, la operación y el reporte.",
        },
        {
          q: "¿Pueden manejar redes solo durante el evento?",
          a: "Sí. Ofrecemos cobertura en vivo por fecha, además de campañas completas.",
        },
      ],
      seo: {
        title: "Marketing digital para eventos en Tijuana",
        description:
          "Marketing digital para eventos en Tijuana: campañas en redes sociales, pauta en Meta, TikTok y Google, creadores de contenido y cobertura en vivo.",
      },
    },
    sponsorship: {
      name: "Gestión de patrocinios",
      navName: "Patrocinios",
      short: "Conectamos marcas con eventos que hablan a su público.",
      what: "Diseñamos paquetes de patrocinio, buscamos y negociamos con marcas, gestionamos intercambios comerciales y vigilamos que cada contraprestación se cumpla.",
      why: "Un buen patrocinio financia el evento y le da a la marca un público que no alcanzaría con publicidad.",
      result: "Eventos mejor financiados y marcas que renuevan porque pueden ver lo que obtuvieron.",
      deliverables: [
        "Carpeta comercial y paquetes",
        "Prospección y presentación a marcas",
        "Negociación y contratos",
        "Intercambios comerciales",
        "Activación de contraprestaciones",
        "Reporte de cumplimiento para patrocinadores",
      ],
      audiences: {
        business: "Encontrar eventos alineados con tu público y medir el retorno del patrocinio.",
        artists: "Financiar giras, festivales y producciones con marcas afines.",
      },
      faq: [
        {
          q: "¿Cobran por patrocinio conseguido?",
          a: "Depende del proyecto: trabajamos con honorario fijo, comisión o un esquema mixto. Lo definimos en la propuesta.",
        },
        {
          q: "¿Qué es un intercambio comercial?",
          a: "Un acuerdo en el que la marca aporta producto o servicios —bebidas, transporte, hospedaje, medios— en lugar de efectivo, a cambio de visibilidad en el evento.",
        },
      ],
      seo: {
        title: "Patrocinios para eventos en Tijuana",
        description:
          "Gestión de patrocinios en Tijuana y Baja California: carpetas comerciales, búsqueda de marcas, negociación, intercambios comerciales y reporte para patrocinadores.",
      },
    },
    creative: {
      name: "Estudio creativo",
      navName: "Estudio creativo",
      short: "Diseño gráfico, video y tomas aéreas con dron.",
      what: "Creamos la imagen de tu evento y la registramos: identidad visual, diseño gráfico, fotografía, producción y edición de video y tomas aéreas con dron.",
      why: "El contenido es lo que queda cuando el evento termina. Bien producido, vende la siguiente fecha.",
      result: "Una imagen consistente antes, durante y después del evento, con material listo para redes, prensa y patrocinadores.",
      deliverables: [
        "Identidad visual del evento",
        "Piezas impresas y digitales",
        "Fotografía de evento",
        "Video promocional y aftermovie",
        "Tomas aéreas con dron",
        "Edición para reels y shorts",
      ],
      audiences: {
        business: "Video corporativo, cobertura de eventos y contenido para lanzamientos.",
        artists: "Videos promocionales, contenido de gira y visuales para redes.",
      },
      faq: [
        {
          q: "¿En cuánto tiempo entregan el material?",
          a: "Una selección de fotos para redes puede estar lista el mismo día; el aftermovie y la edición completa se entregan en los días siguientes, según el alcance acordado.",
        },
        {
          q: "¿Pueden volar dron en cualquier recinto?",
          a: "Depende del lugar y de la normativa aplicable. Revisamos restricciones y permisos antes de comprometer tomas aéreas.",
        },
      ],
      seo: {
        title: "Video, diseño y dron para eventos en Tijuana",
        description:
          "Estudio creativo en Tijuana: diseño gráfico, fotografía, video promocional, aftermovies y tomas aéreas con dron para eventos, marcas y artistas.",
      },
    },
  },

  home: {
    hero: {
      eyebrow: "Agencia de eventos y marketing",
      location: "Tijuana, B.C.",
      coordinates: "32.51° N · 117.03° O",
      titleLine1: "Tu evento,",
      titleLine2: "en buenas manos.",
      lead: "Planeamos, producimos y difundimos eventos para marcas y artistas en Baja California. Logística, staff, prensa, patrocinios y contenido, coordinados por un solo equipo que responde por todo.",
      secondaryCta: "Ver servicios",
      founderRole: "Fundador. Dirige cada proyecto en persona.",
      caption: "Grand Coliseo, Tijuana — antes de abrir puertas",
      imageAlt:
        "Plaza de toros de Tijuana con cientos de mesas y sillas en círculos alrededor de un corral de jaripeo y un escenario con pantalla, listos antes del evento.",
      scroll: "Desliza",
    },
    trust: {
      label: "AF Marketing en cifras",
      stats: [
        { value: "250", prefix: "+", label: "eventos producidos y operados" },
        { value: "15", prefix: "+", label: "años en la industria del entretenimiento" },
        { value: "90", prefix: "+", label: "medios y creadores en nuestra red" },
        { value: "7", prefix: "", label: "disciplinas bajo un mismo techo" },
      ],
      marqueeLabel: "Tipos de eventos que producimos",
      marquee: [
        "Conciertos",
        "Jaripeos y rodeos",
        "Ruedas de prensa",
        "Lanzamientos de marca",
        "Festivales",
        "Eventos corporativos",
        "Activaciones en punto de venta",
        "Giras de artistas",
        "Galas y premiaciones",
        "Experiencias de vino",
      ],
    },
    value: {
      eyebrow: "El problema que resolvemos",
      title: "Un evento tiene cien piezas. *Nosotros respondemos por todas.*",
      body: "Audio, permisos, staff, prensa, patrocinadores, redes, video. Cuando cada proveedor trabaja por su lado, la coordinación —y el riesgo— recaen en ti. En AF Marketing, una sola dirección planea, ejecuta y comunica tu evento, con un responsable que conoce cada detalle.",
      points: [
        {
          title: "Un solo interlocutor",
          body: "Una persona responde por presupuesto, tiempos y resultados. Sin cadenas de correos entre proveedores.",
        },
        {
          title: "Producción y difusión, juntas",
          body: "Prensa, redes y contenido se planean desde el primer día, no la semana del evento.",
        },
        {
          title: "Oficio en campo",
          body: "Staff con nuestra camiseta y un plan B documentado para cada punto crítico.",
        },
      ],
      diagram: {
        label: "Comparativa: proveedores por separado frente a un solo equipo",
        toggleLabel: "Cambiar escenario",
        before: { label: "Proveedores sueltos", caption: "7 proveedores · 7 conversaciones · el riesgo es tuyo" },
        after: { label: "Con AF Marketing", caption: "1 equipo · 1 conversación · el riesgo es nuestro" },
        you: "Tú",
        vendors: ["Audio", "Staff", "Prensa", "Redes", "Diseño", "Patrocinios", "Permisos"],
      },
    },
    services: {
      eyebrow: "Servicios",
      title: "Siete disciplinas. *Un solo equipo.*",
      intro: "Contrátalas por separado o como sistema completo. Cada una funciona sola; juntas, tu evento exige menos coordinación y rinde más.",
      indexLabel: "Índice de servicios",
      labels: { what: "Qué es", why: "Por qué importa", result: "Resultado" },
      help: {
        title: "¿No sabes por dónde empezar?",
        body: "Cuéntanos qué quieres lograr y te decimos qué disciplinas necesitas —y cuáles no.",
        cta: "Agenda un diagnóstico",
      },
    },
    difference: {
      eyebrow: "La diferencia AF",
      title: "Lo que cambia cuando *todo pasa por un mismo equipo.*",
      intro: "Contratar por separado parece más barato hasta que llega el día del evento. Así se compara.",
      columns: { criterion: "Aspecto", others: "Proveedores por separado", af: "AF Marketing" },
      rows: [
        {
          criterion: "Interlocutor",
          others: "Cinco o más contactos, cada uno con su agenda.",
          af: "Un director de proyecto que responde por todo.",
        },
        {
          criterion: "Presupuesto",
          others: "Cotizaciones sueltas y costos que aparecen al final.",
          af: "Un presupuesto integral, desglosado desde el inicio.",
        },
        {
          criterion: "Prensa y redes",
          others: "Se contratan cuando el evento ya está encima.",
          af: "Se planean desde el primer día, junto con la producción.",
        },
        {
          criterion: "Staff",
          others: "Personal eventual sin contexto del evento.",
          af: "Staff uniformado que conoce el programa y su función.",
        },
        {
          criterion: "Imprevistos",
          others: "Cada proveedor resuelve —o no— su parte.",
          af: "Plan de contingencia y una sola cadena de decisión.",
        },
        {
          criterion: "Después del evento",
          others: "Fotos dispersas y ningún reporte.",
          af: "Reporte de resultados y contenido listo para usar.",
        },
      ],
    },
    staffBand: {
      eyebrow: "En campo",
      title: "Nuestra camiseta, *nuestro estándar.*",
      body: "El staff que recibe a tus invitados lleva nuestro nombre en el pecho. Por eso lo preparamos nosotros: conoce el programa, los accesos y a quién llamar.",
      caption: "Staff de AF Marketing en Grand Coliseo, Tijuana.",
      alt: "Dos integrantes del staff de AF Marketing con camisas negras con el logotipo, en la plaza de toros de Tijuana, con el montaje de mesas y el escenario detrás.",
    },
    process: {
      eyebrow: "Cómo trabajamos",
      title: "De la primera llamada *al último aplauso.*",
      intro: "Un proceso claro, con fechas y entregables en cada etapa. Siempre sabes en qué punto está tu evento.",
      steps: [
        {
          name: "Diagnóstico",
          body: "Una llamada de 30 minutos para entender objetivo, público, fecha y presupuesto. Sin costo.",
          time: "Día 1",
        },
        {
          name: "Propuesta",
          body: "Concepto, alcance y presupuesto desglosado por partida. Sabes qué incluye cada peso antes de firmar.",
          time: "48–72 h",
        },
        {
          name: "Preproducción",
          body: "Proveedores, permisos, patrocinios, prensa y campaña avanzan en paralelo, con un cronograma compartido.",
          time: "Semanas previas",
        },
        {
          name: "Ejecución",
          body: "Dirección en sitio, staff en campo y cobertura de contenido. Tú atiendes a tus invitados; nosotros, todo lo demás.",
          time: "Día del evento",
        },
        {
          name: "Cierre",
          body: "Reporte de asistencia, alcance y cobertura en medios, más el material audiovisual listo para usar.",
          time: "Semana siguiente",
        },
      ],
    },
    work: {
      eyebrow: "Proyectos",
      title: "Pruebas, *no promesas.*",
      intro: "Una muestra del trabajo detrás de eventos reales en Baja California.",
      labels: {
        challenge: "El reto",
        solution: "Lo que hicimos",
        scope: "Alcance",
        results: "Resultados",
        viewService: "Ver servicio",
      },
      cases: [
        {
          client: "Grand Coliseo",
          category: "Jaripeo y concierto",
          location: "Plaza de toros · Tijuana, B.C.",
          title: "Una plaza de toros convertida en recinto para miles de asistentes.",
          challenge: "Recibir a miles de personas en un ruedo con mesas, escenario y corral de jaripeo funcionando a la vez.",
          solution: "Distribución del montaje, staff uniformado, control de accesos y coordinación en sitio con la producción del espectáculo.",
          scope: ["Staff", "Logística", "Operación en sitio"],
          // PENDING (draft, see src/content/pending.ts): real client list and metrics.
          metrics: [
            { value: "+2,000", label: "asistentes" },
            { value: "+30", label: "personas de staff" },
            { value: "0", label: "incidentes mayores" },
          ],
          photo: "arena" as PhotoKey,
          alt: "Plaza de toros en Tijuana con cientos de mesas y sillas acomodadas en círculos alrededor de un corral de jaripeo y un escenario con pantalla.",
          service: "logistics" as ServiceId,
        },
        {
          client: "Barón Balché",
          category: "Rueda de prensa",
          location: "Baja California",
          title: "Una casa vinícola del Valle de Guadalupe frente a los medios de la región.",
          challenge: "Convocar a prensa, radio y medios digitales para un anuncio, y lograr que la historia se publicara.",
          solution: "Mensajes clave, convocatoria y acreditación de medios, producción de la rueda de prensa y seguimiento a publicaciones.",
          scope: ["Relaciones públicas", "Convocatoria de medios", "Producción"],
          // PENDING (draft, see src/content/pending.ts): real client list and metrics.
          metrics: [
            { value: "+15", label: "medios presentes" },
            { value: "+30", label: "notas y menciones" },
            { value: "3", label: "voceros en mesa" },
          ],
          photo: "press" as PhotoKey,
          alt: "Adrián Fernández, de AF Marketing, en la mesa de una rueda de prensa junto a Mario Rodríguez, de Barón Balché, con micrófonos de medios al frente.",
          service: "pr" as ServiceId,
        },
      ],
      next: {
        title: "El siguiente caso puede ser *el tuyo.*",
        body: "Cuéntanos qué tienes en mente y te mostramos cómo lo resolveríamos.",
      },
    },
    testimonials: {
      eyebrow: "Testimonios",
      title: "Lo que dicen *cuando se apagan las luces.*",
      // PENDING (draft, see src/content/pending.ts): real, approved client quotes.
      items: [
        {
          quote: "Llegamos con una fecha y una idea. Nos devolvieron un plan, un presupuesto claro y un evento que salió exactamente como lo aprobamos.",
          name: "Mariana T.",
          role: "Gerente de marca",
          org: "Empresa de bebidas · Tijuana",
        },
        {
          quote: "Lo que más valoro es tener un solo contacto. Adrián y su equipo resolvieron producción, prensa y patrocinadores mientras yo me enfocaba en el show.",
          name: "Luis R.",
          role: "Mánager de artista",
          org: "Música regional mexicana",
        },
        {
          quote: "El staff conocía el programa mejor que nosotros. Los accesos fluyeron y nadie tuvo que improvisar.",
          name: "Daniela M.",
          role: "Directora de operaciones",
          org: "Recinto de espectáculos · Baja California",
        },
      ],
    },
    about: {
      eyebrow: "Quién está detrás",
      title: "Las manos *detrás de tu evento.*",
      body: "AF Marketing nació en Tijuana con una idea simple: quien organiza un evento no debería coordinar a diez proveedores para que salga bien. Adrián Fernández reunió producción, operación y comunicación en un solo equipo, y sigue al frente de cada proyecto.",
      // PENDING (draft, see src/content/pending.ts): quote to confirm with Adrián.
      quote: "Un evento se gana en los detalles que nadie ve.",
      quoteBy: "Adrián Fernández, fundador",
      facts: [
        { value: "Tijuana", label: "Base de operaciones" },
        { value: "B.C. + frontera", label: "Cobertura regional" },
        { value: "ES · EN", label: "Atención bilingüe" },
        { value: "1", label: "Responsable por proyecto" },
      ],
      figCaption: "Fig. 01 — Las buenas manos.",
      cta: "Conoce la agencia",
      alt: "Retrato de Adrián Fernández, fundador de AF Marketing, con saco a cuadros morado y las manos entrelazadas bajo el mentón, frente a micrófonos de prensa.",
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Antes de que *lo preguntes.*",
      intro: "Las dudas que más escuchamos antes de empezar un proyecto.",
      contactPrompt: "¿Tu pregunta no está aquí?",
      contactLink: "Escríbenos",
      items: [
        {
          q: "¿Qué tipo de eventos organizan?",
          a: "Conciertos, jaripeos, festivales, lanzamientos de marca, eventos corporativos, ruedas de prensa, galas y activaciones. Si reúne personas y necesita producción, comunicación o ambas, podemos ayudarte.",
        },
        {
          q: "¿Puedo contratar un solo servicio?",
          a: "Sí. Puedes contratar una sola disciplina —por ejemplo, staff o una rueda de prensa— o el sistema completo. La propuesta se arma según lo que tu evento necesita.",
        },
        {
          q: "¿Con cuánta anticipación debo contactarlos?",
          a: "Lo ideal: de 8 a 12 semanas para eventos masivos y de 3 a 6 semanas para eventos corporativos o ruedas de prensa. Si tu fecha está más cerca, escríbenos y te diremos con honestidad qué es viable.",
        },
        {
          q: "¿Cómo cotizan?",
          a: "Cada evento es distinto, así que no manejamos precios fijos ni paquetes. Después de la llamada de diagnóstico preparamos una propuesta a la medida, según el tipo de evento y su alcance, sin costo ni compromiso.",
        },
        {
          q: "¿Trabajan fuera de Tijuana?",
          a: "Sí. Operamos en toda Baja California —Tijuana, Rosarito, Ensenada, Valle de Guadalupe, Tecate y Mexicali— y trabajamos con clientes de ambos lados de la frontera. Para otras ciudades, consúltanos.",
        },
        {
          q: "¿Trabajan con artistas independientes?",
          a: "Sí. Producimos presentaciones, lanzamientos y giras para artistas y sus representantes, y conseguimos patrocinios para financiarlos.",
        },
        {
          q: "¿Qué pasa si algo falla el día del evento?",
          a: "Cada evento tiene un plan de contingencia por punto crítico —clima, accesos, energía, proveedores— y una sola cadena de decisión en sitio. Los imprevistos se resuelven antes de que tus invitados lo noten.",
        },
        {
          q: "¿Emiten factura?",
          a: "Sí, emitimos factura (CFDI) por todos nuestros servicios.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Siguiente paso",
      title: "¿Cuándo es *tu evento?*",
      body: "Cuéntanos la fecha, el objetivo y el público. Te respondemos de inmediato para agendar una llamada de diagnóstico sin costo.",
      reassurance: ["Respuesta inmediata", "Propuesta a la medida", "Sin compromiso"],
    },
  },

  servicesPage: {
    seo: {
      title: "Servicios de eventos y marketing en Tijuana",
      description:
        "Siete disciplinas para producir, amplificar y conectar tu evento: organización, activaciones, logística, relaciones públicas, marketing digital, patrocinios y estudio creativo.",
    },
    eyebrow: "Servicios",
    title: "Todo tu evento. *Un solo equipo.*",
    intro: "Siete disciplinas organizadas en tres frentes: producir el evento, amplificarlo y conectarlo con público y marcas. Contrata una o todas.",
    servicesCount: "servicios",
  },

  servicePage: {
    whatLabel: "Qué es",
    whyLabel: "Por qué importa",
    resultLabel: "Resultado",
    includedEyebrow: "Qué incluye",
    includedTitle: "Lo que *entregamos.*",
    audienceEyebrow: "Para quién",
    audienceTitle: "Hecho para empresas *y artistas.*",
    business: "Para empresas y marcas",
    artists: "Para artistas",
    faqEyebrow: "Preguntas sobre este servicio",
    faqTitle: "Lo que suelen *preguntarnos.*",
    relatedEyebrow: "Se combina con",
    relatedTitle: "Servicios que *suman.*",
    proofEyebrow: "En campo",
    ctaTitle: "¿Listo para *empezar?*",
    ctaBody: "Cuéntanos sobre tu evento y te enviamos una propuesta con alcance y presupuesto desglosado.",
    ctaButton: "Cotizar este servicio",
  },

  aboutPage: {
    seo: {
      title: "Nosotros: Adrián Fernández y el equipo",
      description:
        "Conoce a AF Marketing, agencia de eventos y marketing en Tijuana fundada por Adrián Fernández: producción, operación y comunicación con un solo equipo.",
    },
    hero: {
      eyebrow: "Nosotros",
      title: "Las manos *detrás de tu evento.*",
      intro: "Somos una agencia de eventos y marketing con base en Tijuana. Producimos, operamos y comunicamos eventos para marcas y artistas en toda Baja California.",
    },
    story: {
      eyebrow: "La historia",
      title: "Una idea simple: *un solo responsable.*",
      // PENDING (draft, see src/content/pending.ts): founding story from Adrián.
      paragraphs: [
        "AF Marketing nació en Tijuana al ver un problema que se repetía en cada evento: quien organiza termina coordinando a diez proveedores que no hablan entre sí. Los retrasos, los sobrecostos y la tensión del día del evento casi siempre nacen ahí.",
        "Adrián Fernández fundó la agencia para resolverlo con una sola dirección: producción, logística, staff, prensa, redes, patrocinios y contenido bajo el mismo techo, con un responsable que conoce cada detalle.",
        "Hoy trabajamos con empresas, recintos, organizadores y artistas que necesitan que su evento salga bien y se vea en todas partes.",
      ],
      signatureRole: "Fundador y director",
    },
    principles: {
      eyebrow: "Cómo pensamos",
      title: "Cuatro principios, *en cada evento.*",
      items: [
        {
          title: "Un solo responsable",
          body: "Cada proyecto tiene un director que responde por presupuesto, tiempos y resultados.",
        },
        {
          title: "El detalle es el trabajo",
          body: "Accesos, horarios, señalización, hidratación del staff. Lo que nadie ve es lo que hace que todo funcione.",
        },
        {
          title: "Comunicar desde el día uno",
          body: "La prensa y las redes no son un extra al final: se planean junto con la producción.",
        },
        {
          title: "Trato humano",
          body: "Detrás de cada evento hay personas que se juegan algo. Las tratamos así.",
        },
      ],
    },
    team: {
      eyebrow: "El equipo en campo",
      title: "Nuestra camiseta, *nuestro estándar.*",
      body: "Staff uniformado, con el brief del evento y una cadena de mando clara. Cuando alguien de nuestro equipo atiende a tus invitados, representa a tu marca y a la nuestra.",
    },
    coverage: {
      eyebrow: "Cobertura",
      title: "Base en Tijuana. *Operación en toda la región.*",
      body: "Producimos eventos en Tijuana, Rosarito, Ensenada, el Valle de Guadalupe, Tecate y Mexicali, y trabajamos con marcas y artistas de ambos lados de la frontera.",
      mapLabel: "Mapa de cobertura de AF Marketing en Baja California y San Diego",
      base: "Base",
      border: "Frontera México – Estados Unidos",
    },
    press: {
      eyebrow: "En medios",
      title: "Conocemos la rueda de prensa *desde la mesa.*",
      body: "Además de convocar a los medios, nos sentamos frente a ellos. Esa experiencia de ambos lados se nota en cada convocatoria que preparamos.",
      alt: "Adrián Fernández, de AF Marketing, en la mesa de una rueda de prensa, con micrófonos de medios al frente.",
    },
    cta: {
      title: "¿Trabajamos *juntos?*",
      body: "Cuéntanos de tu evento. La primera llamada es para escucharte.",
    },
  },

  contactPage: {
    seo: {
      title: "Contacto: cotiza tu evento",
      description:
        "Cuéntanos sobre tu evento en Tijuana o Baja California. Respuesta inmediata y propuesta a la medida, sin compromiso.",
    },
    eyebrow: "Contacto",
    title: "Cuéntanos *tu evento.*",
    intro: "Mientras más sepamos, más precisa será la propuesta. Si aún no tienes todos los datos, no pasa nada: comparte lo que tengas.",
    stepsTitle: "Qué pasa después",
    steps: [
      "Revisamos tu mensaje y te respondemos de inmediato.",
      "Agendamos una llamada de diagnóstico de 30 minutos, sin costo.",
      "Recibes una propuesta a la medida de tu evento, con alcance y calendario.",
    ],
    channelsTitle: "¿Prefieres escribirnos directo?",
    channels: { email: "Correo", whatsapp: "WhatsApp", base: "Base", social: "Redes" },
    form: {
      title: "Brief del evento",
      required: "Obligatorio",
      optional: "Opcional",
      name: "Nombre completo",
      namePlaceholder: "¿Cómo te llamas?",
      org: "Empresa o proyecto",
      orgPlaceholder: "Marca, empresa o nombre artístico",
      email: "Correo electrónico",
      emailPlaceholder: "nombre@empresa.com",
      phone: "Teléfono o WhatsApp",
      phonePlaceholder: "+52 664 000 0000",
      profile: "Me presento como",
      profileOptions: [
        "Empresa o marca",
        "Artista o representante",
        "Organizador o recinto",
        "Agencia",
        "Otro",
      ],
      eventType: "Tipo de evento",
      eventTypePlaceholder: "Selecciona una opción",
      eventTypes: [
        "Concierto o show",
        "Jaripeo o rodeo",
        "Festival",
        "Evento corporativo",
        "Lanzamiento de producto",
        "Rueda de prensa",
        "Activación de marca",
        "Gala o premiación",
        "Otro",
      ],
      services: "Servicios que te interesan",
      servicesHint: "Elige todos los que apliquen.",
      date: "Fecha estimada",
      datePlaceholder: "Ej. 15 de noviembre o primavera 2027",
      city: "Ciudad o sede",
      cityPlaceholder: "Ej. Tijuana, Valle de Guadalupe",
      guests: "Asistentes estimados",
      guestsPlaceholder: "Selecciona un rango",
      guestsOptions: ["Menos de 100", "100 a 500", "500 a 2,000", "2,000 a 10,000", "Más de 10,000"],
      message: "Cuéntanos más",
      messagePlaceholder: "Objetivo del evento, público, ideas, dudas…",
      consentBefore: "He leído y acepto el",
      consentLink: "aviso de privacidad",
      submit: "Enviar solicitud",
      submitWhatsapp: "Enviar por WhatsApp",
      submitEmail: "Enviar por correo",
      sending: "Enviando…",
      fallbackNote: "Al enviar se abrirá WhatsApp o tu app de correo con el brief listo para mandar.",
      successTitle: "¡Recibido!",
      successBody: "Gracias, {name}. Te respondemos de inmediato para agendar la llamada de diagnóstico.",
      successHandoff: "Termina de enviar el mensaje en la ventana que se abrió. Te respondemos de inmediato.",
      again: "Enviar otra solicitud",
      error: "No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos a {email}.",
      errors: {
        name: "Escribe tu nombre.",
        email: "Escribe un correo válido.",
        consent: "Necesitamos tu autorización para responderte.",
        summary: "Revisa los campos marcados.",
      },
      briefIntro: "Hola, AF Marketing. Este es el brief de mi evento:",
      emailSubject: "Brief de evento — {name}",
    },
  },

  privacyPage: {
    seo: {
      title: "Aviso de privacidad",
      description:
        "Aviso de privacidad de AF Marketing: qué datos personales recabamos, para qué los usamos y cómo ejercer tus derechos ARCO.",
    },
    eyebrow: "Legal",
    tocLabel: "Índice",
    title: "Aviso de privacidad",
    updated: "Última actualización: 1 de octubre de 2026",
    intro:
      "En AF Marketing respetamos tu privacidad. Este aviso explica qué datos personales recabamos a través de este sitio y de nuestros canales de contacto, para qué los usamos y cómo puedes ejercer tus derechos, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
    // Have this text reviewed by a legal advisor before launch.
    sections: [
      {
        heading: "Responsable",
        body: [
          "AF Marketing, con domicilio en Tijuana, Baja California, México, es responsable del tratamiento de tus datos personales. Puedes contactarnos en {email}.",
        ],
      },
      {
        heading: "Datos que recabamos",
        body: [
          "Datos de identificación y contacto: nombre, correo electrónico, teléfono y empresa o proyecto.",
          "Información sobre tu evento que decidas compartir: tipo de evento, fecha, sede, número de asistentes y mensaje. No solicitamos datos personales sensibles.",
        ],
      },
      {
        heading: "Finalidades",
        body: [
          "Finalidades principales: responder tus solicitudes de información y cotización, preparar y dar seguimiento a propuestas, prestar los servicios contratados y emitir la facturación correspondiente.",
          "Finalidad secundaria: enviarte información sobre servicios y eventos de AF Marketing. Puedes negarte a esta finalidad en cualquier momento escribiendo a {email}; tu negativa no afecta las finalidades principales.",
        ],
      },
      {
        heading: "Transferencias",
        body: [
          "No vendemos tus datos ni los compartimos con terceros para fines propios de ellos. Solo los compartiremos cuando sea necesario para prestar el servicio que solicitaste —por ejemplo, con proveedores que participan en tu evento, bajo obligación de confidencialidad— o cuando lo requiera una autoridad competente.",
        ],
      },
      {
        heading: "Derechos ARCO",
        body: [
          "Tienes derecho a acceder, rectificar y cancelar tus datos personales, así como a oponerte a su tratamiento o revocar tu consentimiento. Envía tu solicitud a {email} indicando tu nombre, el derecho que deseas ejercer y un medio para responderte. Daremos respuesta en los plazos que establece la ley.",
        ],
      },
      {
        heading: "Formulario y servicios de terceros",
        body: [
          "Si envías tu solicitud a través de un servicio de formularios, de WhatsApp o de tu aplicación de correo, ese proveedor procesa los datos conforme a sus propias políticas de privacidad.",
        ],
      },
      {
        heading: "Cookies",
        body: [
          "Este sitio no utiliza cookies de rastreo ni de publicidad. Si en el futuro incorporamos herramientas de analítica, actualizaremos este aviso.",
        ],
      },
      {
        heading: "Cambios a este aviso",
        body: ["Cualquier cambio a este aviso se publicará en esta página con su fecha de actualización."],
      },
    ],
  },

  footer: {
    servicesTitle: "Servicios",
    agencyTitle: "Agencia",
    contactTitle: "Contacto",
    agencyLinks: {
      about: "Nosotros",
      work: "Proyectos",
      process: "Proceso",
      faq: "Preguntas frecuentes",
      contact: "Contacto",
    },
    location: "Tijuana, Baja California, México",
    localTime: "Hora local",
    rights: "Todos los derechos reservados.",
    privacy: "Aviso de privacidad",
    madeIn: "Hecho en Tijuana.",
  },
};

export type Dictionary = typeof es;
