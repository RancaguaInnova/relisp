import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import HeaderComponent from './components/Header'
import FooterComponent from './components/Footer'

import HomePage from './pages/Home'
import NewsPage from './pages/News'
import EventPage from './pages/Event'
import MeetingPage from './pages/Meeting'
import NetworkPage from './pages/Network'
import NewsDetail from './pages/NewsDetail'

function App() {
  return (
    <div className='App'>
      <HeaderComponent />
      <Router>
        <Route path='/' exact component={HomePage} />
        <Route path='/chile-19' exact component={EventPage} />
        <Route path='/noticias' exact component={NewsPage} />
        <Route path='/encuentro' exact component={MeetingPage} />
        <Route path='/red' exact component={NetworkPage} />
        <Route path='/noticias/:newsId' exact component={NewsDetail} />
      </Router>
      <FooterComponent />
    </div>
  )
}

export default App
