import React from "react"
import Wrapper from "../Wrapper"
import styles from './style.module.scss'

export default function TopSectionContent() {
  
  return (
      <Wrapper>
        <h1 className={styles.heading}>
          Готовое решение для бизнеса
          по конвертации посетителей в покупателей
        </h1>
        <p className={styles.description}>
          Без продажников, маркетологов и погружения в детали
        </p>
        <button className={styles.btn}>Оставить заявку</button>
      </Wrapper>
  )
}