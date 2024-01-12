import s from './Tabs.module.scss'

import cn from 'classnames'

function Tabs({ className }) {
  return (
    <div className={cn(className, s.tabs)}>
      <ul className={s.tabs__list}>
        <li className={s.tabs__item}>
          <label>
            <input className={s.tabs__control} type="radio" name="sort" />
            <span className={s.tabs__label}>Самый дешевый</span>
          </label>
        </li>
        <li className={s.tabs__item}>
          <label>
            <input className={s.tabs__control} type="radio" name="sort" />
            <span className={s.tabs__label}>Самый быстрый</span>
          </label>
        </li>
        <li className={s.tabs__item}>
          <label>
            <input className={s.tabs__control} type="radio" name="sort" />
            <span className={s.tabs__label}>Оптимальный</span>
          </label>
        </li>
      </ul>
    </div>
  )
}

export default Tabs
