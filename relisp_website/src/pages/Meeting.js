import React from 'react'
import TimelineComponent from './../components/Timeline'
export default class NewsPage extends React.Component {
  render() {
    const timeline = [
      {
        title: '23 de Junio',
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
        title: '24 de Junio',
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
        title: '25 de Junio',
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
        <section className='encuentro__resena'>
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-8 offset-md-2'>
                <h4 className='encuentro__resena__subtitle'>RESEÑA</h4>
                <h3 className='encuentro__resena__title'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h3>
              </div>
              <div className='col-24 col-md-8 offset-md-4'>
                <p className='encuentro__resena__text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </section>

        <TimelineComponent data={timeline} />

        <section className='encuentro__ubicacion'>
          <div className='encuentro__ubicacion__map'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.062758512553!2d-70.74283628478183!3d-34.17031308057395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9663433ff87e5537%3A0x6eebafbe61fcb468!2sPlaza+de+los+Heroes!5e0!3m2!1ses-419!2sar!4v1560428341520!5m2!1ses-419!2sar'
              allowFullScreen
              data-content='municipal'
              className='-active'
            />
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.2764558374106!2d-70.7444634847265!3d-34.16484884191605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966343149faedeb1%3A0xe3229c417a6941eb!2sUOH!5e0!3m2!1ses-419!2scl!4v1561480388549!5m2!1ses-419!2scl'
              allowFullScreen
              data-content='uoh'
            />
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.870160888052!2d-70.7429440842473!3d-34.175237142460574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96634338aac3c365%3A0x7b3d6b132ce00f9a!2sAv.+Capit%C3%A1n+Antonio+Mill%C3%A1n+342%2C+Rancagua%2C+Regi%C3%B3n+del+Libertador+Gral.+Bernardo+O%E2%80%99Higgins%2C+Chile!5e0!3m2!1ses-419!2sar!4v1560428608566!5m2!1ses-419!2sar'
              allowFullScreen
              data-content='regional'
            />
          </div>
          <div className='encuentro__ubicacion__locations'>
            <div
              data-target='municipal'
              className='encuentro__ubicacion__location'
            >
              <h3 className='encuentro__ubicacion__title'>
                Auditorio Municipal
              </h3>
              <p className='encuentro__ubicacion__text'>
                Plaza de los Héroes #445, Rancagua
              </p>
            </div>
            <div data-target='uoh' className='encuentro__ubicacion__location'>
              <h3 className='encuentro__ubicacion__title'>Auditorio UOH</h3>
              <p className='encuentro__ubicacion__text'>
                Libertador Bernardo O´Higgins 611, Rancagua
              </p>
            </div>
            <div
              data-target='regional'
              className='encuentro__ubicacion__location'
            >
              <h3 className='encuentro__ubicacion__title'>
                Teatro Regional de Rancagua
              </h3>
              <p className='encuentro__ubicacion__text'>
                Av. Capitán Antonio Millán 342, Rancagua
              </p>
            </div>
          </div>
        </section>
        <section className='encuentro__formularios'>
          <div className='encuentro__formularios__ripped-background'>
            <img src='/images/encuentro/ripped-bottom-white.png' />
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-20 offset-md-2'>
                <div className='encuentro__formularios__wrapper'>
                  <a
                    href='https://forms.gle/qKuHUipxTRg9R4y29'
                    target='_blank'
                    className='encuentro__formularios__container'
                  >
                    <i className='fa fa-pencil-square-o' />
                    <h3 className='encuentro__formularios__title'>
                      Convocatoria Casos
                    </h3>
                    <div className='encuentro__formularios__button'>
                      <p>Ver formulario</p>
                      <span />
                    </div>
                  </a>
                  <a
                    href='https://forms.gle/NyMTiw6DLws9khAYA'
                    target='_blank'
                    className='encuentro__formularios__container'
                  >
                    <i className='fa fa-pencil-square-o' />
                    <h3 className='encuentro__formularios__title'>
                      Convocatoria Papers
                    </h3>
                    <div className='encuentro__formularios__button'>
                      <p>Ver formulario</p>
                      <span />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}
