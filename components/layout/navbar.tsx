import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Input } from '../ui/input'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'

export default function Navbar() {
  return (
    <header className='sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md'>
      <div className='mx-auto flex h-14 max-w-300 items-center gap-4 px-4'>
        <Link href={'/'}>Home</Link>
        <div className='relative mx-auto hidden max-w-xl flex-1 md:block'>
          <Search className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground'></Search>
          <Input
            readOnly
            placeholder='Search posts...'
            className='h-10 w-full rounded-full border-border bg-card'
            aria-label='Search posts'
          />
        </div>

        <div className='ml-auto flex items-center gap-2'>
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
