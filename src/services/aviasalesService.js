const apiBase = 'https://aviasales-test-api.kata.academy'

export const getSearchId = async (rejectWithValue) => {
  try {
    const response = await fetch(`${apiBase}/search`)

    if (!response.ok) {
      throw new Error('Не удалось отправить запрос, попробуйте позже или свяжитесь с администратором')
    }

    const data = await response.json()

    return data
  } catch (error) {
    return rejectWithValue(error.message)
  }
}

export const getTickets = async (searchId) => {
  try {
    const response = await fetch(`${apiBase}/tickets?searchId=${searchId}`)

    if (!response.ok) {
      throw new Error('Не удалось получить часть билетов')
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error(error.message)
  }
}
