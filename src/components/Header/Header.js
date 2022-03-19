import React, {useState} from 'react'
import './Header.css'


export default function Header(props) {



  return (
    <header className={props.black? 'header black' : 'header'}>
      <div className="header--logo">
        <a href="/">
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="Logo Netflix"/>
        </a>
        <span>em construção... by: john</span>
      </div>
      <div className="header--user">
        <h2>Johnatan</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Logo usuário" />
        
      </div>
    </header>
  )
}
