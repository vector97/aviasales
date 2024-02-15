const apiBase = 'https://aviasales-test-api.kata.academy'

export const getSearchId = async (rejectWithValue) => {
  try {
    const response = await fetch(`${apiBase}/search`)

    if (!response.ok && response.status >= 500) {
      throw new Error('Не удалось отправить запрос, попробуйте позже или свяжитесь с администратором')
    }

    const data = await response.json()

    return data
  } catch (error) {
    return rejectWithValue(error.message)
  }
}

export const getTickets = async (searchId, rejectWithValue) => {
  let status

  try {
    const response = await fetch(`${apiBase}/tickets?searchId=${searchId}`)
    status = response.status

    if (!response.ok && response.status >= 500) {
      throw new Error('Часть билетов не загрузилась')
    }

    if (!response.ok && response.status < 500) {
      throw new Error('При загрузке билетов произошла ошибка')
    }

    const data = await response.json()

    return data
  } catch (error) {
    if (status >= 500) {
      console.error(error.message)
    } else {
      return rejectWithValue(error.message)
    }
  }
}
