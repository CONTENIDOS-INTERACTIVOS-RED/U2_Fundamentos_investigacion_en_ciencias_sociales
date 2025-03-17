<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Formulación de preguntas e hipótesis'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-4 Para comenzar con el estudio de la temática, lo invitamos a ver el siguiente video.
    figure.mb-5
      .video
        <iframe width="1903" height="748" src="https://www.youtube.com/embed/F4F4gc6kqQ0" title="Formulación de preguntas e hipótesis" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1  
        h2 Definición y propósito de las preguntas de investigación

    p.mb-4 Debemos tener en cuenta que las preguntas de investigación representan el "qué" de un estudio, es decir, aquello que el investigador desea responder o explorar. Según Sampieri et al. (2014), una buena pregunta de investigación debe ser específica, relevante y factible de responder, en el contexto del estudio. Las preguntas permiten centrar el estudio en aspectos precisos, evitando la dispersión y facilitando la delimitación del problema.
    p.mb-4 Algunas características de una pregunta de investigación bien formulada, son las que vemos a continuación:

    .row.mb-5.justify-content-center 
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-15.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Específica
          p.px-1.text-small.mb-0.d-flex.text-center Debe estar enfocada en un aspecto particular del problema. 
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-16.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Relevante
          p.px-1.text-small.mb-0.d-flex.text-center Debe tener valor académico o social, brindando un aporte significativo. 
      .col-10.col-md-8.col-lg-6.col-xl-4
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-17.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Viable
          p.px-1.text-small.mb-0.d-flex.text-center Es importante que pueda ser respondida con los recursos disponibles y en el tiempo establecido para la investigación.

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-rojo.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-18.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 Un ejemplo de una pregunta de investigación para un estudio que busca resolver problemas en comunidades: ¿cuál es el impacto del uso de la tecnología en el comportamiento de jóvenes que viven en una comunidad rural, con problemas de acceso y conectividad? Este tipo de pregunta delimita el tema, especificando tanto el área de interés (tecnología en el comportamiento) como la población de estudio (jóvenes en una comunidad rural).

    h2 Tipos de preguntas de investigación
    p.mb-4 La tipología de preguntas de investigación varía, según el propósito del estudio. Según Creswell (2014), existen preguntas descriptivas, exploratorias, explicativas y predictivas. Cada tipo de pregunta cumple con una función específica y determina el enfoque metodológico del estudio:

    ImagenInfografica.color-secundario.mb-0
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-4(x="70.8%" y="32%" numero="+")
        .h5.mb-2 Descriptiva
        p Buscan describir fenómenos o características de una población. Ejemplo: ¿cuáles son las prácticas educativas más comunes en las escuelas rurales?
      .tarjeta.bg-white.p-4(x="70.8%" y="42%" numero="+")
        .h5.mb-2 Exploratorias
        p Se utilizan cuando el fenómeno es poco conocido, buscando identificar patrones o factores relacionados. Ejemplo: ¿qué factores motivan la deserción escolar, en comunidades marginadas?
      .tarjeta.bg-white.p-4(x="70.8%" y="52%" numero="+")
        .h5.mb-2 Explicativas
        p Apuntan a identificar relaciones de causa-efecto. Ejemplo: ¿de qué manera el nivel socioeconómico de los estudiantes influye en su rendimiento académico?
      .tarjeta.bg-white.p-4(x="70.8%" y="62%" numero="+")
        .h5.mb-2 Predictivas
        p Punto caliente 4 	Predictivas	Intentan anticipar eventos o resultados con base en factores actuales. Ejemplo: ¿cómo afectará el uso de plataformas digitales, el rendimiento académico en los próximos cinco años?	
    .row.mb-5
      .col-10.mx-auto.-mt-24px(data-aos="fade-up")
        .bg-rojo.p-4
          span Este tipo de preguntas guía al investigador en el diseño de su metodología, permitiéndole elegir herramientas adecuadas de recolección de datos y análisis.

    #t_2_2.titulo-segundo
      div.d-flex
        span.me-3 2.2  
        h2 Formulación de hipótesis

    p.mb-4 Ahora bien, si de la pregunta nos saltamos a la hipótesis, nos encontramos que esta es una proposición o afirmación tentativamente establecida como respuesta al problema de investigación, la cual debe ser probada o refutada, a través del estudio (Kerlinger y Lee, 2002). La hipótesis proporciona una orientación concreta para la recolección y análisis de datos, facilitando la evaluación de las relaciones, planteadas entre variables.
    .row.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        p.mb-4 Existen distintos tipos de hipótesis, cada uno con un rol específico en el estudio:
        AcordionA(tipo="b")
          .div(titulo="Hipótesis nula (H0)")
            p Establece que no hay relación significativa entre las variables. Ejemplo: “No existe relación entre el uso de redes sociales y el rendimiento académico”.
          .div(titulo="Hipótesis alternativa (H1)")
            p Sugiere una relación entre las variables. Ejemplo: “El uso de redes sociales tiene un impacto negativo en el rendimiento académico”.
          .div(titulo="Hipótesis descriptiva")
            p Propuesta para describir una situación específica. Ejemplo: “El 60 % de los estudiantes de secundaria, utilizan dispositivos móviles en sus estudios”.
          .div(titulo="Hipótesis correlacional")
            p Plantea la existencia de una relación entre dos o más variables. Ejemplo: “A mayor uso de redes sociales, menor rendimiento académico, en estudiantes de secundaria”.
          .div(titulo="Hipótesis causal")
            p Sugiere que una variable tiene un efecto sobre otra. Ejemplo: “El uso excesivo de redes sociales, causa una disminución en el rendimiento académico”.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')

    h2 Estrategias para la formulación de preguntas e hipótesis
    p.mb-4 La formulación de preguntas e hipótesis, requiere seguir ciertos pasos que garantizan la claridad y precisión de estos elementos. A continuación, se presentan algunas estrategias útiles:

    .row.mb-5.justify-content-center 
      .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-21.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Revisión de la literatura
          p.px-1.text-small.mb-0.d-flex.text-center La consulta de estudios previos, facilita el planteamiento de preguntas y la formulación de hipótesis fundamentadas (Snyder, 2019). La literatura existente proporciona una base teórica que orienta el estudio y evita la duplicación de investigaciones.
      .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-43.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Especificación de variables
          p.px-1.text-small.mb-0.d-flex.text-center Para preguntas explicativas o correlacionales, es importante definir, claramente, las variables a estudiar, asegurando que estas puedan ser o no, evaluadas en el contexto del estudio.
      .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-23.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Planteamiento de preguntas claras y concisas
          p.px-1.text-small.mb-0.d-flex.text-center Evitar la ambigüedad en el lenguaje y mantener un enfoque específico, es fundamental para que las preguntas y las hipótesis sean útiles y aplicables (Hernández et al., 2014).
      .col-10.col-md-8.col-lg-6.col-xl-4.col-xxl-3
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-24.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Aplicación de pruebas piloto
          p.px-1.text-small.mb-0.d-flex.text-center En investigaciones cuantitativas, la realización de estudios piloto puede ayudar a afinar la formulación de hipótesis y preguntas, verificando la claridad y pertinencia de las mismas.

    #t_2_3.titulo-segundo
      div.d-flex
        span.me-3 2.3  
        h2 Ejemplos de formulación de preguntas e hipótesis de investigación

    p.mb-4 La formulación de preguntas e hipótesis de investigación es un paso fundamental en el proceso científico, ya que permite estructurar de manera precisa el enfoque del estudio y anticipar posibles relaciones entre las variables de interés.

    .row.mb-5
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-amarillo.p-4
          p.mb-4 El PDF Ejemplos de formulación, presenta ejemplos prácticos que ilustran cómo derivar preguntas e hipótesis a partir de problemas previamente identificados, abarcando una variedad de temáticas que incluyen el teletrabajo, las redes sociales, la pobreza, la seguridad ciudadana, la igualdad de género y la salud pública. Los ejemplos no solo demuestran la importancia de formular preguntas claras y específicas, sino también de plantear hipótesis que sean verificables y que orienten la recolección y el análisis de datos. Con este material, se busca proporcionar herramientas útiles para quienes deseen desarrollar investigaciones rigurosas y relevantes, contribuyendo a la generación de conocimiento en diversos campos de estudio.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Ejemplos de formulación.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Ejemplos de formulación

      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')


    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://doi.org/10.37811/cl_rcm.v4i2.73") Arias Gonzáles, J. L., Covinos Gallardo, M. R., & Cáceres Chávez, M. (2020). Formulación de los objetivos específicos desde el alcance correlacional en trabajos de investigación. Ciencia Latina Revista Científica Multidisciplinar, 4(2), 237-247.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/43844") Asti Vera, A. (2015). Metodología de la investigación. Athenaica Ediciones Universitarias.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/40513") Baena Paz, G. M. E. (2017). Metodología de la investigación (3 ed.). Grupo Editorial Patria.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=LMGupR0443I") Vega-Figueroa, E. (2020). Sesión 1. Taller de tesis de ciencias sociales: ¿Cómo se planifica una investigación? [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
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

<style lang="sass"></style>
