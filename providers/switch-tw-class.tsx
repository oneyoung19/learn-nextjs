'use client'

import { createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import {
  initSwitchTwClassStore,
	createSwitchTwClassStore
} from '@/stores/switch-tw-class'

export const SwitchTwClassStoreContext = createContext(
  undefined,
)

export const SwitchTwClassProvider = ({
  children,
}) => {
  const storeRef = useRef(null)
  if (storeRef.current === null) {
    storeRef.current = createSwitchTwClassStore(initSwitchTwClassStore())
  }

  return (
    <SwitchTwClassStoreContext.Provider value={storeRef.current}>
      {children}
    </SwitchTwClassStoreContext.Provider>
  )
}

export const useSwitchTwClassStore = <T,>(
  selector: (store) => T,
): T => {
  const switchTwClassContext = useContext(SwitchTwClassStoreContext)

  if (!switchTwClassContext) {
    throw new Error('useSwitchTwClassStore must be used within SwitchTwClassStoreContext')
  }

  return useStore(switchTwClassContext, selector)
}
