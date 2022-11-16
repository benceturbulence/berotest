import React from 'react'
import logo from './img/logo.jpg'
export default function Header() {
  return (
      <div className="header">
      <img className="headerAvatar" src={logo} />
      <h1>Enciclopedia Beronica</h1>
    </div>
  )
}