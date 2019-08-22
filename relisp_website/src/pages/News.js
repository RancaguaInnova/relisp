import React from 'react'
import { list } from '../helpers/news'
import NewsCardComponent from './../components/NewsCard'
import ReactGA from '../helpers/analytics'
export default class NewsPage extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      newsLimit: 4,
      news: [],
      loading: false,
      error: ''
    }

    this.setNewsLimit = this.setNewsLimit.bind(this)
  }

  setNewsLimit() {
    const limit = this.state.newsLimit === 0 ? 4 : 0
    this.setState({
      newsLimit: limit
    })
  }

  async componentDidMount() {
    ReactGA.pageview('/noticias')
    this.setState({ loading: true })
    try {
      const newsList = await list()
      this.setState({ news: newsList, loading: false })
    } catch (error) {
      this.setState({
        newsLimit: 4,
        news: [],
        loading: false,
        error: `Problemas al obtener las noticias: ${error.message}`
      })
    }
  }

  renderNews = () => {
    const { news, newsLimit } = this.state || []

    return news.map((current, index) => {
      if (newsLimit === 4 && index < 3) {
        return (
          <div className='col-24 col-md-8' key={index}>
            <NewsCardComponent data={current} key={index} minimal />
          </div>
        )
      } else {
        return <div key={index} />
      }
    })
  }

  render() {
    const { news, newsLimit } = this.state || []
    const lastNews = news && news.length > 0 ? news.pop() : null

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
            <img src='/images/red/ripped-top.png' alt='ripped-top' />
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-20 offset-md-2'>
                <div className='row'>
                  {lastNews ? (
                    <div className='col-24'>
                      <NewsCardComponent data={lastNews} />
                    </div>
                  ) : (
                    <div />
                  )}

                  {this.renderNews()}

                  {news.length > newsLimit ? (
                    <div className='col-24 col-md-8 offset-md-8'>
                      <button
                        className='noticias__container__more-button'
                        onClick={this.setNewsLimit}
                      >
                        <p>{newsLimit === 0 ? 'Ver menos' : 'Ver más'}</p>
                      </button>
                    </div>
                  ) : (
                    <div style={{ marginTop: 200 }} />
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
