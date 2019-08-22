import React from 'react'
import PropTypes from 'prop-types'
import { get } from '../helpers/news'
import ReactGA from '../helpers/analytics'
export default class NewsDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      news: {
        title: '',
        subtitle: '',
        body: '',
        imageUrl: ''
      }
    }
  }

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  async componentDidMount() {
    this.setState({ loading: true })
    try {
      ReactGA.pageview(`/noticias/${this.props.match.params.id}`)
      const news = await get(this.props.match.params.id)
      console.log('news:', news)
      this.setState({ news, loading: false })
    } catch (error) {
      this.setState({
        news: null,
        loading: false,
        error: `Problemas al obtener la noticia: ${error.message}`
      })
    }
  }

  render() {
    if (this.state.loading) return <div />
    const { title, subtitle, body, imageUrl, date } = this.state.news
    return (
      <main className='nota'>
        <section className='nota__heading'>
          <div className='container'>
            <div className='row'>
              <div className='col-24 col-md-20 offset-md-2'>
                <h1 className='nota__heading__title'>{title}</h1>
                <div className='nota__heading__info'>
                  <div className='nota__heading__date'>
                    <span>{date || ''}</span>
                  </div>
                  <div className='nota__heading__share'>
                    <span>
                      <i className='fa fa-share-alt' />
                    </span>
                    <a href='#'>
                      <i className='fa fa-facebook' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-twitter' />
                    </a>
                    <a href='#'>
                      <i className='fa fa-envelope-o' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container-fluid nota__image'>
            <div className='row nopadding'>
              <div className='col-sm-19 col-md-20 offset-md-2'>
                <div className='nota__image__wrapper'>
                  <img src={imageUrl} alt='foto-noticia' />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='nota__body'>
          <div className='container'>
            <div className='row'>
              <div
                className='col-24 col-md-20 offset-md-2'
                dangerouslySetInnerHTML={{ __html: body }}
              />
            </div>
          </div>
        </section>
      </main>
    )
  }
}
