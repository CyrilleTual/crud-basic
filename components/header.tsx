import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className="flex justify-center items-center space-x-4 m-6">
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        href="/"
      >
        home
      </Link>
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        href="/users"
      >
        page Get
      </Link>
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        href="/users/post"
      >
        page post
      </Link>
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        href="/users/delete"
      >
        delete
      </Link>
    </div>
  );
}

export default Header