import bannerImg from '../../assets/images/banner2.png';
import { FaArrowRight } from "react-icons/fa6";


const Banner = () => {
    return (
        <div className='mb-8 md:mb-12 lg:mb-20'>
            <div className="banner min-h-[50vh] md:min-h-[75vh] max-w-full">
                <div className="relative min-h-[50vh] md:min-h-[75vh]">
                    <div className="space-y-3 absolute top-2/4 left-2/4 -translate-x-[50%] -translate-y-[20%] text-center min-h-screen w-full px-5 z-30">
                        <h2 className="text-5xl md:text-7xl text-white">College Library</h2>
                        <p className="text-white opacity-75 w-full md:w-1/2 mx-auto">A dynamic repository of knowledge, sparking curiosity and fostering creativity through its eclectic collection.</p>


                        <div className='flex flex-col justify-center items-center pt-7 md:pt-10'>
                            <a className='btn-all extra-btn capitalize font-semibold cursor-pointer text-white flex items-center gap-1'>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Explorer
                                <FaArrowRight className='text-white' />
                            </a>

                        </div>

                    </div>
                    <div className='absolute bottom-0 left-2/4 z-10 -translate-x-[50%] w-full translate-y-[25%] max-w-7xl'>
                        <img className='w-full' src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;