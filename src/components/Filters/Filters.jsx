import s from './Filters.module.scss'

import Checkbox from '../Checkbox'

import cn from 'classnames'
import { useState } from 'react'

function Filters({ className }) {
  const [options, setOptions] = useState([
    { id: 0, label: 'Все', checked: false },
    { id: 1, label: 'Без пересадок', checked: true },
    { id: 2, label: '1 пересадка', checked: false },
    { id: 3, label: '2 пересадки', checked: true },
    { id: 4, label: '3 пересадки', checked: false },
  ])

  const onCheckedHandler = (id) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id
          ? {
              ...option,
              checked: !option.checked,
            }
          : option
      )
    )
  }

  return (
    <div className={cn(className, s.filters)}>
      <p className={s.filters__title}>Количество пересадок</p>

      {options.map(({ id, label, checked }) => (
        <Checkbox key={id} id={id} label={label} setChecked={onCheckedHandler} checked={checked} />
      ))}
    </div>
  )
}

export default Filters
