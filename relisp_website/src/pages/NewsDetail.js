import React from 'react'
import PropTypes from 'prop-types'

export default class NewsDetail extends React.Component {

  static propTypes = {
    news: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      body: PropTypes.string,
      imageUrl: PropTypes.string,
    })
  }

  render() {
    const { title, subtitle, body, imageUrl, date } = this.props.news
    return (
      <main class="nota">
        <section class="nota__heading">
          <div class="container">
            <div class="row">
              <div class="col-24 col-md-20 offset-md-2">
                <h1 class="nota__heading__title">{ title }</h1>
                <div class="nota__heading__info">
                  <div class="nota__heading__date"><span>{ date || '' }</span></div>
                  <div class="nota__heading__share">
                    <span><i class="fa fa-share-alt"></i></span>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-envelope-o"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid nota__image">
            <div class="row nopadding">
              <div class="col-24 col-sm-19">
                <div class="nota__image__wrapper"><img src={ imageUrl } alt="foto-noticia" /></div>
              </div>
            </div>
          </div>
        </section>
        <section class="nota__body">
          <div class="container">
            <div class="row">
              <div
                class="col-24 col-md-20 offset-md-2"
                dangerouslySetInnerHTML={{ __html: body }}
              />
            </div>
          </div>
        </section>
      </main>
    )
  }
}