'use client';
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-[#2C3E50] px-4 py-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo with Link */}
        <Link href="/" className="h-20 w-auto">
          <Image
            src="/images/idtlogo.jpg" 
            alt="Dedupe.io Logo"
            width={150}
            height={60}
            className="h-full w-auto"
          />
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden space-x-8 md:flex">
          <Link href="#" className="hover:text-gray-300">
            Consulting
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Tutorials
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Developers
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Button (Desktop) */}
        {/* <Button
          variant="outline"
          className="hidden text-black border-4 border-white hover:bg-white hover:text-[#2C3E50] font-bold md:inline-flex"
          asChild
        >
          <Link href="http://localhost:3000" aria-label="Find Here">
            FIND HERE
          </Link>
        </Button> */}
      </div>

      {/* Mobile Navigation (Hidden by Default) */}
      <nav className="md:hidden bg-[#2C3E50] p-4">
        <Link href="#" className="block py-2 hover:text-gray-300">
          Consulting
        </Link>
        <Link href="#" className="block py-2 hover:text-gray-300">
          Tutorials
        </Link>
        <Link href="#" className="block py-2 hover:text-gray-300">
          Developers
        </Link>
        <Link href="/about" className="block py-2 hover:text-gray-300">
          About
        </Link>
        {/* <Button
          variant="outline"
          className="mt-4 w-full text-black border-4 border-white hover:bg-white hover:text-[#2C3E50] font-bold"
          asChild
        >
          <Link href="/login" aria-label="Find Here">
            FIND HERE
          </Link>
        </Button> */}
      </nav>
    </header>
  )
} 