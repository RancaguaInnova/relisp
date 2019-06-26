import React from 'react'

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='container'>
          <div className='row'>
            <div className='col-24 col-md-20 offset-md-2'>
              <div className='header__container'>
                <div className='header__logo'>
                  <img src='/images/logo.png' />
                </div>
                <nav className='header__nav'>
                  <ul className='header__list'>
                    <li className='header__item'>
                      <a href='/'>Home</a>
                    </li>
                    <li className='header__item'>
                      <a href='/red'>La Red</a>
                    </li>
                    <li className='header__item'>
                      <a href='/encuentro'>Encuentros</a>
                    </li>
                    <li className='header__item'>
                      <a href='/noticias'>Noticias</a>
                    </li>
                  </ul>
                </nav>
                <div className='header__hamburguer'>
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
