'use client'

import { createAuthClient } from '@neondatabase/auth/next'
import { NeonAuthUIProvider } from '@neondatabase/auth/react'

export function NeonAuthProviders({ children }: { children: React.ReactNode }) {
  const authClient = createAuthClient()
  return (
    <NeonAuthUIProvider authClient={authClient} defaultTheme='dark'>
      {children}
    </NeonAuthUIProvider>
  )
}
