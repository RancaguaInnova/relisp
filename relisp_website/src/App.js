import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css'
import HeaderComponent from './components/Header'
import FooterComponent from './components/Footer'

import HomePage from './pages/Home'
import NewsPage from './pages/News'
import MeetingPage from './pages/Meeting'
import NetworkPage from './pages/Network'

function App() {
  return (
    <div className='App'>
      <HeaderComponent />
      <Router>
        <Route path='/' exact component={HomePage} />
        <Route path='/noticias' exact component={NewsPage} />
        <Route path='/encuentro' exact component={MeetingPage} />
        <Route path='/red' exact component={NetworkPage} />
      </Router>
      <FooterComponent />
    </div>
  )
}

export default App
