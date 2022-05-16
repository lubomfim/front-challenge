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
