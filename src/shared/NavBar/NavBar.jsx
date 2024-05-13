import { Link, NavLink } from "react-router-dom";
import logoImg from '../../assets/images/logo.png';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import userImg from '../../assets/images/user.png';


const NavBar = () => {

    const { user, logOutUser } = useContext(AuthContext);
    const [theme, setTheme] = useState('');

    const navLinks = <>
        <NavLink className="md:text-lg py-2 px-3 font-semibold" to="/">Home</NavLink>
        <NavLink className="md:text-lg py-2 px-3 font-semibold" to="/addBook">Add Book</NavLink>
        <NavLink className="md:text-lg py-2 px-3 font-semibold" to="/allBook">All Books</NavLink>
        <NavLink className="md:text-lg py-2 px-3 font-semibold" to="/borrowedBooks">Borrowed Books</NavLink>
        
            {
                !user &&

                    <NavLink className="md:text-lg py-2 px-3 font-semibold" to="/login">Login</NavLink>
                
            }
        
    </>

    const handleLogOut = () => {
        logOutUser()
    }

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        localStorage.setItem('theme', theme || currentTheme);

        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);

    }, [theme]);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <div className="shadow-xl">
            <div className="navbar max-w-7xl mx-auto md:px-5">
                <div className="navbar-start">
                    <div className="dropdown z-50 relative">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/" className="flex gap-1 items-center">
                        <img className="w-10 h-10 md:w-14 md:h-14" src={logoImg} alt="" />
                        <span className="text-4xl md:text-5xl font-bold font-rancho logo py-2">Library</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label onChange={handleToggle} className="swap swap-rotate me-2">

                        {/* this hidden checkbox controls the state */}
                        <input
                            type="checkbox"
                            className="theme-controller" />

                        {/* sun icon */}


                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                    <div className="space-x-3">
                        {user ?
                            <>

                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full border-2 border-red-500">
                                            <img alt="Tailwind CSS Navbar component" src={user?.photoURL || userImg} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="relative z-50 menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between py-2">
                                                {user?.displayName && user?.displayName}
                                            </a>
                                        </li>
                                        <li onClick={handleLogOut}><a className="py-2">Logout</a></li>
                                    </ul>
                                </div>
                            </>
                            :
                            <div className="hidden md:block">
                                <Link to="/signUp" className="btn bg-gradient-to-r from-[#E855DE] text-white to-[#5400EE] font-bold">
                                    Sign up
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;