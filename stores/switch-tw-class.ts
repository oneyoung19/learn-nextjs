import { createStore } from 'zustand/vanilla'

export const initSwitchTwClassStore = () => {
  return { switchedTwClass: '' }
}

export const defaultInitState = {
  switchedTwClass: ''
}

export const createSwitchTwClassStore = (
  initState = defaultInitState,
) => {
  return createStore()((set) => ({
    ...initState,
    switchTwClass: (payload) => set(() => ({ switchedTwClass: payload.switchedTwClass }))
  }))
}
