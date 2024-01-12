import s from './Ticket.module.scss'

import logo from '../../assets/ticket-logo.png'

function Ticket() {
  return (
    <div className={s.ticket}>
      <header className={s.ticket__header}>
        <p className={s.ticket__price}>13 400 Р</p>
        <img className={s.ticket__logo} src={logo} alt="Логотип компании Airlines" />
      </header>
      <div className={s.ticket__body}>
        <div className={s.ticket__option}>
          <div>
            <div className={s.ticket__title}>MOW – HKT</div>
            <div className={s.ticket__value}>10:45 – 08:00</div>
          </div>
          <div>
            <div className={s.ticket__title}>В пути</div>
            <div className={s.ticket__value}>21ч 15м</div>
          </div>
          <div>
            <div className={s.ticket__title}>2 пересадки</div>
            <div className={s.ticket__value}>HKG, JNB</div>
          </div>
        </div>

        <div className={s.ticket__option}>
          <div>
            <div className={s.ticket__title}>MOW – HKT</div>
            <div className={s.ticket__value}>11:20 – 00:50</div>
          </div>
          <div>
            <div className={s.ticket__title}>В пути</div>
            <div className={s.ticket__value}>13ч 30м</div>
          </div>
          <div>
            <div className={s.ticket__title}>2 пересадки</div>
            <div className={s.ticket__value}>HKG</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
