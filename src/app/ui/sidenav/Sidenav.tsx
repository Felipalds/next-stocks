import Link from "next/link";

export default function Sidenav() {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4 border-b">
        <h1 className="text-lg font-bold text-black">My App</h1>
      </div>
      <ul className="mt-4">
        <li className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
          <Link href="/" className="text-black">
            Home
          </Link>
        </li>
        <li className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
          <Link href="/about" className="text-black">
            About
          </Link>
        </li>
        <li className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
          <Link href="/stocks" className="text-black">
            Stocks
          </Link>
        </li>
        <li className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
          <Link href="/sign-in" className="text-black">
            Sign in
          </Link>
        </li>
      </ul>
    </div>
  );
}
