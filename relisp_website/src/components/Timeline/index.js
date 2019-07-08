import React from 'react'
import PropTypes from 'prop-types'

export default class TimelineComponent extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.setCurrent = this.setCurrent.bind(this)
    this.state = { current: 0, timeline: [] }
  }

  static propTypes = {
    timeline: PropTypes.arrayOf(PropTypes.object)
  }

  setCurrent(index) {
    const state = this.state
    state.current = index
    this.setState(state)
  }

  componentDidMount() {
    const state = this.state
    state.timeline = this.props.data
    this.setState(state)
  }

  render() {
    return (
      <section id='programacion' className='encuentro__programacion'>
        <div className='encuentro__programacion__ripped-background'>
          <img src='/images/red/ripped-top.png' alt="top" />
        </div>
        <div className='container'>
          <div className='row justify-content-center'>
            {this.state.timeline.map((currentDay, index) => (
              <div
                className='col-24 col-sm-8 col-lg-6'
                key={index}
                onClick={() => this.setCurrent(index)}
              >
                <div
                  data-day={currentDay.day}
                  className={`encuentro__programacion__container ${
                    this.state.current === index ? '-active' : ''
                  } `}
                >
                  <h4 className='encuentro__programacion__subtitle'>
                    PROGRAMACIÓN
                  </h4>
                  <h3 className='encuentro__programacion__title'>
                    { currentDay.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className='row'>
            <div className='col-24 col-md-12 offset-md-6'>
              {this.state.timeline.map((currentDay, index) => (
                <div
                  key={index}
                  data-schedule={currentDay.day}
                  className={`encuentro__programacion__group ${
                    this.state.current === index ? '-active' : ''
                  }`}
                >
                  {currentDay.activities.map((currentActivity, idx) => (
                    <div
                      className='encuentro__programacion__group-wrapper'
                      key={idx}
                    >
                      <div className='encuentro__programacion__content-group -left'>
                        {currentActivity.imageUrl !== '' && idx % 2 === 0 ? (
                          <div className='encuentro__programacion__image encuentro__programacion__image--left'>
                            <img src={currentActivity.imageUrl} alt="actividad" />
                          </div>
                        ) : (
                          <div />
                        )}
                        {idx % 2 !== 0 ? (
                          <div>
                            <h4 className='encuentro__programacion__subtitle'>
                              {currentActivity.hour}
                            </h4>
                            <h3 className='encuentro__programacion__title encuentro__programacion__title--small'>
                              {currentActivity.title}
                            </h3>
                          </div>
                        ) : (
                          <div />
                        )}
                      </div>
                      <div className='encuentro__programacion__content-group encuentro__programacion__content-group--left -right'>
                        {currentActivity.imageUrl !== '' && idx % 2 !== 0 ? (
                          <div className='encuentro__programacion__image'>
                            <img src={currentActivity.imageUrl} alt="actividad" />
                          </div>
                        ) : (
                          <div />
                        )}
                        {idx % 2 === 0 ? (
                          <div>
                            <h4 className='encuentro__programacion__subtitle'>
                              {currentActivity.hour}
                            </h4>
                            <h3 className='encuentro__programacion__title encuentro__programacion__title--small'>
                              {currentActivity.title}
                            </h3>
                          </div>
                        ) : (
                          <div />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
