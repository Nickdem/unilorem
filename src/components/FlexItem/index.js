import React, { Fragment } from "react"
import PropTypes, { string } from 'prop-types'

import styles from './style.module.scss'

export default function FlexItem({ item, type }) {
  if (type === 'main') {
    return (
      <Fragment>
        <div className={styles.descBlock}>
          <h3>{item.heading}</h3>
          <p>{item.description}</p>
        </div>
        <div className={styles.imgBlock}>
          <img src={item.img} alt={item.alt} />
        </div>
      </Fragment>
    )
  }

  if (type === 'list-item') {
    return (
      <div className={styles.listItem}>
        <div className={styles.itemImg}>
          <span className="material-symbols-outlined" style={{ fontSize: '30px' }}>
            {item.img}
          </span>
        </div>
        <div className={styles.itemDesc}>
          <h3>{item.heading}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    )
  }

  if (type === 'result') {
    return (
      <div className={styles.resultItem}>
        <span className="material-symbols-outlined" style={{ fontSize: '60px' }}>
          {item.img}
        </span>
        <h3>{item.heading}</h3>
        <p>{item.description}</p>
      </div>
    )
  }

  return null
}

FlexItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.string),
  type: string
}