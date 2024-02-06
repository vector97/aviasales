import getSortingTickets from './getSortingTickets'

const getFilteredTickets = (tickets, sorting, filters) => {
  const sortingTickets = getSortingTickets(tickets, sorting)

  const filterValues = filters.map((filter) => (filter.checked ? filter.show : null))

  const filteredTickets = sortingTickets.filter((ticket) => {
    for (const segment of ticket.segments) {
      if (!filterValues.includes(segment.stops.length)) {
        return false
      }
    }

    return true
  })

  return filteredTickets
}

export default getFilteredTickets
