import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-gray-300 transition"
        >
          Ezpulse Store
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          {/* <Link href="#" className="hover:text-gray-300 transition">Products</Link> */}
          <Link href="/about" className="hover:text-gray-300 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {/* <button className="hover:text-gray-300 transition">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button> */}
          {/* <button className="hover:text-gray-300 transition">
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
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button> */}
        </div>
      </div>
    </header>
  );
}
