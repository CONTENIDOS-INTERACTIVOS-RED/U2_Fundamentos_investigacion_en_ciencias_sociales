<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Elaboración del marco teórico'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 La elaboración del marco teórico, es una de las fases más importantes en la investigación, porque permite al investigador construir un cuerpo de conocimientos, basados en literatura relevante y antecedentes de estudios previos. Este marco conceptual establece los fundamentos sobre los cuales se desarrollará el estudio, y permite al investigador delimitar el tema y justificar su importancia (Hernández, Fernández y Baptista, 2014). Un buen marco teórico no solo profundiza en la comprensión del tema de estudio, sino que también orienta el desarrollo de las hipótesis y los métodos de investigación (Sampieri et al., 2014).
        .bg-amarillo.p-4
          span Se debe tener entonces, por parte de quien los construye, el <strong>detalle de los elementos y pasos fundamentales</strong> para la elaboración de un marco teórico efectivo, así como su importancia y aplicación en la investigación académica.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

    #t_4_1.titulo-segundo
      div.d-flex
        span.me-3 4.1  
        h2 El marco teórico y su relevancia

    p.mb-4 Tal como veníamos comentando anteriormente, el marco teórico es una sección dentro de la investigación que expone el conjunto de teorías, conceptos y antecedentes previos, relevantes para el estudio. Esta sección permite contextualizar la investigación dentro del campo de estudio y fundamentar la importancia de los objetivos y las hipótesis planteadas (Kerlinger y Lee, 2002). Al establecer el marco teórico, el investigador demuestra conocimiento del tema y se conecta con el avance del conocimiento, en su área de interés.
    p.mb-4 Según Sampieri et al. (2014), el marco teórico debe abordar tres elementos claves:

    .row.mb-5.justify-content-center 
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-32.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Fundamentación teórica 
          p.px-1.text-small.mb-0.d-flex.text-center Incluye las teorías y enfoques relevantes al problema de investigación.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-33.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Antecedentes empíricos
          p.px-1.text-small.mb-0.d-flex.text-center Revisa investigaciones previas, similares o relacionadas, que aportan al contexto del estudio.
      .col-10.col-md-8.col-lg-6.col-xl-4
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-34.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Delimitación conceptual
          p.px-1.text-small.mb-0.d-flex.text-center Define los términos y conceptos esenciales de manera precisa y contextualizada.

    h2 Importancia del marco teórico en la investigación
    p.mb-4 El marco teórico cumple funciones claves en cualquier investigación académica; algunos de los conceptos que se espera que debe abarcar, son:
    .row.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Delimitación del estudio")
            p Permite al investigador centrar su estudio en un área específica del conocimiento, evitando generalizaciones excesivas.
          .div(titulo="Justificación de la investigación")
            p Al presentar antecedentes y teorías relacionadas, el marco teórico justifica la importancia y pertinencia del estudio (Hernández et al., 2014).
          .div(titulo="Guía para la formulación de hipótesis")
            p Proporciona las bases para formular preguntas e hipótesis claras y coherentes, con el campo de estudio.
          .div(titulo="Facilita la interpretación de los resultados")
            p Al contextualizar el estudio, el marco teórico permite interpretar los hallazgos en función de teorías y datos previos, contribuyendo a la solidez de las conclusiones.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-rojo.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-36.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 En palabras de Creswell (2014), un marco teórico sólido es esencial para dotar de consistencia y rigor a la investigación, además de permitir al lector comprender el contexto y los fundamentos del problema planteado.

    #t_4_2.titulo-segundo
      div.d-flex
        span.me-3 4.2  
        h2 Elementos y estrategias para la redacción de un marco teórico

    p.mb-4 Debemos todos tener en cuenta, que para que el marco teórico sea efectivo, es necesario incluir ciertos elementos claves:

    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Teorías principales")
            p Exponer y explicar las teorías más relevantes al problema de investigación.
          .div(titulo="Estudios previos")
            p Incluir una revisión de investigaciones relacionadas, que contribuyan al contexto del tema de estudio.
          .div(titulo="Definición de conceptos")
            p Aclarar los términos y conceptos que serán fundamentales en la investigación, evitando ambigüedades (Kerlinger y Lee, 2002).
          .div(titulo="Propuesta de un modelo teórico (si aplica)")
            p En algunos casos, el investigador puede proponer un modelo conceptual o teórico, que explique las relaciones entre variables.

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 Estos elementos permiten estructurar el marco teórico de manera completa y detallada, proporcionando al lector una comprensión clara del contexto y del enfoque del estudio.
        .bg-amarillo.p-4.mb-4
          span  La elaboración de un marco teórico es un proceso sistemático que implica varias etapas claves.
        span A continuación, se describen algunos pasos que pueden servir para su construcción; debemos tener en cuenta que estos dependerán mucho de la metodología empleada para hacerlo:

      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')

    h2 Paso 1. Revisión de la literatura
    p.mb-4 La revisión de la literatura es el primer paso en la construcción del marco teórico. Consiste en buscar, seleccionar y analizar, fuentes relevantes y actuales sobre el tema de investigación. Esta revisión permite al investigador conocer estudios previos, teorías y hallazgos importantes, además de identificar posibles lagunas en el conocimiento (Snyder, 2019).

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        .bg-amarillo.p-4
          p.mb-4 Para realizar una revisión efectiva, es importante:
          p.mb-4 ●	Utilizar fuentes confiables. Como artículos de revistas académicas, libros y reportes de investigaciones reconocidas.
          p.mb-4 ●	Seleccionar información relevante. Elegir fuentes que tengan una relación directa con el tema de estudio y contribuir a su comprensión.
          p.mb-4 ●	Evaluar la actualidad de la información. Asegurar que la información sea vigente y relevante, en el campo de estudio.
          p.mb-4 ●	Acudir a bases de datos. Estas bases permiten ubicar información de manera rápida y con criterios de búsqueda que se pueden establecer, tales como área de conocimiento, fechas, entre otros.

    h2 Paso 2. Organización y clasificación de la información
    p.mb-4 Una vez recopilada la literatura relevante, el siguiente paso es organizar la información de forma lógica. Hernández et al. (2014), sugieren agrupar la información en temas, subtemas y conceptos claves, lo cual facilita la redacción y la estructuración del marco teórico. Es útil clasificar los estudios, según su enfoque teórico, metodológico o de resultados, para lograr una exposición coherente. Es conveniente crear carpetas en un espacio, con su clasificación.

    h2 Paso 3. Síntesis y redacción del marco teórico
    p.mb-4 La redacción del marco teórico implica sintetizar la información recopilada y exponerla de manera clara y lógica. La síntesis no debe ser una mera descripción de las fuentes, sino un análisis crítico que muestre cómo cada elemento se relaciona con el problema de investigación (Creswell, 2014). Además, es importante que la redacción fluya de manera natural y que las teorías y conceptos se presenten en orden de relevancia y coherencia con el estudio.

    p.mb-4.pt-5.border-top-gris Este ejercicio de redacción es quizás de los más complejo a la hora de realizar un proyecto; se debe recordar que no se trata de hacer una colcha de retazos de definiciones, si no que este sea lo más fluido y natural posible, el cual se va puliendo con el paso del tiempo; entre más se escriba, más se mejora y depura la técnica de escritura. Para redactar un marco teórico efectivo, el investigador puede emplear ciertas estrategias que le permitirán avanzar en el proceso, tales como las siguientes:

    .row.mb-4 
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-amarillo.p-4
          p.mb-4 <strong>Mantener la objetividad</strong>. Evitar opiniones personales y enfocarse en información basada en evidencia.
          p.mb-4 <strong>Utilizar un lenguaje claro y accesible</strong>. Aunque se trate de un tema especializado, es fundamental que el texto sea comprensible para el lector.
          p.mb-4 <strong>Citar adecuadamente las fuentes</strong>. Al incluir referencias, es importante citar las fuentes de manera correcta para evitar el plagio y dar crédito a los autores originales (Sampieri et al., 2014).
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')

    p.mb-4 

    .row.mb-4
      .col-11.col-md-10.mx-auto
        p.mb-4 <strong>Figura 2.</strong> Pasos para el tratamiento de los datos para marco teórico 
        img(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')

    #t_4_3.titulo-segundo
      div.d-flex
        span.me-3 4.3  
        h2 Ejemplos de formulación de un marco teórico

    p.mb-4 El marco teórico es un componente esencial de cualquier investigación, ya que proporciona los fundamentos conceptuales, teóricos y empíricos que guían el estudio.

    .row.bg-amarillo.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Ejemplos marco teórico
          p.mb-5 En el PDF Ejemplos marco teórico, se presentan ejemplos prácticos de formulación de marcos teóricos en diversas áreas de investigación, como las redes sociales, la desigualdad de género, los medios de comunicación y la psicología. Estos ejemplos incluyen teorías relevantes, estudios previos y conceptos clave que ilustran cómo estructurar un marco teórico sólido y coherente. Aunque los ejemplos son esquemáticos, ofrecen una guía clara sobre los elementos que deben considerarse para construir una base teórica que respalde y oriente el desarrollo de la investigación.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Ejemplos de marco teórico
             
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="http://scielo.sld.cu/pdf/ms/v21n1/1727-897X-ms-21-01-274.pdf") Bonet Collazo, O., Mazot Rangel, A., Casanova González, M., & Cruz Pérez, N. R. (2023). Proyecto de investigación y tesis. Guía para su elaboración. MediSur, 21(1), 274-288.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="http://scielo.iics.una.py//scielo.php?script=sci_arttext&pid=S2708-04122023000100102") Salinas-Atausinchi, Y., et al. (2023). ¿Cómo debería implementarse el marco teórico en la investigación cuantitativa?. Revista científica en ciencias sociales, 5(1), 102-113.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://revistas.unal.edu.co/index.php/ede/article/view/96326/85493") Vélez-Montes, G. (2022). El mecanismo de protección al cesante: revisión de literatura en el marco de los seguros de desempleo para Colombia. Ensayos de Economía, 32(61), 80-101.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=5hpXwN8OUWM") Sarmiento, M. (2019). El marco teórico de una investigación [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema4',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
