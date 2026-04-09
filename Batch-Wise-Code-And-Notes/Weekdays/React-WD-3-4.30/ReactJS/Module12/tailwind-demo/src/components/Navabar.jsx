export default function Navbar() {
  return (
    <nav className="flex items-center justify-between mt-8 px-6 py-4 bg-gray-800 text-white ">
      <h1 className="text-xl font-bold italic md:text-2xl lg:text-amber-300 ">
        MyApp
      </h1>

      <div className="flex gap-6">
        <a href="#" className="hover:text-gray-400">
          Home
        </a>
        <a href="#" className="hover:text-gray-400">
          About
        </a>
        <a href="#" className="hover:text-gray-400">
          Contact
        </a>
      </div>
    </nav>
  );
}
