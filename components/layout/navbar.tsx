import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Input } from '../ui/input'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'

export default function Navbar() {
  return (
    <header>
      <div>
        <Link href={'/'}>Home</Link>
        <div>
          <Search className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground'></Search>
          <Input
            readOnly
            placeholder='Search posts...'
            className='h-10 w-full rounded-full border-border bg-card'
            aria-label='Search posts'
          />
        </div>

        <div>
          <Link
            href={'/auth/sign-in'}
            className={cn(buttonVariants({ variant: 'ghost', size: 'default' }))}
          >
            Log in
          </Link>
          <Link href={'/auth/sign-up'} className={cn(buttonVariants({ variant: 'default' }))}>
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  )
}
