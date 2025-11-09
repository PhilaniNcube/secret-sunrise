'use client'

import React, { useState } from 'react'
import Container from '../container'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: '#', label: 'More Joy' },
    { href: '#', label: 'Offerings' },
    { href: '#', label: 'Contact Us' },
  ]

  return (
    <header className='sticky top-0 left-0 right-0 shadow-md bg-white z-50'>
       <Container>
         <div className="flex items-center py-2 justify-between">
           <Link href="/">
             <Image
               src="/images/logo.png"
               alt="Logo"
               width={100}
               height={100}
               className='h-20 w-20 object-cover'
             />
           </Link>
           
           {/* Desktop Navigation */}
           <nav className="hidden md:block">
             <ul className="flex space-x-4 uppercase font-normal text-black tracking-wide">
               {navLinks.map((link) => (
                 <li key={link.label}>
                   <Link href={link.href} className="hover:text-gray-600 transition-colors">
                     {link.label}
                   </Link>
                 </li>
               ))}
             </ul>
           </nav>

           {/* Mobile Navigation */}
           <Sheet open={open} onOpenChange={setOpen}>
             <SheetTrigger asChild className="md:hidden">
               <Button variant="ghost" size="icon">
                 <Menu className="h-6 w-6" />
                 <span className="sr-only">Toggle menu</span>
               </Button>
             </SheetTrigger>
             <SheetContent side="right" className="w-[300px] px-5 py-6 sm:w-[400px]">
                <SheetTitle className='text-xl font-normal uppercase'>Menu</SheetTitle>
               <nav className="flex flex-col gap-4 mt-8 ">
                 {navLinks.map((link) => (
                   <Link
                     key={link.label}
                     href={link.href}
                     onClick={() => setOpen(false)}
                     className="text-lg uppercase font-normal text-black tracking-wide hover:text-gray-600 transition-colors py-2"
                   >
                     {link.label}
                   </Link>
                 ))}
               </nav>
             </SheetContent>
           </Sheet>
         </div>
       </Container>
    </header>
  )
}

export default Header