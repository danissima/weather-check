import { HistoryCityType } from "../../components/HistoryCities/includes/HistoryCity/HistoryCity"

export const toTime = (milliseconds: number) => {
  let hours = new Date(milliseconds).getHours()
  let minutes = new Date(milliseconds).getMinutes()

  let processedHours = hours < 10 ? `0${hours}` : `${hours}`
  let processedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`

  return `${processedHours}:${processedMinutes}`
}

export const getSunriseOrSunset = (sunrise: number, sunset: number, timezome: number = 0) => {
  let millisecondsNow = Date.now()
  let clientTimezone = new Date().getTimezoneOffset() * 60

  return millisecondsNow < sunrise * 1000 
  ? `Рассвет в ${toTime((sunrise + timezome + clientTimezone) * 1000)}`
  : `Закат ${millisecondsNow > sunset * 1000 ? 'был' : ''} в ${toTime((sunset + timezome + clientTimezone) * 1000)}`
}

export const capitalizeFirstLetter = (str: string) => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}

export const addHistoryCity = (city: HistoryCityType) => {
  const stringinfiedHistory = localStorage.getItem('searchingHistory')
  if (!stringinfiedHistory) {
    localStorage.setItem('searchingHistory', JSON.stringify([city]))
    return
  }

  let searchingHistory: HistoryCityType[] = JSON.parse(stringinfiedHistory)

  if (searchingHistory.every(result => { return result.name !== city.name })) {
    searchingHistory.unshift(city)
    if (searchingHistory.length > 9) {
      searchingHistory.pop()
    }
  } else {
    searchingHistory = searchingHistory.filter(result => result.name !== city.name)
    searchingHistory.unshift(city)
  }

  localStorage.setItem('searchingHistory', JSON.stringify(searchingHistory))

  return
}