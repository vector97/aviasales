import s from './ShowMoreBtn.module.scss'

import { showMore } from '../../store/ticketsSlice'

import { useDispatch } from 'react-redux'

function ShowMoreBtn({ className }) {
  const dispatch = useDispatch()

  const showMoreHandler = () => {
    dispatch(showMore())
  }

  return (
    <div className={className}>
      <button className={s['show-more']} type="button" onClick={showMoreHandler}>
        Показать еще 5 билетов!
      </button>
    </div>
  )
}

export default ShowMoreBtn
