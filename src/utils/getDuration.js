const getDuration = (time) => {
  const hours = Math.floor(time / 60)
  const min = time % 60

  return `${hours}ч ${min}м`
}

export default getDuration
