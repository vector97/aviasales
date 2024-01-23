import s from './Tabs.module.scss'

import { setSorting } from '../../store/actionCreators'

import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

function Tabs({ className }) {
  const dispatch = useDispatch()
  const sorting = useSelector((state) => state.sorting)

  const onTabChangeHandler = (e) => {
    dispatch(setSorting(e.target.value))
  }

  return (
    <div className={cn(className, s.tabs)}>
      <ul className={s.tabs__list}>
        <li className={s.tabs__item}>
          <label>
            <input
              className={s.tabs__control}
              type="radio"
              name="sort"
              value="cheapest"
              onChange={onTabChangeHandler}
              checked={sorting === 'cheapest'}
            />
            <span className={s.tabs__label}>Самый дешевый</span>
          </label>
        </li>
        <li className={s.tabs__item}>
          <label>
            <input
              className={s.tabs__control}
              type="radio"
              name="sort"
              value="fastest"
              onChange={onTabChangeHandler}
              checked={sorting === 'fastest'}
            />
            <span className={s.tabs__label}>Самый быстрый</span>
          </label>
        </li>
        <li className={s.tabs__item}>
          <label>
            <input
              className={s.tabs__control}
              type="radio"
              name="sort"
              value="optimal"
              onChange={onTabChangeHandler}
              checked={sorting === 'optimal'}
            />
            <span className={s.tabs__label}>Оптимальный</span>
          </label>
        </li>
      </ul>
    </div>
  )
}

export default Tabs
