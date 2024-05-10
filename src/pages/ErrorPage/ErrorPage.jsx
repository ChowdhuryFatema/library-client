import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className='relative w-full min-h-screen'>

            <dotlottie-player src="https://lottie.host/8c2184bc-26c1-41df-b553-d2aa3c971577/IW5JCMJrhd.json" background="transparent" speed="1" direction="1" playMode="normal" loop autoplay></dotlottie-player>

            <div className="absolute top-2/4 left-2/4 -translate-x-[50%] -translate-y-[50%]">
                <Link to="/" className="btn bg-gradient-to-r from-[#E855DE] text-white to-[#5400EE] font-bold text-lg border-none">
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;