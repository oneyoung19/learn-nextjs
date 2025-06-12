'use client'

import { createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import {
	createSwitchTwClassStore
} from '@/stores/switch-tw-class'

const SwitchTwClassStoreContext = createContext(
  undefined,
)

export const SwitchTwClassProvider = ({
  children,
}) => {
  const storeRef = useRef(null)
  if (storeRef.current === null) {
    storeRef.current = createSwitchTwClassStore()
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
