const getFilteredTickets = (tickets, filters) => {
  const filterValues = filters.map((filter) => (filter.checked ? filter.show : null))

  const filteredTickets = tickets.filter((ticket) => {
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
