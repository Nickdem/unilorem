import React from "react"
import PropTypes from 'prop-types'

import styles from './style.module.scss'

export default function FlexWrapper({ children }) {
  return (
    <div className={styles.flexWrapper}>
      {children}
    </div>
  )
}

FlexWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
