export const toTime = (seconds: number) => {
  let hours = new Date(seconds * 1000).getHours()
  let minutes = new Date(seconds * 1000).getMinutes()

  let processedHours = hours < 10 ? `0${hours}` : `${hours}`
  let processedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`

  return `${processedHours}:${processedMinutes}`
}

export const getSunriseOrSunset = (sunrise: number, sunset: number) => {
  let millisecondsNow = Date.now()

  return millisecondsNow < sunrise * 1000 ? `Рассвет в ${toTime(sunrise)}` : `Закат в ${toTime(sunset)}`
}