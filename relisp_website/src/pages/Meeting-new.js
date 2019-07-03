import React from 'react'
import TimelineComponent from '../components/Timeline'
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
              {/* <div className='col-24 col-md-20 offset-md-2'>
                <h3 className='encuentro__hero__subtitle'>HISTORIA</h3>
              </div> */}
              <div className='col-24 col-md-8 offset-md-2'>
                <h2 className='encuentro__hero__title'>
                  Descripción de la motivación para hacer el encuentro.
                </h2>
              </div>
              <div className='col-24 col-md-8 offset-md-4'>
                <p className='encuentro__hero__text'>
                En la Corporación de desarrollo e innovación de la Ilustre Municipalidad de Rancagua,
                nos sentimos muy orgullosos de ser los organizadores del V Encuentro latinoamericano
                de Innovación Social desde el sector Público, lo cual nos permitirá entregar herramientas,
                conocimientos y nuevas experiencias a nuestros colaboradores locales, en búsqueda de
                innovar en el servicio público, así proponemos las soluciones en base a trabajos
                colaborativos entre agentes académicos, servidores públicos y entidades privadas en
                acción y mejoras.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="encuentro__encuentros">
          <div class="container">
            <div class="row">
              <div class="col-24 col-md-20 offset-md-2">
                <h2 class="encuentro__encuentros__title">Encuentros anteriores</h2>
                <div class="encuentro__encuentros__slide">
                  <div class="encuentro__encuentros__slide-container">
                    <div class="encuentro__encuentros__slide-content">
                      <h4 class="encuentro__encuentros__slide-subtitle">PRIMERA VERSIÓN</h4>
                      <h3 class="encuentro__encuentros__slide-title">Colombia 2015</h3>
                      <div class="encuentro__encuentros__slide-wrapper">
                        <div class="encuentro__encuentros__slide-date"><i class="fa fa-calendar"></i>
                          <p>2 - 4 Diciembre</p>
                        </div>
                        <div class="encuentro__encuentros__slide-location"><i class="fa fa-map-marker"></i>
                          <p>Bogotá</p>
                        </div>
                      </div>
                      <p class="encuentro__encuentros__slide-text">Buscó crear un espacio de diálogo y de construcción participativa entre actores del sector público de toda la región, que estén generando conocimiento y soluciones de alto umpacto para mejorar la calidad de vida de la población en situación de vulnerabilidad. El evento fue dirigido principalmente a ejecutores de política pública, académicos, entidades privadas, organizacipnes de la sociedad civil y estudiantes de carreras afines. Una contribución a la creación de un espacio de diálogo donde CAF banco de desarrollo de América Latina promueve la innovación social a través de la articulación de actores, el intercambio u la difusión de experiencias y aprendizajes con miras a aportar nuevas ideas a necesidades sociales no resueltas.</p>
                    </div>
                    <div class="encuentro__encuentros__slide-image"><img src="/images/encuentro/slide.jpg" /></div>
                  </div>
                </div>
                <div class="encuentro__encuentros__slide">
                  <div class="encuentro__encuentros__slide-container">
                    <div class="encuentro__encuentros__slide-content">
                      <h4 class="encuentro__encuentros__slide-subtitle">PRIMERA VERSIÓN</h4>
                      <h3 class="encuentro__encuentros__slide-title">Colombia 2015</h3>
                      <div class="encuentro__encuentros__slide-wrapper">
                        <div class="encuentro__encuentros__slide-date"><i class="fa fa-calendar"></i>
                          <p>2 - 4 Diciembre</p>
                        </div>
                        <div class="encuentro__encuentros__slide-location"><i class="fa fa-map-marker"></i>
                          <p>Bogotá</p>
                        </div>
                      </div>
                      <p class="encuentro__encuentros__slide-text">Buscó crear un espacio de diálogo y de construcción participativa entre actores del sector público de toda la región, que estén generando conocimiento y soluciones de alto umpacto para mejorar la calidad de vida de la población en situación de vulnerabilidad. El evento fue dirigido principalmente a ejecutores de política pública, académicos, entidades privadas, organizacipnes de la sociedad civil y estudiantes de carreras afines. Una contribución a la creación de un espacio de diálogo donde CAF banco de desarrollo de América Latina promueve la innovación social a través de la articulación de actores, el intercambio u la difusión de experiencias y aprendizajes con miras a aportar nuevas ideas a necesidades sociales no resueltas.</p>
                    </div>
                    <div class="encuentro__encuentros__slide-image"><img src="/images/encuentro/slide.jpg" /></div>
                  </div>
                </div>
                <div class="encuentro__encuentros__slide">
                  <div class="encuentro__encuentros__slide-container">
                    <div class="encuentro__encuentros__slide-content">
                      <h4 class="encuentro__encuentros__slide-subtitle">PRIMERA VERSIÓN</h4>
                      <h3 class="encuentro__encuentros__slide-title">Colombia 2015</h3>
                      <div class="encuentro__encuentros__slide-wrapper">
                        <div class="encuentro__encuentros__slide-date"><i class="fa fa-calendar"></i>
                          <p>2 - 4 Diciembre</p>
                        </div>
                        <div class="encuentro__encuentros__slide-location"><i class="fa fa-map-marker"></i>
                          <p>Bogotá</p>
                        </div>
                      </div>
                      <p class="encuentro__encuentros__slide-text">Buscó crear un espacio de diálogo y de construcción participativa entre actores del sector público de toda la región, que estén generando conocimiento y soluciones de alto umpacto para mejorar la calidad de vida de la población en situación de vulnerabilidad. El evento fue dirigido principalmente a ejecutores de política pública, académicos, entidades privadas, organizacipnes de la sociedad civil y estudiantes de carreras afines. Una contribución a la creación de un espacio de diálogo donde CAF banco de desarrollo de América Latina promueve la innovación social a través de la articulación de actores, el intercambio u la difusión de experiencias y aprendizajes con miras a aportar nuevas ideas a necesidades sociales no resueltas.</p>
                    </div>
                    <div class="encuentro__encuentros__slide-image"><img src="/images/encuentro/slide.jpg" /></div>
                  </div>
                </div>
                <div class="encuentro__encuentros__slide">
                  <div class="encuentro__encuentros__slide-container">
                    <div class="encuentro__encuentros__slide-content">
                      <h4 class="encuentro__encuentros__slide-subtitle">PRIMERA VERSIÓN</h4>
                      <h3 class="encuentro__encuentros__slide-title">Colombia 2015</h3>
                      <div class="encuentro__encuentros__slide-wrapper">
                        <div class="encuentro__encuentros__slide-date"><i class="fa fa-calendar"></i>
                          <p>2 - 4 Diciembre</p>
                        </div>
                        <div class="encuentro__encuentros__slide-location"><i class="fa fa-map-marker"></i>
                          <p>Bogotá</p>
                        </div>
                      </div>
                      <p class="encuentro__encuentros__slide-text">Buscó crear un espacio de diálogo y de construcción participativa entre actores del sector público de toda la región, que estén generando conocimiento y soluciones de alto umpacto para mejorar la calidad de vida de la población en situación de vulnerabilidad. El evento fue dirigido principalmente a ejecutores de política pública, académicos, entidades privadas, organizacipnes de la sociedad civil y estudiantes de carreras afines. Una contribución a la creación de un espacio de diálogo donde CAF banco de desarrollo de América Latina promueve la innovación social a través de la articulación de actores, el intercambio u la difusión de experiencias y aprendizajes con miras a aportar nuevas ideas a necesidades sociales no resueltas.</p>
                    </div>
                    <div class="encuentro__encuentros__slide-image"><img src="/images/encuentro/slide.jpg" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}
