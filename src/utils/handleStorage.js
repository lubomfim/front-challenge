export const loadFromLocalstorage = (item) => {
  try {
    const serializedState = localStorage.getItem(item)

    if (serializedState === null) {
      return []
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return []
  }
}

export const saveToLocalStorage = (item, state) => {
  try {
    const serializedState = JSON.stringify(state)

    localStorage.setItem(item, serializedState)
    return item
  } catch (err) {
    return []
  }
}

export const saveToLocalStorageSpread = (item, state) => {
  try {
    const oldState = loadFromLocalstorage(item)
    const serializedState = JSON.stringify([...oldState, state])

    localStorage.setItem(item, serializedState)
    return item
  } catch (err) {
    return []
  }
}

export const getLocalStorageSize = () => {
  let _lsTotal = 0,
    _xLen,
    _x

  for (_x in localStorage) {
    if (!localStorage?.hasOwnProperty(_x)) {
      continue
    }
    _xLen = (localStorage[_x]?.length + _x?.length) * 2
    _lsTotal += _xLen
  }

  return Number((_lsTotal / 1024)?.toFixed(2))
}

export const typeSizes = {
  undefined: () => 0,
  boolean: () => 4,
  number: () => 8,
  string: (item) => 2 * item.length,
  object: (item) =>
    !item ? 0 : Object.keys(item).reduce((total, key) => sizeOf(key) + sizeOf(item[key]) + total, 0)
}

function formatBytes(bytes, decimals = 3) {
  if (bytes === 0) return 0

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm))
}

export const sizeOf = (value) => formatBytes(typeSizes[typeof value](value))
