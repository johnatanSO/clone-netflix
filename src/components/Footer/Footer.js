import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <h2>Clone Netflix</h2>
      <div className="footerContent">
        <div className="direitos">
          <h3>Direitos</h3>
          <ul>
            <li>Dados: API RESTfull The movie DB</li>
            <li>Layout: Netflix</li>
            <li>Construído com 💜 por Johnatan</li>
          </ul>
        </div>

        <div>
          <li>Repositório GitHub: <a href='/'>Clone Netflix</a></li>
        </div>

      </div>
      
    </footer>
  )
}

export default Footer