export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '2',
    tituloUnidad: 'Diseño de proyectos de investigación',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Identificación del problema de investigación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características de un problema de investigación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Métodos para identificar el problema de investigación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Ejemplos prácticos de identificación y delimitación de problemas de investigación',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Formulación de preguntas e hipótesis',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Definición y propósito de las preguntas de investigación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Formulación de hipótesis',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Ejemplos de formulación de preguntas e hipótesis de investigación',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'El papel del investigador en las ciencias sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Características y tipos de objetivos de investigación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Estrategias para formular objetivos de investigación',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Elaboración del marco teórico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'El marco teórico y su relevancia',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo:
              'Elementos y estrategias para la redacción de un marco teórico',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Ejemplos de formulación de un marco teórico',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aguirre, E., Durán, V., Gorga, L., & Hernández, E. (2021). El árbol de problemas como herramienta para la evaluación de políticas.',
      link:
        'https://www.researchgate.net/profile/Emilio-Aguirre/publication/360973478_El_arbol_de_problemas_como_herramienta_para_la_evaluacion_de_politicas/links/6296345f1117461e03ae2738/El-arbol-de-problemas-como-herramienta-para-la-evaluacion-de-politicas.pdf',
    },
    {
      referencia:
        'Creswell, JW (2014). Investigación cualitativa, cuantitativa y mixta. Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'Hernández, R., Fernández, C., & Baptista, P. (2014). Metodología de la investigación. McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Kerlinger, FN y Lee, HB (2002). Investigación del comportamiento: métodos de investigación en ciencias sociales. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Ruiz, C., Valenzuela A. y Valenzuela, M. (2023). Introducción metodología de la investigación. Professionals Online S.A.C. (pp. 51-80).',
      link:
        'https://editorialfondo.com/index.php/ProfessionalsOnLine/catalog/view/13/15/42',
    },
    {
      referencia:
        'Sampieri, RH, Fernández-Collado, C., & Baptista, P. (2014). Metodología de la investigación. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Snyder, H. (2019). Revisión de literatura como metodología de investigación: una visión general y pautas.',
      link: '',
    },
    {
      referencia:
        'Yin, RK (2018). Investigación y aplicaciones de estudios de caso: diseño y métodos. Publicaciones SAGE.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Alcance de la Investigación',
      significado:
        'Extensión o profundidad de la investigación que determina si el estudio será exploratorio, descriptivo, correlacional o explicativo.',
    },
    {
      termino: 'Antecedentes',
      significado:
        'Investigaciones previas y estudios relevantes al tema en cuestión, que permiten al investigador comprender mejor el contexto y los avances en el área de estudio.',
    },
    {
      termino: 'Esquema Conceptual',
      significado:
        'Representación gráfica o esquema de los conceptos y teorías que intervienen en el marco teórico y que reflejan las relaciones entre ellos.',
    },
    {
      termino: 'Hipótesis',
      significado:
        'Suposición o afirmación comprobable que intenta dar respuesta a la pregunta de investigación. Las hipótesis son formuladas para ser verificadas o rechazadas mediante datos empíricos.',
    },
    {
      termino: 'Hipótesis Alternativa',
      significado:
        'Afirmación que propone la existencia de una relación o efecto significativo entre las variables, en oposición a la hipótesis nula.',
    },
    {
      termino: 'Hipótesis Nula',
      significado:
        'Proposición que establece la ausencia de relación o efecto entre las variables en estudio. Se formula para ser rechazada o confirmada en el análisis de datos.',
    },
    {
      termino: 'Modelo Teórico',
      significado:
        'Estructura conceptual que propone cómo los elementos del problema de investigación están interrelacionados. Los modelos teóricos ayudan a organizar y explicar la información recopilada en el marco teórico.',
    },
    {
      termino: 'Operacionalización de Variables',
      significado:
        'Proceso que consiste en definir cómo se medirán y evaluarán las variables en el estudio, especificando indicadores y escalas de medición.',
    },
    {
      termino: 'Pregunta de Investigación',
      significado:
        'Interrogante específica y fundamental que la investigación busca respuesta. La pregunta de investigación delimita el enfoque y guía el desarrollo del estudio.',
    },
    {
      termino: 'Supuesto Teórico',
      significado:
        'Afirmación que se acepta como cierto en el marco teórico y que fundamenta los conceptos y relaciones en los que se basa la investigación.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
