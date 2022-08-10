import { string } from "prop-types"
import React from "react"
import Wrapper from "../Wrapper"

import styles from './style.module.scss'

export default function InfoSection(props) {
  let cls = styles.infoSection

  if (props.background) {
    cls += ' ' + styles[props.background]
  }

  return (
    <div className={cls}>
      <Wrapper>
        <h2>
          {props.txt}
        </h2>
      </Wrapper>
    </div>
  )
}

InfoSection.propTypes = {
  txt: string,
  background: string
}