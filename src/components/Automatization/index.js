import React, { Fragment } from "react";
import FlexItem from "../FlexItem";

import FlexWrapper from "../FlexWrapper";
import InfoSection from "../InfoSection";
import Section from "../Section";
import Wrapper from "../Wrapper";

import styles from './style.module.scss'

function Automatization() {
  const dataUL = [
    { heading: 'Сбор лидов', description: 'Умные всплывающие и встраиваемые pop-up и отдельные лендинги для сбора Email', img: 'settings_accessibility' },
    { heading: 'Сбор лидов', description: 'Умные всплывающие и встраиваемые pop-up и отдельные лендинги для сбора Email', img: 'settings_accessibility' },
    { heading: 'Сбор лидов', description: 'Умные всплывающие и встраиваемые pop-up и отдельные лендинги для сбора Email', img: 'settings_accessibility' },
    { heading: 'Сбор лидов', description: 'Умные всплывающие и встраиваемые pop-up и отдельные лендинги для сбора Email', img: 'settings_accessibility' },
    { heading: 'Сбор лидов', description: 'Умные всплывающие и встраиваемые pop-up и отдельные лендинги для сбора Email', img: 'settings_accessibility' },
    { heading: 'Сбор лидов', description: 'Умные всплывающие и встраиваемые pop-up и отдельные лендинги для сбора Email', img: 'settings_accessibility' }
  ]

  const dataUL2 = [
    { heading: 'Готовый источник лидов', description: 'Аналитика, создание посетителей и pop-up окна или встраиваемые формы подписки, взаимодействие с Facebook и другими рекламными каналами.', img: 'done_outline' },
    { heading: 'Готовый источник лидов', description: 'Аналитика, создание посетителей и pop-up окна или встраиваемые формы подписки, взаимодействие с Facebook и другими рекламными каналами.', img: 'done_outline' },
    { heading: 'Готовый источник лидов', description: 'Аналитика, создание посетителей и pop-up окна или встраиваемые формы подписки, взаимодействие с Facebook и другими рекламными каналами.', img: 'done_outline' },
  ]
  return (
    <Fragment>
      <InfoSection
        txt=" Автоматически и индивидуально общаемся с клиентом в нужное время.Это и называют автоворонками, сценарием продаж, автоматизацией."
        background='blue'
      />
      <Section cls={styles.padding}>
        <Wrapper>
          <FlexWrapper>
            <FlexItem type='main' item={{ heading: 'Готовые автоворонки продаж вашего бизнеса', description: 'Инструменты привлечения, конвертации и удержания клиентов уже готовы и находятся в едином рабочем механизме - UniBase.', img: 'https://picsum.photos/id/237/400/400', alt: 'dog' }} />
          </FlexWrapper>
          <div className={styles.btnWrapper}><button className={styles.btn}>Оставить заявку</button></div>
        </Wrapper>
      </Section>
      <section className={styles.can + ' ' + styles.padding}>
        <Wrapper>
          <h2 className={styles.canHeading}>
            Что мы умеем:
          </h2>
          <FlexWrapper>
            {dataUL.map((item, idx) => <FlexItem key={idx} type='list-item' item={item} />)}
          </FlexWrapper>
        </Wrapper>
      </section>
      <section className={styles.result + ' ' + styles.padding}>
        <Wrapper>
          <h2 className={styles.canHeading}>
            В результате вы получите:
          </h2>
          <FlexWrapper>
              {dataUL2.map((item,idx) => <FlexItem key={idx} type='result' item={item} />)}
          </FlexWrapper>
        </Wrapper>
      </section>
    </Fragment>
  )
}

export default Automatization