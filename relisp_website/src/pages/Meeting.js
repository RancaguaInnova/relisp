import React from 'react'
import TimelineComponent from './../components/Timeline'
export default class NewsPage extends React.Component {
  render() {
    const timeline = [
      {
        title: '23 de Junio 2019',
        day: '23',
        activities: [
          {
            hour: '09:00 Hrs',
            title: 'Lorem ipsum dolor consectetur sit amet.',
            address: '',
            imageUrl: ''
          },
          {
            hour: '10:00 Hrs',
            title: 'Lorem ipsum dolor consectetur sit amet.',
            address: '',
            imageUrl: ''
          },
          {
            hour: '11:00 Hrs',
            title: 'Lorem ipsum dolor consectetur sit amet.',
            address: '',
            imageUrl: ''
          },
          {
            hour: '12:00 Hrs',
            title: 'Lorem ipsum dolor consectetur sit amet.',
            address: '',
            imageUrl: ''
          }
        ]
      },
      {
        title: '24 de Junio 2019',
        day: '24',
        activities: [
          {
            hour: '09:00 Hrs',
            title: 'Lorem ipsum dolor consectetur sit amet.',
            address: '',
            imageUrl: ''
          },
          {
            hour: '10:00 Hrs',
            title: 'Lorem ipsum dolor consectetur sit amet.',
            address: '',
            imageUrl: ''
          },
          {
            hour: '11:00 Hrs',
            title: 'Lorem ipsum dolor consectetur sit amet.',
            address: '',
            imageUrl: ''
          },
          {
            hour: '12:00 Hrs',
            title: 'Lorem ipsum dolor consectetur sit amet.',
            address: '',
            imageUrl: ''
          }
        ]
      },
      {
        title: '25 de Junio 2019',
        day: '25',
        activities: [
          {
            hour: '09:00 Hrs',
            title: 'Lorem ipsum dolor consectetur sit amet.',
            address: '',
            imageUrl: ''
          },
          {
            hour: '10:00 Hrs',
            title: 'Lorem ipsum dolor consectetur sit amet.',
            address: '',
            imageUrl: ''
          },
          {
            hour: '11:00 Hrs',
            title: 'Lorem ipsum dolor consectetur sit amet.',
            address: '',
            imageUrl: ''
          },
          {
            hour: '12:00 Hrs',
            title: 'Lorem ipsum dolor consectetur sit amet.',
            address: '',
            imageUrl: ''
          }
        ]
      }
    ]
    return (
      <main className='encuentro'>
        <section className='encuentro__hero'>
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-20 offset-md-2'>
                <h3 className='encuentro__hero__subtitle'>HISTORIA</h3>
              </div>
              <div className='col-24 col-md-8 offset-md-2'>
                <h2 className='encuentro__hero__title'>
                  Descripción de la motivación para hacer el encuentro.
                </h2>
              </div>
              <div className='col-24 col-md-8 offset-md-4'>
                <p className='encuentro__hero__text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className='encuentro__hero__text'>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='encuentro__encuentros'>
          <div className='_slider encuentro__slider__slider'>
            <div className='encuentro__encuentros__slide'>
              <div className='encuentro__encuentros__slide-container'>
                <div className='encuentro__encuentros__slide-content'>
                  <h4 className='encuentro__encuentros__slide-subtitle'>
                    PRIMERA VERSIÓN
                  </h4>
                  <h3 className='encuentro__encuentros__slide-title'>
                    Colombia 2015
                  </h3>
                  <div className='encuentro__encuentros__slide-wrapper'>
                    <div className='encuentro__encuentros__slide-date'>
                      <i className='fa fa-calendar' />
                      <p>2 - 4 Diciembre</p>
                    </div>
                    <div className='encuentro__encuentros__slide-location'>
                      <i className='fa fa-map-marker' />
                      <p>Bogotá</p>
                    </div>
                  </div>
                  <p className='encuentro__encuentros__slide-text'>
                    Entre el 2 y 4 diciembre se desarrolló en Bogotá, Colombia,
                    el primer encuentro Latinoamericano de Innovación Social en
                    el Sector Público que buscó crear un espacio de diálogo y de
                    construcción participativa entre actores del sector público
                    de toda la región, que estén generando conocimiento y
                    soluciones de alto impacto para mejorar la calidad de vida
                    de la población en situación de vulnerabilidad. El evento
                    fue dirigido principalmente a ejecutores de política
                    pública, académicos, entidades privadas, organizaciones de
                    la sociedad civil y estudiantes de carreras afines. Una
                    contribución a la creación de un espacio de diálogo donde
                    CAF -banco de desarrollo de América Latina- promueve la
                    innovación social a través de la articulación de actores, el
                    intercambio y la difusión de experiencias y aprendizajes con
                    miras a aportar nuevas ideas a necesidades sociales no
                    resueltas.
                  </p>
                </div>
                <div className='encuentro__encuentros__slide-image'>
                  <img src='/images/red/co.png' />
                </div>
              </div>
            </div>
            <div className='encuentro__encuentros__slide'>
              <div className='encuentro__encuentros__slide-container'>
                <div className='encuentro__encuentros__slide-content'>
                  <h4 className='encuentro__encuentros__slide-subtitle'>
                    SEGUNDA VERSIÓN
                  </h4>
                  <h3 className='encuentro__encuentros__slide-title'>
                    Costa Rica 2016
                  </h3>
                  <div className='encuentro__encuentros__slide-wrapper'>
                    <div className='encuentro__encuentros__slide-date'>
                      <i className='fa fa-calendar' />
                      <p>23 - 25 Noviembre</p>
                    </div>
                    <div className='encuentro__encuentros__slide-location'>
                      <i className='fa fa-map-marker' />
                      <p>San José</p>
                    </div>
                  </div>
                  <p className='encuentro__encuentros__slide-text'>
                    Del 23 al 25 de noviembre se llevó a cabo el II Encuentro
                    Latinoamericano de Innovación Social desde el Sector Público
                    (ELIS) en San José de Costa Rica. La segunda edición de este
                    encuentro regional estuvo dirigida a impulsar el
                    conocimiento sobre el emprendimiento social para el
                    desarrollo local, sostenibilidad ambiental, inversión de
                    impacto y participación ciudadana como dinamizadores de la
                    innovación social. Este evento es promovido por los
                    gobiernos de la región para generar espacios de confluencia,
                    reflexión y aprendizaje sobre experiencias que están
                    impulsando cambios sociales en nuestra región y el mundo. En
                    ELIS 2016 se darán cita actores de los sectores público y
                    privado, emprendedores, organizaciones sociales, académicos
                    y expertos, quienes disertarán en torno a cuatro áreas
                    temáticas: Emprendimiento social como herramienta para el
                    desarrollo local; Intervenciones locales para generar
                    ciudades inclusivas y ambientalmente sostenibles; Inversión
                    de impacto como mecanismo de impulso a la innovación social
                    y Participación ciudadana.
                  </p>
                </div>
                <div className='encuentro__encuentros__slide-image'>
                  <img src='/images/red/cr.png' />
                </div>
              </div>
            </div>
            <div className='encuentro__encuentros__slide'>
              <div className='encuentro__encuentros__slide-container'>
                <div className='encuentro__encuentros__slide-content'>
                  <h4 className='encuentro__encuentros__slide-subtitle'>
                    TERCERA VERSIÓN
                  </h4>
                  <h3 className='encuentro__encuentros__slide-title'>
                    México 2017
                  </h3>
                  <div className='encuentro__encuentros__slide-wrapper'>
                    <div className='encuentro__encuentros__slide-date'>
                      <i className='fa fa-calendar' />
                      <p>31 Octubre - 4 Noviembre</p>
                    </div>
                    <div className='encuentro__encuentros__slide-location'>
                      <i className='fa fa-map-marker' />
                      <p>Guadalajara</p>
                    </div>
                  </div>
                  <p className='encuentro__encuentros__slide-text'>
                    El tercer encuentro Latinoamericano de Innovación Social
                    desde/con el Sector Público (ELIS) 2017 sucedió en el marco
                    del Festival de Innovación Epicentro, del 31 de octubre al 4
                    de noviembre. Investigaciones y prácticas de innovación
                    social desde, o en colaboración con, el servicio público de
                    9 países de América Latina, se expondrán para que las y los
                    asistentes de Gobierno, Academia, OSCs y público interesado
                    intercambien experiencias y generen oportunidades de
                    colaboración. El evento fue abierto y gratuito, pero en
                    donde era necesario (obligatorio) registrarse a partir del
                    27 de septiembre.
                  </p>
                </div>
                <div className='encuentro__encuentros__slide-image'>
                  <img src='/images/red/mx.png' />
                </div>
              </div>
            </div>
            <div className='encuentro__encuentros__slide'>
              <div className='encuentro__encuentros__slide-container'>
                <div className='encuentro__encuentros__slide-content'>
                  <h4 className='encuentro__encuentros__slide-subtitle'>
                    CUARTA VERSIÓN
                  </h4>
                  <h3 className='encuentro__encuentros__slide-title'>
                    Brasil 2018
                  </h3>
                  <div className='encuentro__encuentros__slide-wrapper'>
                    <div className='encuentro__encuentros__slide-date'>
                      <i className='fa fa-calendar' />
                      <p>29 - 30 Agosto</p>
                    </div>
                    <div className='encuentro__encuentros__slide-location'>
                      <i className='fa fa-map-marker' />
                      <p>Florianópolis</p>
                    </div>
                  </div>
                  <p className='encuentro__encuentros__slide-text'>
                    ELIS 2018 tiene el objetivo de crear un espacio de diálogo y
                    de construcción participativa, sin divisiones, entre el
                    Gobierno, la Academia, Sector Privado y Organizaciones de la
                    Sociedad Civil que estén generando conocimiento y soluciones
                    de innovación social de alto impacto para las diferentes
                    problemáticas latinoamericanas . ¡El evento no termina
                    cuando termina! El ELIS forma parte de un movimiento mucho
                    mayor: una red latinoamericana de innovadores sociales a
                    partir del sector público.
                  </p>
                </div>
                <div className='encuentro__encuentros__slide-image'>
                  <img src='/images/red/br.png' />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}
