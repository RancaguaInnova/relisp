import React from 'react'
import NewsCardComponent from '../components/NewsCard/index'
import PDFViewer from '../components/PDFViewer'
import { list } from '../helpers/news'
import ReactGA from '../helpers/analytics'
import BannerButton from '../components/BannerButton'

export default class HomePage extends React.Component {
  state = {
    news: [],
    loading: false,
    error: ''
  }

  async componentDidMount() {
    try {
      ReactGA.pageview('/')
      this.setState({ loading: true })
      const newsList = await list()
      this.setState({ loading: false, news: newsList || [] })
    } catch (error) {
      this.setState({
        news: [],
        loading: false,
        error: `Problemas al obtener las noticias: ${error.message}`
      })
    }
  }
  render() {
    const newsList = this.state.news || []
    return (
      <main className='home'>
        <section className='home__hero'>
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-20 offset-md-2'>
                <div className='home__hero__container'>
                  <div className='home__hero__landscape'>
                    <BannerButton
                      to="#"
                      image="/images/home/suspension-elis.jpeg"
                      alt="ELIS SUSPENDIDO"
                    />
                  </div>
                </div>
              </div>
              {/* <div className='col-24 col-md-20 offset-md-2'>
                <div className='home__hero__container'>
                  <div className='home__hero__landscape'>
                    <PDFViewer
                      fileUrl={{ url: "https://firebasestorage.googleapis.com/v0/b/elis-ae942.appspot.com/o/programa-elis.pdf?alt=media&token=63cd10ec-afb3-4469-9e4b-793153900b33" }}
                      gaEvent={{ category: "Home", action: "click-descarga-programa" }}
                    />
                  </div>
                </div>
              </div> */}
              <div className='col-24 col-md-20 offset-md-2'>
                <div className='home__hero__container'>
                  <h2 className='home__hero__title'>
                    Encuentro Latinoamericano de Innovación Social 2019
                  </h2>
                  <div className='home__hero__satellite'>
                    <img src='/images/home/hero-satellite.png' alt='satelite' />
                  </div>
                  <div className='home__hero__bird'>
                    <img src='/images/home/hero-bird.png' alt='ave' />
                  </div>
                  <div className='home__hero__landscape'>
                    <img src='/images/home/hero-landscape.png' alt='paisaje' />
                  </div>
                </div>
              </div>
              <div className='col-24 col-md-8 offset-md-14'>
                {/* <a href='/chile-19#convocatoria' className='home__hero__button'>
                  <i className='material-icons'>assignment_turned_in</i>
                  <p className='home__hero__text'>Convocatoria Chile 2019</p>
                  <span className='-vertical' />
                  <span className='-arrow' />
                </a> */}
              </div>
            </div>
          </div>
        </section>
        <section className='home__about'>
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-10 offset-md-2'>
                <div className='home__about__container'>
                  <h3 className='home__about__subtitle'>elis 2019</h3>
                  <h2 className='home__about__title'>
                    ELIS Y LA INNOVACIÓN SOCIAL
                  </h2>
                  <p className='home__about__text'>
                    El Encuentro Latinoamericano de Innovación Social desde el
                    Sector Público, busca crear un espacio de diálogo y de
                    construcción participativa entre actores del sector público,
                    privado y la academia de toda la región, que estén generando
                    conocimiento y soluciones de alto impacto.
                  </p>
                  {/* <a
                    href='https://firebasestorage.googleapis.com/v0/b/elis-ae942.appspot.com/o/Portada%20Bases%20ELIS-fusionado.pdf?alt=media&token=4176b97f-7734-47de-8d98-1064a5a8a411'
                    className='home__about__button'
                    target='_blank'
                    onClick={() => {
                      ReactGA.event({
                        category: 'home',
                        action: 'click-ver-bases'
                      })
                    }}
                  >
                    <p>Ver Bases </p>
                  </a> */}
                  <br />
                  <br /> <br />
                  <br /> <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className='home__about__image'>
            <div className='home__about__wrapper'>
              <img src='/images/home/about.jpg' alt='' />
            </div>
          </div>
        </section>
        <section className='home__news'>
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-20 offset-md-2 home__news__ripped-background'>
                <img src='/images/red/ripped-top.png' alt='logo' />
              </div>
            </div>
            <div className='row'>
              <div className='col-24 col-md-20 offset-md-2'>
                <div className='row'>
                  <div className='col-24 col-md-8'>
                    <h2 className='home__news__title'>Últimas noticias</h2>
                  </div>
                </div>
                <div className='row'>
                  {newsList.map((news, index) => {
                    return index < 3 ? (
                      <div className='col-24 col-md-8' key={index}>
                        <NewsCardComponent data={news} minimal />
                      </div>
                    ) : null
                  })}

                  {newsList.length > 3 ? (
                    <div className='col-24 col-md-8 offset-md-8'>
                      <a href='/noticias' className='home__news__button'>
                        <p>Ver más noticias</p>
                        <span />
                      </a>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}
