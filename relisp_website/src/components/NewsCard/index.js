import React from 'react'

export default class NewsCardComponent extends React.Component {
  render() {
    const data = this.props.data || {
      title: '',
      subtitle: '',
      text: '',
      imageUrl: ''
    }

    const first = this.props.firts || false
    if (first) {
      return (
        <div className='noticias__container__noticia-wrapper -main-new'>
          <div className='noticias__container__noticia-content -main-new'>
            <div className='noticias__container__noticia-subtitle'>
              ELIS 2019
            </div>
            <h2 className='noticias__container__noticia-title -main-new'>
              Se aaabre la convocatoria para postular a ELIS 2019
            </h2>
            <div className='noticias__container__noticia-text -main-new'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
          <div className='noticias__container__noticia-image -main-new'>
            <img src='/images/home/news-1.jpg' className='-main-new' />
          </div>
        </div>
      )
    } else {
      return (
        <div className={`noticias__container__noticia-wrapper`}>
          <div className='noticias__container__noticia-image'>
            <img src='/images/home/news-1.jpg' />
          </div>
          <div className='noticias__container__noticia-content'>
            <div className='noticias__container__noticia-subtitle'>
              {data.subtitle}
            </div>
            <h3 className='noticias__container__noticia-title'>{data.title}</h3>
            <div className='noticias__container__noticia-text'>{data.text}</div>
          </div>
        </div>
      )
    }
  }
}
