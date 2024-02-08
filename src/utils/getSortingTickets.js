const getSortingTickets = (tickets, sorting) => {
  switch (sorting) {
    case 'cheapest':
      return tickets.slice().sort((a, b) => a.price - b.price)
    case 'fastest':
      return tickets.slice().sort((a, b) => a.segments[0].duration - b.segments[0].duration)
    default:
      return tickets.slice()
  }
}

export default getSortingTickets
