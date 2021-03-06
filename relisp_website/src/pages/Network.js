import React from 'react'
import { list, add } from '../helpers/subscriptions'
import isEmpty from 'lodash/isEmpty'
import sortBy from 'lodash/sortBy'
import remove from 'lodash/remove'
import filter from 'lodash/filter'
import ReactGA from '../helpers/analytics'

export default class NetworkPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      director: null,
      subscriptionsList: null,
      newSubscription: null
    }
  }

  componentDidMount = async () => {
    ReactGA.pageview('/red')
    if (!this.state.subscriptionsList) {
      try {
        let subscriptionsList = await list()
        const director = remove(subscriptionsList, { role: 'Director' })[0]
        subscriptionsList = sortBy(filter(subscriptionsList, subs => subs.role === 'Coordinador'), ['name'])

        if (!isEmpty(subscriptionsList)) {
          this.setState({ subscriptionsList, director })
        }
      } catch (error) {
        console.log('Error getting subscriptions list:', error)
      }
    }
  }

  handleChange = evt => {
    const { name, value } = evt.target
    const subscription = Object.assign({}, this.state.newSubscription)
    subscription[name] = value
    this.setState({ newSubscription: subscription })
  }

  handleSubmit = async evt => {
    evt.preventDefault()

    try {
      const response = await add(this.state.newSubscription)
    } catch (error) {
      console.log('Error adding subscription:', error)
    }
  }

  renderDirector = () => {
    const { director } = this.state
    if (director) {
      return (
        <li className='list-group-item' key={'director'}>
          <div className='d-flex'>
            <h5 className='mb-0'>{director.name}</h5>
          </div>
          <p className='d-flex mb-1'>{director.position || director.role}</p>
          <small className='d-flex'>{director.country}</small>
        </li>
      )
    }
  }

  renderNetwork = () => {
    const { subscriptionsList } = this.state
    if (subscriptionsList) {
      return subscriptionsList.map((subscription, i) => {
        return (
          <li className='list-group-item' key={i}>
            <div className='d-flex'>
              <h5 className='mb-0'>{subscription.name}</h5>
            </div>
            <p className='d-flex mb-1'>
              {subscription.position || subscription.role}
            </p>
            <small className='d-flex'>{subscription.country}</small>
          </li>
        )
      })
    }
  }

  renderSubscriptionForm = () => {
    return (
      <div className='row'>
        <div className='col-24'>
          <div className='red__valor__container'>
            <h3 className='red__valor__title -title'>Únete a la Red</h3>
            <form className='form-inline'>
              <div className='form-group'>
                <label className='sr-only' htmlFor='exampleInputEmail3'>
                  Nombre
                </label>
                <input
                  onChange={this.handleChange}
                  name='name'
                  type='text'
                  className='form-control'
                  placeholder='Nombre'
                />
              </div>
              <div className='form-group'>
                <label className='sr-only' htmlFor='exampleInputPassword3'>
                  Cargo
                </label>
                <input
                  type='text'
                  name='position'
                  className='form-control'
                  placeholder='Cargo'
                  onChange={this.handleChange}
                />
              </div>
              <div className='form-group'>
                <label className='sr-only' htmlFor='exampleInputEmail3'>
                  País
                </label>
                <input
                  type='text'
                  name='country'
                  className='form-control'
                  placeholder='País'
                  onChange={this.handleChange}
                />
              </div>
              <div className='form-group'>
                <label className='sr-only' htmlFor='exampleInputPassword3'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  className='form-control'
                  placeholder='Email'
                  onChange={this.handleChange}
                />
              </div>
              <button
                type='submit'
                className='btn btn-default'
                onClick={this.handleSubmit}
                style={{ marginLeft: 10 }}
              >
                Suscribir
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <main className='red'>
        <section className='red__hero'>
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-20 offset-md-2'>
                <div className='red__hero__container'>
                  <h2 className='red__hero__title'>¿Qué es RELIS?</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='red__mision'>
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-8 offset-md-2'>
                <div className='red__mision__container'>
                  <h4 className='red__mision__subtitle -subtitle'>LA RED</h4>
                  <h3 className='red__mision__title -title'>Misión</h3>
                  <p className='red__mision__text -text'>
                    Promover la innovación social desde y con el sector público
                    en América Latina, así­ como fomentar la cooperación entre
                    los miembros de la red, mediante la articulación de actores,
                    mecanismos, conocimiento y mejores prácticas, que reconozcan
                    a la innovación social como una herramienta para construir
                    cambios positivos en la región.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='red__mision__image'>
            <div className='red__mision__wrapper'>
              <img src='/images/red/mision.jpg' />
            </div>
          </div>
        </section>
        <section className='red__vision'>
          <div className='red__vision__ripped-background'>
            <img src='/images/red/ripped-top.png' />
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-20 offset-md-2'>
                <div className='red__vision__container'>
                  <h3 className='red__vision__title -title -title--white'>
                    Visión
                  </h3>
                  <p className='red__vision__text -text -text--white'>
                    Consolidarse en una plataforma reconocida de innovación
                    social con la participación de diferentes actores
                    (Académicos, Privados, entre otros) para el intercambio de
                    conocimiento y la <b>construcción colectiva</b> de proyectos
                    que contribuyan con el avance de los{' '}
                    <b>Objetivos de Desarrollo Sostenible</b>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='red__objetivos'>
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-8 offset-md-14'>
                <div className='red__objetivos__container'>
                  <h3 className='red__objetivos__title -title'>Objetivos</h3>
                  <div className='red__objetivos__tabs'>
                    <p data-target='general' className='red__objetivos__tab'>
                      GENERAL
                    </p>
                    <p
                      data-target='especificos'
                      className='red__objetivos__tab'
                    >
                      ESPECÍFICOS
                    </p>
                  </div>
                  <div
                    data-content='general'
                    className='red__objetivos__text -text text-left objectives-section'
                  >
                    <div>
                      <h4>- GENERAR SENTIDO DE PERTENENCIA A LA RED ELIS</h4>
                      {/* <p>- Definir los roles de los miembros de la RED ELIS </p>
                      <p>
                        - Identificar nuevos actores públicos, privados y tercer
                        sector que fortalezcan la Red.
                      </p>
                      <p>
                        - Consensuar los principios y reglas de juego de los
                        participantes de la Red ELIS
                      </p> */}
                    </div>

                    <div>
                      <h4>
                        - GENERAR PROYECTOS REGIONALES DE INNOVACIÓN SOCIAL
                      </h4>
                      {/* <p>
                        - Validar problemáticas comunes entre actores Nodo País
                      </p>
                      <p>
                        - Generar alternativas de solución de manera conjunta a
                        las problemáticas validadas
                      </p>
                      <p>
                        - Poner a prueba y evaluar las alternativas de solución
                      </p>
                      <p>- Sistematizar el (los) proyecto (s) del Nodo País</p> */}
                    </div>

                    <div>
                      <h4>
                        - FOMENTAR Y PROMOVER BUENAS PRÁCTICAS DE INNOVACIÓN
                        SOCIAL
                      </h4>
                      {/* <p>
                        - Generar espacios periódicos de socialización de los
                        proyectos de innovación de los Nodos País (eventual
                        anual ELIS)
                      </p>
                      <p>
                        - Generar espacios de transferencia de conocimiento y
                        acompañamiento para replicar los proyectos de los Nodos
                        País
                      </p>
                      <p>
                        - Generar un repositorio de información que facilite la
                        implementación de proyectos.
                      </p> */}
                    </div>
                  </div>
                  <div
                    data-content='especificos'
                    className='red__objetivos__text -text objectives-section'
                  >
                    <p>
                      1. Gestionar y aplicar conocimiento vinculado a la
                      innovación social desde sector público, así como compartir
                      buenas prácticas, a través de un observatorio regional.
                    </p>
                    <p>
                      2. Articular esfuerzos, fortalecer alianzas e intercambiar
                      experiencias con el fin de co-crear mecanismos para
                      incentivar la innovación social desde sector público en
                      América latina.
                    </p>
                    <p>
                      3. Facilitar la comunicación y difusión de fondos,
                      herramientas, u otros recursos ya existentes a nivel
                      público o privado, destinados a promover la innovación
                      social.
                    </p>
                    <p>
                      4. Fomentar el desarrollo de proyectos colaborativos, así
                      como el intercambio de experiencias y habilidades,
                      conectando problemas en común entre los miembros de la
                      red.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='red__objetivos__image'>
            <img src='/images/red/objetivos.png' />
          </div>
        </section>
        <section className='red__valor'>
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-20 offset-md-2'>
                <div className='red__valor__container'>
                  <h3 className='red__valor__title -title'>
                    Propuesta de valor
                  </h3>
                  <p className='red__valor__text -text -text--purple'>
                    Somos la primera red a nivel América Latina que ofrece una
                    oportunidad de vinculación y soporte horizontal a
                    emprendedores en los gobiernos para desarrollar mejores
                    prácticas de innovación social desde y con el sector
                    público, en conjunto con actores multi-sectoriales. La
                    innovación es un concepto novedoso para el sector público,
                    pero qué podrá ayudar a los gobiernos a acrecentar el
                    impacto de sus planes, programas y polí­ticas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='red__historia'>
          <img src='/images/red/ripped-bottom.png' />
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-20 offset-md-2'>
                <h3 className='red__historia__title -title -title--white'>
                  Historia
                </h3>
              </div>
              <div className='col-24 col-md-8 offset-md-2'>
                <p className='red__historia__text -text -text--white'>
                  Tras cinco años de la creación de la RED ELIS resulta
                  interesante redefinir nuestra visión a 2024, con el objetivo
                  de potenciar los beneficios de esta alianza regional, unificar
                  expectativas y planificar una agenda de trabajo conjunta, que
                  nos permita alinear los ejercicios
                </p>
              </div>
              <div className='col-24 col-md-8 offset-md-4'>
                <p className='red__historia__text -text -text--white'>
                  propuestos desde la RED con los resultados que como miembros
                  requerimos para impulsar acciones que contribuyan a generar
                  valor para nuestras instituciones y las comunidades vinculadas
                </p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ paddingLeft: 15, paddingRight: 15 }}>
          <div className='row'>
            <div className='col-24'>
              <div className='red__valor__container'>
                <h3 className='red__valor__title -title'>
                  Coordinadores de la Red
                </h3>
                <div className='row'>
                  <div
                    className='col-xs-24 col-md-8 col-md-offset-4'
                    style={{ textAlign: 'center', margin: 'auto' }}
                  >
                    <ul className='list-group text-left subscribers'>
                      {this.renderDirector()}
                      {this.renderNetwork()}
                    </ul>
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
