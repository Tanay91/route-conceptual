import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div >
      <section className='flex justify-between shadow-md py-7 px-16 items-center'>
        <h1 className='text-5xl font-extrabold'>Amazon</h1>
       <nav>

        <ul className='flex gap-5'>
        <NavLink
        to="/"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "bg-green-400 p-2 px-5 rounded-xl text-white" : ""
     }
>
         Home
       </NavLink>
       <NavLink
        to="/products"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "bg-green-400 p-2 px-5 rounded-xl text-white" : ""
     }
>
         Products
       </NavLink>
       <NavLink
        to="/dashboard"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "bg-green-400 p-2 px-5 rounded-xl text-white" : ""
     }
>
         Dashboard
       </NavLink>
        </ul>
       </nav>
       
      </section>
     <div className='min-h-screen'>
     <Outlet></Outlet>
     </div>
      <footer>
          
<footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

      </footer>

    </div>
    
  )
}

export default MainLayout
