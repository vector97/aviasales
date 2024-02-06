import { selectFilters } from '../../store/filterSlice'
import { selectSorting } from '../../store/sortingSlice'
import { selectTicketState } from '../../store/ticketsSlice'
import getFilteredTickets from '../../utils/getFilteredTickets'
import Ticket from '../Ticket'

import { useMemo } from 'react'
import { useSelector } from 'react-redux'

function TicketsList({ className }) {
  const filters = useSelector(selectFilters)
  const sorting = useSelector(selectSorting)
  const { tickets, status, error, shownCount } = useSelector(selectTicketState)

  const shownTickets = useMemo(
    () => getFilteredTickets(tickets, sorting, filters).slice(0, shownCount),
    [tickets, sorting, filters, shownCount]
  )
  const noFilters = filters.every((filter) => !filter.checked)

  return (
    <div className={className}>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {noFilters && <h2>Рейсов, подходящих под заданные фильтры, не найдено</h2>}

      {shownTickets.map((ticket) => (
        <Ticket key={`${ticket.price}${ticket.carrier}${ticket.segments[0].date}`} ticket={ticket} />
      ))}
    </div>
  )
}

export default TicketsList
