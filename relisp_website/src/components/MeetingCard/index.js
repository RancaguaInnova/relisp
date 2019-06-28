import React from 'react'

export default class MeetingCardComponent extends React.Component {
  render() {
    const data = this.props.data || {
      title: '',
      location: {
        country: '',
        city: ''
      },
      date: '',
      text: ``,
      imageUrl: ''
    }

    console.log('data', data)
    return (
      <div className='encuentro__encuentros__slide-container'>
        {/* <div className='col-md-8 col-xs-12'>
          <img src={data.imageUrl} />
        </div> */}
        <div className='col-md-16 col-xs-12'>
          <h4 className='encuentro__encuentros__slide-subtitle'>
            {data.title}
          </h4>
          <h3 className='encuentro__encuentros__slide-title'>
            {data.location.country}
          </h3>
          <div className='encuentro__encuentros__slide-wrapper'>
            <div className='encuentro__encuentros__slide-date'>
              <i className='fa fa-calendar' />
              <p>{data.date}</p>
            </div>
            <div className='encuentro__encuentros__slide-location'>
              <i className='fa fa-map-marker' />
              <p>{data.location.city}</p>
            </div>
          </div>
          <p className='encuentro__encuentros__slide-text'>{data.text}</p>
        </div>
        <div className='encuentro__encuentros__slide-image'>
          <img src={data.imageUrl} />
        </div>
      </div>
    )
  }
}
