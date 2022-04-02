import { Component } from '@angular/core';
interface sinapsis {
  title:string;
  description:string;
  img:string
}
@Component({
  selector: 'app-synopsis-cards',
  templateUrl: './synopsis-cards.component.html',
  styleUrls: ['./synopsis-cards.component.scss']
})
export class SynopsisCardsComponent{
 series:sinapsis[]=[
   {
     title:'Sense8',
     description:'Sense8 gira en torno a las aventuras de ocho personas distintas de lugares diferentes del mundo. A raíz de una muerte trágica que perciben a través de los sueños o con visiones, se encuentran en un crecimiento mental y conectado. El grupo variopinto está formado por un conductor de autobús africano, una bloguera americana transexual, un alemán que roba cajas fuertes, una mujer de negocios coreana, un actor de telenovelas mexicanas y una jóven fiestera islandesa. Tras la premonición, intentarán ser reunidos por Jonas, otro sensate, mientras que Mr. Whispers irá tras ellos con el mismo poder sensorial.',
     img:'../../../assets/sense8.jpg'
   },
   {
     title:'stranger things',
     description:'Stranger Things (originalmente titulada Montauk) es una serie de televisión dramática de misterio que está ambientada en una localidad de Indiana. Dicho lugar adquiere fama por los extraños acontecimientos que están sucediendo, similares a los del Proyecto Montauk, un supuesto proyecto secreto llevado a cabo por el gobierno de los Estados Unidos en el que se realizaban experimentos con la finalidad de desarrollar técnicas de guerra psicológica.La historia narra la súbita desaparición de un niño en esta ciudad durante la década de los 80, hecho que destapa los extraños sucesos que tienen lugar en la zona, producto de una serie de experimentos que realiza el gobierno. Además, en la ciudad aparecen fuerzas sobrenaturales inquietantes y una niña muy perturbadora',
     img:'../../../assets/stranger things.jpg'
   },
   {
     title:'Dark',
     description:'Dark es una serie original de Netflix del género de thriller de misterio con toques de fantasía sobrenatural. Esta serie es el primer proyecto que la compañía de streaming desarrolla que está escrita, rodada y producida en Alemania.Ambientada en la Alemania contemporánea, la serie gira alrededor de la desaparición de dos niños en Widen. El pueblo se vuelca en buscarles hasta que la situación cada vez se convierte más en una experiencia sobrenatural. Parece ser que todo se relaciona con los inexplicables sucesos que ocurrieron en 1986. Toda esta misteriosa desaparición, además, sacará a la luz el pasado y los secretos de cuatro familias que descubren que están conectadas.',
     img:'../../../assets/Dark.jpg'
   },
   {
     title:'flash',
     description:'The Flash es una série de televisión estadounidense de superhéroes desarrollada por Greg Berlanti, Andrew Kreisberg y Geoff Johns, que se emite en The CW en Estados Unidos. Está basada en el personaje de DC Comics Barry Allen / Flash, un superhéroe disfrazado que lucha contra el crimen con el poder de moverse a velocidades sobrehumanas. Es una serie derivada de Arrow, que existe en el mismo universo ficticio. La serie sigue a Barry Allen, interpretado por Grant Gustin, un investigador de escenas del crimen que obtiene velocidad sobrehumana',
     img:'../../../assets/flash.jpg'
   },
   {
     title:'cobra kai',
     description:'Cobra Kai es la secuela de la famosa saga cinematográfica Karate Kid. La serie sigue la historia 30 años después del campeonato de 1984, en el que Johnny no se encuentra en el mejor momento de su vida por lo que decide volver a abrir el famoso Dojo Cobra Kai para darle un giro. Es ahí cuando se reencuentra con Daniel, ahora convertido en un hombre de éxito, pero sin la ayuda de Miyagi, no logra encontrar el equilibrio en su vida. Después de perder su trabajo, Johnny usa el karate que aprendió en su día para defender a un vecino adolescente llamado Miguel Díaz, un chico asmático que vive con su madre soltera Carmen y su abuela Rosa. Éste, sorprendido por las destrezas de Johnny, pide que le enseñe kárate.',
     img:'../../../assets/cobra kai.jpg'
   },
 ]
}
