import React from 'react'

export default class HomePage extends React.Component {
  render() {
    return (
      <main className='home'>
        <section className='home__hero'>
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-20 offset-md-2'>
                <div className='home__hero__container'>
                  <h2 className='home__hero__title'>
                    Encuentro Latinoamericano de Innovación Social 2019
                  </h2>
                  <div className='home__hero__satellite'>
                    <img src='/images/home/hero-satellite.png' />
                  </div>
                  <div className='home__hero__bird'>
                    <img src='/images/home/hero-bird.png' />
                  </div>
                  <div className='home__hero__landscape'>
                    <img src='/images/home/hero-landscape.png' />
                  </div>
                </div>
              </div>
              <div className='col-24 col-md-8 offset-md-14'>
                <a
                  href='/encuentro#programacion'
                  className='home__hero__button'
                >
                  <i className='material-icons'>assignment_turned_in</i>
                  <p className='home__hero__text'>Convocatoria Chile 2019</p>
                  <span className='-vertical' />
                  <span className='-arrow' />
                </a>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor ames.
                  </h2>
                  <p className='home__about__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <a
                    href='/encuentro#programacion'
                    className='home__about__button'
                  >
                    <p>Ver Cronograma </p>
                  </a>
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
              <img src='/images/home/about.jpg' />
            </div>
          </div>
        </section>
        <section className='home__news'>
          <div className='home__news__ripped-background'>
            <img src='/images/red/ripped-top.png' />
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-20 offset-md-2'>
                <div className='row'>
                  <div className='col-24 col-md-8 offset-md-16'>
                    <h2 className='home__news__title'>Últimas noticias</h2>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-24 col-md-8'>
                    <a href='#' className='home__news__new-container'>
                      <div className='home__news__new-image'>
                        <img src='/images/home/news-1.jpg' />
                      </div>
                      <div className='home__news__new-content'>
                        <h4 className='home__news__new-subtitle'>elis 2019</h4>
                        <h3 className='home__news__new-title'>
                          Se abre convocatoria para postular a ELIS 2019
                        </h3>
                        <p className='home__news__new-text'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='col-24 col-md-8'>
                    <a href='#' className='home__news__new-container'>
                      <div className='home__news__new-image'>
                        <img src='/images/home/news-1.jpg' />
                      </div>
                      <div className='home__news__new-content'>
                        <h4 className='home__news__new-subtitle'>elis 2019</h4>
                        <h3 className='home__news__new-title'>
                          Se abre convocatoria para postular a ELIS 2019
                        </h3>
                        <p className='home__news__new-text'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='col-24 col-md-8'>
                    <a href='#' className='home__news__new-container'>
                      <div className='home__news__new-image'>
                        <img src='/images/home/news-1.jpg' />
                      </div>
                      <div className='home__news__new-content'>
                        <h4 className='home__news__new-subtitle'>elis 2018</h4>
                        <h3 className='home__news__new-title'>
                          Se realiza con éxito ELIS 2018
                        </h3>
                        <p className='home__news__new-text'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='col-24 col-md-8 offset-md-8'>
                    <a href='/noticias' className='home__news__button'>
                      <p>Ver más noticias</p>
                      <span />
                    </a>
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
