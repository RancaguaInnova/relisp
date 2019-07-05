import React from 'react'
import TimelineComponent from './../components/Timeline'
export default class EventPage extends React.Component {
  render() {
    const timeline = [
      {
        title: '24 de Octubre 2019',
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
        title: '25 de Octubre 2019',
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
      },
      {
        title: '26 de Octubre 2019',
        day: '26',
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
        <section className='encuentro__resena'>
          <div className='container'>
            <div className='row text-center'>
              <img
                src='/images/relis_cl.png'
                width='100%'
                className='center-img'
                alt="elis-logo"
              />
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
              title="map1"
            />
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.2764558374106!2d-70.7444634847265!3d-34.16484884191605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966343149faedeb1%3A0xe3229c417a6941eb!2sUOH!5e0!3m2!1ses-419!2scl!4v1561480388549!5m2!1ses-419!2scl'
              allowFullScreen
              data-content='uoh'
              title="map2"
            />
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.870160888052!2d-70.7429440842473!3d-34.175237142460574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96634338aac3c365%3A0x7b3d6b132ce00f9a!2sAv.+Capit%C3%A1n+Antonio+Mill%C3%A1n+342%2C+Rancagua%2C+Regi%C3%B3n+del+Libertador+Gral.+Bernardo+O%E2%80%99Higgins%2C+Chile!5e0!3m2!1ses-419!2sar!4v1560428608566!5m2!1ses-419!2sar'
              allowFullScreen
              data-content='regional'
              title="map3"
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
            <img src='/images/encuentro/ripped-bottom-white.png' alt="" />
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
