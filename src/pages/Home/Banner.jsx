import bannerImg from '../../assets/images/banner2.png';


const Banner = () => {
    return (
        <div className=''>
            <div className="banner min-h-[80vh] md:min-h-screen max-w-full">
                <div className="relative min-h-[80vh] md:min-h-screen">
                    <div className="space-y-3 absolute top-2/4 left-2/4 -translate-x-[50%] -translate-y-[30%] text-center min-h-screen w-full px-5 z-30">
                        <h2 className="text-5xl md:text-7xl text-white">College Library</h2>
                        <p className="text-white opacity-75 w-full md:w-1/2 mx-auto">A dynamic repository of knowledge, sparking curiosity and fostering creativity through its eclectic collection.</p>
                        <button className="btn bg-gradient-to-r from-[#E855DE] text-white to-[#5400EE] font-bold md:text-lg border-none">Go Home</button>
                    </div>
                    <div className='absolute bottom-0 left-0 z-10'>
                        <img src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;