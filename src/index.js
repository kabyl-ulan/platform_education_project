import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './style/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Layout>
      <App />
    </Layout>
  </BrowserRouter>
)
