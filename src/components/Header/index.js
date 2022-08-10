import React from "react"
import { Link } from "react-router-dom"

import styles from './style.module.scss'

export default function Header() {
  
  return (
    <header className={styles.header}>
      <div>
        <Link to={'/'}><span>UNI</span><span>LOREM</span></Link>
      </div>
      <div>
        <button className={styles.login}>Войти</button>
        <button className={styles.signup}>Регистрация</button>
      </div>
    </header>
  )
}