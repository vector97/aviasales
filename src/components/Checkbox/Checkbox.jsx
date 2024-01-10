import s from './Checkbox.module.scss'

function Checkbox({ id, label, checked, setChecked }) {
  return (
    <div className={s.checkbox}>
      <label className={s.checkbox__wrapper}>
        <input className={s.checkbox__control} type="checkbox" checked={checked} onChange={() => setChecked(id)} />
        <span className={s.checkbox__label}>{label}</span>
      </label>
    </div>
  )
}

export default Checkbox
