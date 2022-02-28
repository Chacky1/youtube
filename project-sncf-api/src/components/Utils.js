const pad = (number) => {
  const numberStr = `${number}`
  if (numberStr.length === 1) {
    return `0${number}`
  }
  return numberStr
}

export const getUTCDate = () => {
  const date = new Date()
  const formattedDate = `${
    date.getUTCFullYear() + pad(date.getUTCMonth() + 1) + pad(date.getUTCDate())
  }T${pad(date.getUTCHours())}${pad(date.getUTCMinutes())}${pad(
    date.getUTCSeconds()
  )}`
  return formattedDate
}

export const parseUTCDate = (apiDate) => {
  const utcDate = apiDate.split('')
  utcDate.splice(4, 0, '-')
  utcDate.splice(7, 0, '-')
  utcDate.splice(13, 0, ':')
  utcDate.splice(16, 0, ':')
  return new Date(utcDate.join(''))
}

export const getFullMinutes = (date) => {
  if (date.getMinutes() < 10) {
    return `0${date.getMinutes()}`
  }
  return date.getMinutes()
}
