import s from './App.module.scss'

import Filters from '../Filters'
import Logo from '../Logo'
import ShowMoreBtn from '../ShowMoreBtn'
import Tabs from '../Tabs'
import TicketsList from '../TicketsList'

function App() {
  return (
    <div className={s.App}>
      <Logo />
      <Filters />
      <Tabs />
      <TicketsList />
      <ShowMoreBtn />
    </div>
  )
}

export default App
