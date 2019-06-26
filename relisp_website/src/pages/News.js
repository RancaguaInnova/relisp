import React from 'react'
import moment from 'moment'

import NewsCardComponent from './../components/NewsCard'

export default class NewsPage extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.setNewsLimit = this.setNewsLimit.bind(this)
  }

  state = {
    newsLimit: 4
  }

  setNewsLimit() {
    const limit = this.state.newsLimit === 0 ? 4 : 0
    this.setState({
      newsLimit: limit
    })
  }

  render() {
    const news = [
      {
        title: 'Se abre la convocatoria para postular a ELIS 2019',
        subtitle: 'Aca el subtitulo',
        text: 'Aca el contenido de la noticia',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-I1E3u2-Y9Hac5Z0yLlA1U3N6EG27wEI8rfpyiG5b1lA8wsnkyg',
        date: moment()
      },
      {
        title: 'Se abre la convocatoria para postular a ELIS 2019',
        subtitle: 'Aca el subtitulo',
        text: 'Aca el contenido de la noticia',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-I1E3u2-Y9Hac5Z0yLlA1U3N6EG27wEI8rfpyiG5b1lA8wsnkyg',
        date: moment()
      },
      {
        title: 'Se abre la convocatoria para postular a ELIS 2019',
        subtitle: 'Aca el subtitulo',
        text: 'Aca el contenido de la noticia',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-I1E3u2-Y9Hac5Z0yLlA1U3N6EG27wEI8rfpyiG5b1lA8wsnkyg',
        date: moment()
      },
      {
        title: 'Se abre la convocatoria para postular a ELIS 2019',
        subtitle: 'Aca el subtitulo',
        text: 'Aca el contenido de la noticia',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-I1E3u2-Y9Hac5Z0yLlA1U3N6EG27wEI8rfpyiG5b1lA8wsnkyg',
        date: moment()
      },
      {
        title: 'Se abre la convocatoria para postular a ELIS 2019',
        subtitle: 'Aca el subtitulo',
        text: 'Aca el contenido de la noticia',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-I1E3u2-Y9Hac5Z0yLlA1U3N6EG27wEI8rfpyiG5b1lA8wsnkyg',
        date: moment()
      },
      {
        title: 'Se abre la convocatoria para postular a ELIS 2019',
        subtitle: 'Aca el subtitulo',
        text: 'Aca el contenido de la noticia',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-I1E3u2-Y9Hac5Z0yLlA1U3N6EG27wEI8rfpyiG5b1lA8wsnkyg',
        date: moment()
      }
    ]

    const lastNews = news && news.length > 0 ? news.pop() : null
    const limit = this.state.newsLimit
    console.log('lastNews', lastNews)
    return (
      <main className='noticias'>
        <section className='noticias__hero'>
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-20 offset-md-2'>
                <h2 className='noticias__hero__title'>Noticias</h2>
              </div>
            </div>
          </div>
        </section>
        <section className='noticias__container'>
          <div className='noticias__container__ripped-background'>
            <img src='/images/red/ripped-top.png' />
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-20 offset-md-2'>
                <div className='row'>
                  {lastNews ? (
                    <div className='col-24'>
                      {/* <NewsCardComponent data={lastNews} first={true} /> */}
                      <div className='noticias__container__noticia-wrapper -main-new'>
                        <div className='noticias__container__noticia-content -main-new'>
                          <div className='noticias__container__noticia-subtitle'>
                            {lastNews.subtitle}
                          </div>
                          <h2 className='noticias__container__noticia-title -main-new'>
                            {lastNews.title}
                          </h2>
                          <div className='noticias__container__noticia-text -main-new'>
                            {lastNews.text}
                          </div>
                        </div>
                        <div className='noticias__container__noticia-image -main-new'>
                          <img
                            src='/images/home/news-1.jpg'
                            className='-main-new'
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div />
                  )}

                  {news.map((current, index) => {
                    {
                      return (this.state.newsLimit === 4 && index < 3) ||
                        this.state.newsLimit === 0 ? (
                        <div className='col-24 col-md-8' key={index}>
                          <NewsCardComponent data={current} key={index} />
                        </div>
                      ) : (
                        <div key={index} />
                      )
                    }
                  })}

                  {news.length > 4 ? (
                    <div className='col-24 col-md-8 offset-md-8'>
                      <button
                        className='noticias__container__more-button'
                        onClick={this.setNewsLimit}
                      >
                        <p>{limit === 0 ? 'Ver menos' : 'Ver más'}</p>
                      </button>
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
