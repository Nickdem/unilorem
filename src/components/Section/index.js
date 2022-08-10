import React from 'react'
import PropTypes, { string } from 'prop-types'
import styles from './style.module.scss'

export default function Section({children, cls}) {
    return (
        <section className={styles.section + ' ' + cls}>
            {children}
        </section>
    )
}

Section.propTypes = {
    cls: string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}