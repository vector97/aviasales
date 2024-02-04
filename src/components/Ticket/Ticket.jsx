/* eslint-disable no-nested-ternary */
import s from './Ticket.module.scss'

import { addMinutes, getHours, getMinutes } from 'date-fns'

function Ticket({ ticket }) {
  const arr = ['пересадка', 'пересадки', 'пересадок']

  function declOfNum(n, titles) {
    return `${n} ${
      titles[n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2]
    }`
  }

  const getFinishDate = (date, minutes) => {
    const hours = getHours(new Date(addMinutes(new Date(date), minutes)))
    const min = getMinutes(new Date(addMinutes(new Date(date), minutes)))

    return `${hours}:${min}`
  }

  const getStartDate = (date) => {
    const hours = getHours(new Date(date))
    const min = getMinutes(new Date(date))

    return `${hours}:${min}`
  }

  const getDuration = (time) => {
    const hours = Math.floor(time / 60)
    const min = time % 60

    return `${hours}ч ${min}м`
  }

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
        <div key={ticket.price * Math.random()} className={s.ticket__body}>
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
              <div className={s.ticket__value}>
                {segment.stops.map((stop) => (
                  <span key={ticket.price * Math.random()}>{stop} </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Ticket
