import React from 'react'

export default class FooterComponent extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-24 col-md-20 offset-md-2'>
              <div className='row'>
                <div className='col-24'>
                  <div className='footer__container'>
                    <div className='footer__wrapper'>
                      <div className='footer__rancagua-logo'>
                        <img src='/images/logo-corp.png' alt="Logo Rancagua" />
                      </div>
                    </div>
                    <div className='footer__wrapper'>
                      <p className='footer__text'>
                        Alcázar #530, Rancagua, Chile
                      </p>
                    </div>
                    <div className='footer__wrapper'>
                      <p className='footer__text'>(56) 722 605 380</p>
                      <p className='footer__text'>contacto@smart.rancagua.cl</p>
                    </div>
                    <div className='footer__wrapper'>
                      <div className='footer__logo-purple'>
                        <img src='/images/logo-purple.png' alt="Logo Rancagua" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-24'>
                  <div className='footer__group'>
                    <p className='footer__copyright'>
                      &copy; Desarrollo e innovación Rancagua
                    </p>
                    <ul className='footer__social'>
                      {/* <li className='footer__item'>
                        <a href='' target='_blank'>
                          <i className='fa fa-facebook' />
                        </a>
                      </li> */}
                      <li className='footer__item'>
                        <a
                          href='http://twitter.com/RancaguaInnova/'
                          target='_blank'
                        >
                          <i className='fa fa-twitter' />
                        </a>
                      </li>
                      {/*  <li className='footer__item'>
                        <a href='' target='_blank'>
                          <i className='fa fa-linkedin' />
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
