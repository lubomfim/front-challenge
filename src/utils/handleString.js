export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const truncate = (string, number) => {
  if (string?.length > number) {
    return string.substring(0, number) + '...'
  }
  return string
}

export const truncateWithout = (string, number) => {
  if (string.length > number) {
    return string.substring(0, number)
  }
  return string
}
