const getSortingTickets = (tickets, sorting) => {
  const sortingTickets = [...tickets]

  switch (sorting) {
    case 'cheapest':
      return sortingTickets.sort((a, b) => a.price - b.price)
    case 'fastest':
      return sortingTickets.sort((a, b) => a.segments[0].duration - b.segments[0].duration)
    default:
      return sortingTickets
  }
}

export default getSortingTickets
