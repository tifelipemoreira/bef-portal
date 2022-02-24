import { Menu } from "../icons"
import { useState } from 'react';
export default function NavBar() {
    // Declarar uma nova variável de state, na qual chamaremos de "count"
    const [open, setOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const a = "flex px-4 py-2 font-medium rounded-md text-white hover:bg-blue-800  "
    const ul = "p-4"
    const dropdownLi = "flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black "
    const style = { a, ul, dropdownLi }
    const openMenu = true
    return (
        <nav className="bg-blue-700">
            {/* Container */}
            <div className="container flex flex-wrap mx-auto py-2 ">
                {/* Brand */}
                <a className="inline-flex  text-xl font-bold tracking-wider text-white p-2 pr-40    "
                    href="#"><h1>B&F<span className="text-black">Consultoria</span></h1>
                </a>
                {/* Brand */}
                {/* Toggler btn */}
                <button onClick={() => setOpen(!open)} className="lg:hidden inline-flex items-center justify-center ml-auto border h-10 w-10 rounded-md outline-none focus:outline-nome"
                >
                    {Menu}
                </button>
                {/* Toggler btn */}
                {/* Menu */}
                <div  className={open ? "w-full p-2 lg:inline-flex lg:w-auto mt-2 lg:mt-0" : "hidden lg:inline-flex lg:w-auto lg:mt-0"} >
                    <ul className="flex flex-col  lg:flex-row space-y-2 lg:space-y-0 lg:space-x-32">
                        <li >
                            <a className={`${style.a} bg-blue-900`} href="#">Dashbord</a>
                        </li>
                        <li onMouseEnter={() => setOpenDropdown(false)} >
                            <a className={style.a} href="#">Projects</a>
                        </li>
                        {/* Dropdown */}
                        <li className="relative">
                            <button onMouseEnter={() => setOpenDropdown(true)} className={`${style.a} outline-none focus:outline-none`}>Dropdown </button>
                            {/* Dropdown Menu */}
                            <div className={openDropdown ? "lg:absolute bg-white right-0 rouded-md p-2 top-12" : "hidden"}>
                                <ul onMouseEnter={() => setOpenDropdown(true)}  onMouseLeave={() => setOpenDropdown(false)}  className="space-y-2 lg:w-24">
                                    <li >
                                        <a className={`${style.dropdownLi}`} href="#">Categorias</a>
                                    </li>
                                    <li>
                                        <a className={`${style.dropdownLi}`} href="#">Inventories</a>
                                    </li>
                                    <li>
                                        <a className={`${style.dropdownLi}`} href="#">Categorias</a>
                                    </li>
                                </ul>
                            </div>
                            {/* Dropdown Menu */}
                        </li>
                        {/* Dropdown */}
                        <li onMouseEnter={() => setOpenDropdown(false)}  >
                            <a className={style.a} href="#">Orders</a>
                        </li  >
                        <li   >
                            <a className={style.a} href="#">Invoices</a>
                        </li>
                    </ul>
                </div>
                {/* Menu */}
            </div>

        </nav>
    )
}