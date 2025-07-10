
import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'

const Header = () => {
  return (
    <div className='py-3 border-b'>
        <Container className='flex items-center justify-between'>
                <h2 className='text-lg font-bold uppercase text-primary'>Theming App</h2>
                <div className='flex items-center gap-5'>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>Contact</Link>
                    <Link href={"/"}>Services</Link>
                    <ModeToggle />
                </div>
        </Container>
    </div>
  )
}

export default Header
