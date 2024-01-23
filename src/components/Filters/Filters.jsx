import s from './Filters.module.scss'

import { setVisibilityFilters } from '../../store/actionCreators'
import Checkbox from '../Checkbox'

import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

function Filters({ className }) {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filters)

  const onCheckedHandler = (filter) => {
    dispatch(setVisibilityFilters(filter))
  }

  return (
    <div className={cn(className, s.filters)}>
      <p className={s.filters__title}>Количество пересадок</p>

      {filters.map(({ filter, label, checked }) => (
        <Checkbox key={filter} filter={filter} label={label} checked={checked} setChecked={onCheckedHandler} />
      ))}
    </div>
  )
}

export default Filters
