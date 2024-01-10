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
