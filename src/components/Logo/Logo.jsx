import s from './Logo.module.scss'

import logo from '../../assets/logo.svg'

function Logo() {
  return (
    <div className={s.Logo}>
      <img className={s.logo} src={logo} alt="Логотип: aviasales" />
    </div>
  )
}

export default Logo
