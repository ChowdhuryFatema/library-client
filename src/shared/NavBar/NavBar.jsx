import { Link, NavLink } from "react-router-dom";
import logoImg from '../../assets/images/logo.png';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import userImg from '../../assets/images/user.png';


const NavBar = () => {

    const { user, logOutUser } = useContext(AuthContext);
    const [theme, setTheme] = useState( localStorage.getItem('theme') || 'light');

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


                    <label onChange={handleToggle} className="cursor-pointer grid place-items-center">
                        <input 
                        type="checkbox"

                        
                        checked={theme == 'dark' ?  true : false }
                         value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />

                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
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