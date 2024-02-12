import { selectFilters } from '../../store/filterSlice'
import { selectSorting } from '../../store/sortingSlice'
import { selectTicketState } from '../../store/ticketsSlice'
import getFilteredTickets from '../../utils/getFilteredTickets'
import getSortedTickets from '../../utils/getSortedTickets'
import Ticket from '../Ticket'

import { useMemo } from 'react'
import { useSelector } from 'react-redux'

function TicketsList({ className }) {
  const filters = useSelector(selectFilters)
  const sorting = useSelector(selectSorting)
  const { tickets, status, error, shownCount } = useSelector(selectTicketState)

  const sortedTickets = useMemo(() => getSortedTickets(tickets, sorting), [tickets, sorting])
  const filteredTickets = useMemo(() => getFilteredTickets(sortedTickets, filters), [sortedTickets, filters])
  const shownTickets = useMemo(() => filteredTickets.slice(0, shownCount), [filteredTickets, shownCount])
  const noFiltersApplied = useMemo(() => filters.every((filter) => !filter.checked), [filters])

  return (
    <div className={className}>
      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'rejected' && error && <h2>{error}</h2>}
      {noFiltersApplied && <h2>Рейсов, подходящих под заданные фильтры, не найдено</h2>}

      {shownTickets.map((ticket) => (
        <Ticket key={`${ticket.price}${ticket.carrier}${ticket.segments[0].date}`} ticket={ticket} />
      ))}
    </div>
  )
}

export default TicketsList
