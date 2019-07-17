import React from 'react'
import { Link } from 'react-router-dom'

export default class NewsCardComponent extends React.Component {
  renderNewsBody = () => {
    const {
      minimal,
      data: { text, title, id }
    } = this.props
    if (minimal) {
      return (
        <div className='noticias__container__noticia-text'>
          <div
            className='col-24 col-md-20 offset-md-2'
            style={{ marginTop: 20 }}
          >
            <Link to={`/noticias/${id}`} className='home__news__button'>
              <p>Ver detalle</p>
              <span />
            </Link>
          </div>
        </div>
      )
    } else {
      return (
        <div
          className='noticias__container__noticia-text'
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )
    }
  }

  render() {
    const {
      data: { title, imageUrl, subtitle },
      first
    } = this.props

    return (
      <div className='noticias__container__noticia-wrapper'>
        <div className='noticias__container__noticia-image'>
          <img src={imageUrl} alt='imagen-noticia' />
        </div>
        <div
          className='noticias__container__noticia-content'
          style={this.props.minimal ? { maxHeight: 400, minHeight: 400 } : {}}
        >
          <div className='noticias__container__noticia-subtitle'>
            {subtitle}
          </div>
          <h3 className='noticias__container__noticia-title'>{title}</h3>
          {this.renderNewsBody()}
        </div>
      </div>
    )
  }
}
