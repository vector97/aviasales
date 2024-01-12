import s from './TicketsList.module.scss'

import Ticket from '../Ticket'

console.log('s', s)

function TicketsList({ className }) {
  return (
    <div className={className}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  )
}

export default TicketsList
