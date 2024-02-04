import { selectFilters } from '../../store/filterSlice'
import { selectSorting } from '../../store/sortingSlice'
import { selectTicketState } from '../../store/ticketsSlice'
import Ticket from '../Ticket'

import { useSelector } from 'react-redux'

function TicketsList({ className }) {
  const filters = useSelector(selectFilters)
  const sorting = useSelector(selectSorting)
  const { tickets, status, error, shownCount } = useSelector(selectTicketState)

  const getSortingTickets = (_tickets, _sorting) => {
    const sortingTickets = [..._tickets]

    switch (_sorting) {
      case 'cheapest':
        return sortingTickets.sort((a, b) => a.price - b.price)
      case 'fastest':
        return sortingTickets.sort((a, b) => a.segments[0].duration - b.segments[0].duration)
      default:
        return sortingTickets
    }
  }

  const getFilteredTickets = (_tickets, _sorting, _filters) => {
    const sortingTickets = getSortingTickets(_tickets, _sorting)

    const filterValues = _filters.map((filter) => (filter.checked ? filter.show : null))

    const filteredTickets = sortingTickets.filter((ticket) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const segment of ticket.segments) {
        if (!filterValues.includes(segment.stops.length)) {
          return false
        }
      }

      return true
    })

    return filteredTickets
  }

  const shownTickets = getFilteredTickets(tickets, sorting, filters).slice(0, shownCount)
  const noFilters = filters.every((filter) => !filter.checked)

  return (
    <div className={className}>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {noFilters && <h2>Нет подходящих билетов</h2>}

      {shownTickets.map((ticket) => (
        <Ticket key={`${ticket.price * Math.random()}${ticket.carrier}`} ticket={ticket} />
      ))}
    </div>
  )
}

export default TicketsList
