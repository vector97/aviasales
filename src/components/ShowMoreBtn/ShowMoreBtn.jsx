import s from './ShowMoreBtn.module.scss'

function ShowMoreBtn({ className }) {
  return (
    <div className={className}>
      <button className={s['show-more']} type="button">
        Показать еще 5 билетов!
      </button>
    </div>
  )
}

export default ShowMoreBtn
