import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'

export default function Wrapper({children}) {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

Wrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}