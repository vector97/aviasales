import s from './Ticket.module.scss'

import declOfNum from '../../utils/declOfNum'
import { getFinishDate, getStartDate } from '../../utils/getDate'
import getDuration from '../../utils/getDuration'

function Ticket({ ticket }) {
  const arr = ['пересадка', 'пересадки', 'пересадок']

  return (
    <div className={s.ticket}>
      <header className={s.ticket__header}>
        <p className={s.ticket__price}>{ticket.price.toLocaleString()} Р</p>
        <img
          className={s.ticket__logo}
          src={`https://pics.avs.io/99/36/${ticket.carrier}.png`}
          alt="Логотип авиакомпании"
          width={99}
          height={36}
        />
      </header>
      {ticket.segments.map((segment) => (
        <div key={`${ticket.price}${segment.date}`} className={s.ticket__body}>
          <div className={s.ticket__option}>
            <div>
              <div className={s.ticket__title}>
                {segment.origin} – {segment.destination}
              </div>
              <div className={s.ticket__value}>
                {getStartDate(segment.date)} – {getFinishDate(segment.date, segment.duration)}
              </div>
            </div>
            <div>
              <div className={s.ticket__title}>В пути</div>
              <div className={s.ticket__value}>{getDuration(segment.duration)}</div>
            </div>
            <div>
              <div className={s.ticket__title}>{declOfNum(segment.stops.length, arr)}</div>
              <div className={s.ticket__value}>{segment.stops.join(' ')}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Ticket
