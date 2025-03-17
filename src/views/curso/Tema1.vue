<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Identificación del problema de investigación     '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    p.mb-4 La identificación del problema de investigación, es el primer paso fundamental en cualquier proyecto de investigación, porque define el rumbo y alcance del estudio, estableciendo la base sobre la cual se desarrollará todo el proceso investigativo. Un problema de investigación bien definido, permite formular preguntas claras y específicas, delimitar objetivos concretos y orientar la búsqueda de respuestas significativas y relevantes.

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 Este tema es especialmente importante, debido a que un problema de investigación mal planteado puede llevar a resultados poco útiles, dificultar la interpretación de los datos o incluso, desviar la atención de los objetivos principales. Este proceso permitirá enfocar su trabajo, definir sus objetivos y establecer un marco claro para su investigación.
        p.mb-4 Esta sección explora las características esenciales de un problema de investigación, los métodos para identificar y delimitar un problema, y las estrategias para asegurar que el problema sea relevante y viable para el campo de estudio. Al concluir, se presentará una reflexión sobre la importancia de esta etapa y cómo impacta en el éxito del proyecto. A continuación, se presentan los aspectos esenciales que deben considerarse al identificar un problema de investigación. En la figura 1, se pueden evidenciar los relacionamientos que tiene el problema con otros aspectos del proyecto, durante su formulación.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')
    p.mb-4 Describir un problema es narrar lo que está sucediendo en relación con un hecho, una persona, una institución, una empresa o una comunidad; es relatar los acontecimientos que caracterizan el objeto de estudio, considerando las variables e indicadores implicadas, teniendo en cuenta las necesidades, las causas y efectos que dan origen al problema (Ruiz, Valenzuela y Valenzuela, 2023).

    p.mb-4.text-center <strong>Figura 1.</strong> Relacionamientos del problema de investigación
    .row.mb-5
      .col-10.col-md-8.col-xl-6.mx-auto(data-aos="fade-up")
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')

    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Características de un problema de investigación

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 Para abordar este primer tema, vamos a gestionar primero un pequeño ejemplo; supongamos que debemos afrontar la siguiente situación social: se tiene la percepción que en comunidades rurales, por estar apartadas y su condición no ser tan importante, el tema sobre su salud mental es que frecuentan los servicios de apoyo psicológico. Se quiere profundizar un poco más sobre esta percepción. Para esto se debe hacer un análisis completo, para descubrir el potencial que tiene como tema de investigación, para proponer un proyecto.
        .bg-amarillo.p-4
          span De acuerdo con Creswell (2014), un problema de investigación bien formulado, debe cumplir con ciertos criterios que aseguran su relevancia y viabilidad.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
    
    .row.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        p.mb-4 Las principales características son:
        AcordionA(tipo="b")
          .div(titulo="Claridad")
            p Es fundamental que la declaración del problema de investigación sea clara y concisa. Un problema debe ser expresado sin ambigüedades, para evitar interpretaciones incorrectas. Una buena declaración debe exponer los aspectos más importantes del tema, de manera directa. Evitar la información innecesaria es clave para no confundir al lector. Por ejemplo, en lugar de plantear un problema de forma vaga como "Los estudiantes tienen dificultades", se podría especificar "Los estudiantes de educación superior tienen dificultades para aplicar teorías sociales en la resolución de problemas prácticos".
          .div(titulo="Estructura lógica")
            p.mb-4 La estructura lógica para la identificación del problema, debe seguir una secuencia clara. Se puede organizar de la siguiente manera:
            p.mb-4 ●	<strong>Introducción al tema:</strong> presentar el contexto y la relevancia del tema de investigación. Por ejemplo, "La aplicación de teorías matemáticas es esencial en diversas disciplinas, incluyendo la ingeniería y las ciencias aplicadas".
            p.mb-4 ●	<strong>Puntos claves:</strong> desglosar el problema en partes manejables. Esto puede incluir la identificación de variables, la población afectada y las consecuencias de no abordar el problema.
            p.mb-4 ●	<strong>Conclusión:</strong> resumir la importancia de abordar el problema identificado. Por ejemplo, "Abordar las dificultades que enfrentan los estudiantes en la aplicación de teorías matemáticas, es crucial para mejorar su desempeño académico y prepararles para desafíos profesionales".
          .div(titulo="Enfoque en los conceptos claves")
            p.mb-4 Al identificar un problema de investigación, es vital destacar los conceptos claves que los estudiantes deben recordar. Estos pueden incluir:
            p.mb-4 ●	<strong>Definición del problema:</strong> una descripción clara y precisa del problema a investigar. 
            p.mb-4 ●	<strong>Justificación de la investigación:</strong> razones que explican por qué es importante investigar este problema.
            p.mb-4 ●	<strong>Objetivos de la investigación:</strong> lo que se espera lograr con el estudio.

      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen') 
    
    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen') 
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Estilo accesible")
            p.mb-4 El lenguaje utilizado en la identificación del problema, debe ser sencillo y accesible. Evitar tecnicismos innecesarios facilitará la comprensión del contenido. Por ejemplo, en lugar de usar términos complejos como "metodología cuantitativa", se puede explicar que se utilizarán "números y estadísticas para analizar los datos".
            p Un ejemplo de una declaración de problema accesible podría ser: "Este proyecto investigará por qué muchos estudiantes de ingeniería no logran aplicar conceptos matemáticos en situaciones del mundo real".

          .div(titulo="Especificidad")
            p Debe estar enfocado en un tema específico que sea posible de investigar en el tiempo y con los recursos disponibles.
          .div(titulo="Relevancia")
            p Debe abordar una cuestión significativa en el contexto científico o social, ofreciendo un apoyo al conocimiento o a la práctica.
          .div(titulo="Factibilidad")
            p Debe poder ser abordado con los métodos y herramientas disponibles y ser accesible dentro del contexto del investigador.

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-rojo.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-8.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 Estas características permiten al investigador delimitar un área de estudio, que será abordable y significativa, haciendo que el análisis tenga un propósito claro y relevante.

    h2 Importancia de la identificación correcta del problema de investigación

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 La correcta identificación del problema de investigación, es esencial porque establece el foco y los objetivos de todo el proyecto. Según Sampieri et al. (2014), un problema bien formulado ayuda a evitar desviaciones del objetivo principal del estudio y permite que los hallazgos tengan un valor práctico o teórico claro. 
        p.mb-4 La falta de claridad en la identificación del problema puede llevar a una pérdida de tiempo y recursos, así como a resultados irrelevantes o difíciles de interpretar.
        span Un problema de investigación bien identificado, también permite:
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
    
    .row.mb-5.justify-content-center 
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-10.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Enfocar
          p.px-1.text-small.mb-0.d-flex.text-center Analizar el estudio en un área específica, lo que facilita la formulación de hipótesis o preguntas de investigación. 
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-11.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Justificar
          p.px-1.text-small.mb-0.d-flex.text-center Argumentar la importancia de la investigación, lo que puede ser útil para obtener financiamiento o apoyo institucional. 
      .col-10.col-md-8.col-lg-6.col-xl-4
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-12.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Definir
          p.px-1.text-small.mb-0.d-flex.text-center Precisar los métodos y el diseño de investigación, más adecuados, para abordar el problema. Al definir adecuadamente el problema, el investigador establece una base sólida que guiará todas las etapas siguientes del proyecto de investigación. 

    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2  
        h2 Métodos para identificar el problema de investigación

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-amarillo.p-4
          p.mb-4 A continuación, abordaremos unas metodologías y tips que nos permitirán desglosar y analizar de manera efectiva, un problema de investigación, permitiéndonos llegar a la raíz del mismo y así poder abordarlo de manera correcta, todo dependerá de las condiciones y entorno en que este se presente.
          p.mb-4 Para profundizar en metodologías y estrategias que faciliten el análisis efectivo de problemas de investigación, lo invitamos a consultar el documento Métodos para identificar el problema de investigación. En él encontrará herramientas clave para desglosar y comprender un problema, identificar su raíz y abordarlo de manera adecuada según las condiciones y el entorno específicos.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Métodos para identificar.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Métodos para identificar el problema de investigación

      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')

    #t_1_3.titulo-segundo
      div.d-flex
        span.me-3 1.3  
        h2 Ejemplos prácticos de identificación y delimitación de problemas de investigación

    p.mb-4 La identificación y delimitación de problemas de investigación es una etapa clave en el diseño de cualquier proyecto investigativo, ya que permite establecer un marco claro y específico para abordar cuestiones relevantes y factibles dentro de un contexto definido.

    .row.mb-5
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        .bg-amarillo.p-4
          p.mb-4 En el PDF Ejemplos prácticos se presentan ejemplos prácticos que ilustran cómo transformar observaciones generales en problemas de investigación delimitados, considerando aspectos como el contexto, la población objetivo, el período de estudio y las variables específicas a analizar. Estos ejercicios buscan proporcionar herramientas metodológicas a investigadores, estudiantes y profesionales interesados en desarrollar investigaciones con enfoques precisos y objetivos claros. A través de ejemplos aplicados a diversos campos como la publicidad digital, la educación, el medio ambiente y la percepción social, se exploran estrategias para formular problemas de investigación que sean manejables y significativos, contribuyendo así al desarrollo de conocimiento riguroso y útil.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Ejemplos prácticos de identificación y delimitación de problemas de investigación.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Ejemplos prácticos.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.scielo.sa.cr/pdf/ri/v97n1/2215-4582-ri-97-01-34.pdf") Aguilar Mariño, N. L. (2024). Constructivismo en el análisis de las relaciones entre China y América Latina: una mirada desde las perspectivas wentianas. Revista Relaciones Internacionales, 97(1), 34-54.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/43844") Asti Vera, A. (2015). Metodología de la investigación. Athenaica Ediciones Universitarias.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/40513") Baena Paz, G. M. E. (2017). Metodología de la investigación (3 ed.). Grupo Editorial Patria.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=76OBJ3sYTVk") Ingenio, E. (2021). Cómo hacer un ÁRBOL de problemas y objetivos Metodología Marco Lógico parte 2 y 3 [Vídeo]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=mdoPvsbQv9A") Polanco, M. (2020). Árbol de problemas y soluciones [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
