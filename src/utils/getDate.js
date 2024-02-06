import { addMinutes, getHours, getMinutes } from 'date-fns'

export const getFinishDate = (date, minutes) => {
  const hours = getHours(new Date(addMinutes(new Date(date), minutes)))
  const min = getMinutes(new Date(addMinutes(new Date(date), minutes)))

  return `${hours}:${min}`
}

export const getStartDate = (date) => {
  const hours = getHours(new Date(date))
  const min = getMinutes(new Date(date))

  return `${hours}:${min}`
}
