// app/(csr-ssr)/layout.tsx
import Link from 'next/link';

export default function CSRSSRLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">Logo</span>
              </Link>
              <div className="hidden md:flex items-center space-x-1">
                <Link href="/csr" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">
                  CSR
                </Link>
                <Link href="/ssr" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">
                  SSR
                </Link>
                <Link href="/submit-form" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">
                  FORM
                </Link>
                <Link href="/order" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">
                  Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-lg mt-8">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <p className="text-center text-gray-500">
            &copy; 2023 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}