'use client'

import { ReactNode, useEffect } from 'react'
import { CustomCursor } from '@/components/ui/CustomCursor'

interface CursorProviderProps {
  children: ReactNode
}

export function CursorProvider({ children }: CursorProviderProps) {
  useEffect(() => {
    document.documentElement.classList.add('has-custom-cursor')
    return () => document.documentElement.classList.remove('has-custom-cursor')
  }, [])

  return (
    <>
      <CustomCursor />
      {children}
    </>
  )
} 