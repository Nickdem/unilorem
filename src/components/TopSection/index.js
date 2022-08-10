import React from "react"
import Header from "../Header"
import Section from "../Section"
import TopSectionContent from "../TopSectionContent"
import styles from './style.module.scss'

export default function TopSection() {
  
  return (
    <Section cls={styles.top}>
      <Header />
      <TopSectionContent />
    </Section>
  )
}