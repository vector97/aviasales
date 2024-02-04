import s from './Tabs.module.scss'

import { selectSorting, setSorting } from '../../store/sortingSlice'

import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

function Tabs({ className }) {
  const dispatch = useDispatch()
  const sorting = useSelector(selectSorting)

  return (
    <div className={cn(className, s.tabs)}>
      <ul className={s.tabs__list}>
        <li className={s.tabs__item}>
          <label>
            <input
              className={s.tabs__control}
              type="radio"
              name="sorting"
              value="cheapest"
              onChange={(e) => dispatch(setSorting({ sorting: e.target.value }))}
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
              name="sorting"
              value="fastest"
              onChange={(e) => dispatch(setSorting({ sorting: e.target.value }))}
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
              name="sorting"
              value="optimal"
              onChange={(e) => dispatch(setSorting({ sorting: e.target.value }))}
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
