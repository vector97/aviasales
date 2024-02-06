import s from './App.module.scss'

import { fetchSearchID, fetchTickets, selectTicketState } from '../../store/ticketsSlice'
import Filters from '../Filters'
import Logo from '../Logo'
import ShowMoreBtn from '../ShowMoreBtn'
import Tabs from '../Tabs'
import TicketsList from '../TicketsList'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const { searchId, isLoaded, tickets, error } = useSelector(selectTicketState)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSearchID())
  }, [dispatch])

  useEffect(() => {
    if (searchId && !isLoaded) {
      dispatch(fetchTickets())
    }
  }, [dispatch, searchId, isLoaded, tickets, error])

  return (
    <div className={s.App}>
      <Logo />
      <div className={s.wrapper}>
        <Filters className={s.Filters} />
        <Tabs className={s.Tabs} />
        <TicketsList className={s.TicketsList} />
        <ShowMoreBtn className={s.ShowMoreBtn} />
      </div>
    </div>
  )
}

export default App
