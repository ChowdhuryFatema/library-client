import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>

            page not found
            <Link to="/" className="btn bg-gradient-to-r from-[#E855DE] text-white to-[#5400EE] font-bold text-lg">Go Home</Link>
        </div>
    );
};

export default ErrorPage;