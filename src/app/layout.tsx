import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full p-6 flex justify-between items-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="IAS Logo" className="h-10" />
          <h1 className="text-white text-2xl font-bold">Insightful AI Strategies</h1>
        </div>
        <nav className="space-x-4">
          <Link href="/"><a className="text-white hover:text-gray-200 transition duration-300">Home</a></Link>
          <Link href="/about"><a className="text-white hover:text-gray-200 transition duration-300">About Us</a></Link>
          <Link href="/faq"><a className="text-white hover:text-gray-200 transition duration-300">FAQ</a></Link>
          <Link href="/products"><a className="text-white hover:text-gray-200 transition duration-300">Products</a></Link>
          <Link href="/contact"><a className="text-white hover:text-gray-200 transition duration-300">Contact</a></Link>
        </nav>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="w-full p-6 bg-gray-800 text-white text-center">
        © 2024 Insightful AI Strategies. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;

