<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    p.mb-4 El proceso de investigación es fundamental en el avance del conocimiento y en la solución de problemas complejos. Esta unidad se enfoca en la fase inicial y estructural de cualquier investigación científica: el diseño del proyecto. Lo que nos proporciona las bases conceptuales y prácticas que nos guiarán en la creación de un proyecto de investigación robusto y significativo, desde la identificación de un problema, hasta la construcción de un marco teórico sólido.

    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        p.mb-4 La relevancia de esta unidad es indiscutible, dado que les permitirá desarrollar habilidades que son esenciales en múltiples disciplinas y que tendrán un impacto directo en su desarrollo académico y profesional.
        p.mb-4 La unidad está organizada en cuatro temas principales:
        AcordionA(tipo="b")
          .div(titulo="Tema 1")
            p Comenzamos con la <strong>identificación del problema de investigación</strong>, donde se exploran técnicas para delimitar un área de estudio de interés y relevancia. 
          .div(titulo="Tema 2")
            p A continuación, se desarrolla la <strong>formulación de preguntas e hipótesis</strong>, centrada en la capacidad de plantear preguntas precisas y en proponer hipótesis claras que orienten el proyecto. 
          .div(titulo="Tema 3")
            p Posteriormente, seguimos con la <strong>definición de objetivos de investigación</strong>, en donde aprenderán a establecer metas específicas y alcanzables. 
          .div(titulo="Tema 4")
            p Finalmente, la unidad concluye con la <strong>elaboración del marco teórico</strong>, que sitúa la investigación en un contexto de conocimiento previo, permitiendo comprender la importancia de fundamentar su proyecto en un análisis exhaustivo de la literatura existente.
    
    .row.mb-0
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 Al finalizar esta unidad, se habrán adquirido habilidades que permitirán organizar y estructurar las investigaciones de manera lógica y fundamentada, habilidades claves para un ejercicio profesional basado en el rigor científico, puesto que la capacidad de diseñar proyectos de investigación efectivos, es una competencia que destaca en múltiples entornos laborales y académicos, debido a que permite abordar problemas y oportunidades, de manera metódica y estratégica.
        .bg-amarillo.p-4
          span Esperamos que se pueda aprovechar al máximo esta unidad, que se participe de manera activa en cada tema, por lo que les invitamos a descubrir el valor del diseño de investigación como una herramienta poderosa, para generar impacto en el entorno académico y profesional.

      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')


</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
