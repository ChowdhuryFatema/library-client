import { Link, NavLink } from "react-router-dom";
import logoImg from '../../assets/images/logo.png';
import footer1 from '../../assets/images/footer1.jpg';
import footer2 from '../../assets/images/footer2.jpg';
import footer3 from '../../assets/images/footer3.jpg';
import footer4 from '../../assets/images/footer4.jpg';
import footer5 from '../../assets/images/footer5.jpg';
import footer6 from '../../assets/images/footer6.jpg';


const Footer = () => {
    return (
        <div className="footer-bg">
            <div className="footer p-10 text-base-content">
                <aside>
                    <Link to="/" className="flex gap-1 items-center">
                        <img className="w-10 h-10 md:w-14 md:h-14" src={logoImg} alt="" />
                        <span className="text-4xl md:text-5xl font-bold font-rancho logo py-2">Library</span>
                    </Link>
                    <p className="text-white">
                        In the pages of a book, a world awaits, <br />
                        a library of dreams, knowledge, <br />
                        and infinite gates</p>
                </aside>
                <nav className="text-white">
                    <h6 className="footer-title">Services</h6>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/addBook">Add Book</NavLink>
                    <NavLink to="/allBook">All Books</NavLink>
                    <NavLink to="/borrowedBook">Borrowed Books</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </nav>
                <nav>
                    <h6 className="footer-title text-white">FOLLOW INSTAGRAM</h6>
                    <div className="grid grid-cols-3 gap-2">
                        <img src={footer1} alt="" />
                        <img src={footer2} alt="" />
                        <img src={footer4} alt="" />
                        <img src={footer3} alt="" />
                        <img src={footer5} alt="" />
                        <img src={footer6} alt="" />
                    </div>
                </nav>

                <form>
                    <h6 className="footer-title text-white">Newsletter</h6>
                    <fieldset className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="join">


                            <input type="text" placeholder="Email" className="px-3 w-full rounded-l-md" />


                            <button className="btn bg-gradient-to-r from-[#E855DE] text-white to-[#5400EE] font-bold border-none join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Footer;