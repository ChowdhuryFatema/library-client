// import featureImg1 from '../../assets/images/feature1.jpg';
import featureImg2 from '../../assets/images/feature2.jpg';

const Feature = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 my-10 lg:my-20">
            <div className="dark:bg-gray-100 dark:text-gray-800">
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 lg:items-center gap-y-7 lg:gap-y-0">
                        <div className="col-auto lg:col-span-1" data-aos="zoom-in" data-aos-duration="700">
                            <img src={featureImg2} alt="" className='overflow-hidden w-full' />
                        </div>
                        <div className="col-auto lg:col-span-2">
                            <h3 className="text-4xl md:text-5xl font-bold tracking-tight dark:text-gray-900">A Journey Through Words</h3>
                            <p className="mt-3 text-lg dark:text-gray-600">Libraries offer quiet study spaces, fostering concentration and productivity, essential for students seeking academic success</p>
                            <div className="mt-5 lg:mt-12 space-y-5 lg:space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <p className="mt-2 dark:text-gray-600">Librarians serve as guides, helping students navigate complex information landscapes and develop critical research skills indispensable for lifelong learning.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <p className="mt-2 dark:text-gray-600">The librarys digital archives and online databases provide students with 24/7 access to scholarly materials, accommodating varied learning schedules and preferences.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <p className="mt-2 dark:text-gray-600">Interlibrary loan services expand the librarys reach, granting students access to resources beyond campus borders, enhancing the depth and breadth of their academic inquiries.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <p className="mt-2 dark:text-gray-600">Collaborative learning spaces promote teamwork and peer-to-peer learning, fostering a culture of knowledge sharing and collective growth.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;