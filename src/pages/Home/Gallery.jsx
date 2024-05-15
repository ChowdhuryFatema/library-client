

const Gallery = () => {
    return (
        <div className="max-w-7xl mx-auto px-5">
            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    <img src="https://cms.studyinsweden.se/app/uploads/2016/04/cecilia_larsson_lantz-stockholm_university_library-2614-902x602.jpg" alt="" className="scale-95 hover:scale-100 duration-500 overflow-hidden w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square object-cover" />

                    <img alt="" className="scale-95 hover:scale-100 duration-500 overflow-hidden w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsZ4pjBtMEQ1kdrQgPaPUY01nvR_MxOii72SOp3F0JYA&s" />
                    <img alt="" className="scale-95 hover:scale-100 duration-500 overflow-hidden w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square object-cover" src="https://media.istockphoto.com/id/174933395/photo/middle-school-age-girl-reading-book-in-library.jpg?s=612x612&w=0&k=20&c=T2SxN-SnHAvncjiOH17sqMP2d-MeE8L_vsFwGwyA91o=" />
                    <img alt="" className="scale-95 hover:scale-100 duration-500 overflow-hidden w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square object-cover" src="https://media.istockphoto.com/id/1498878143/photo/book-stack-and-open-book-on-the-desk-in-modern-public-library.webp?b=1&s=170667a&w=0&k=20&c=T63zJBKuZLTUQwwAAwLzbMwtzAEdd4wZRaEV6EAdUnA=" />
                    <img alt="" className="scale-95 hover:scale-100 duration-500 overflow-hidden w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square object-cover" src="https://media.istockphoto.com/id/173562091/photo/book-open-with-pages-flipping-open.webp?b=1&s=170667a&w=0&k=20&c=kQD06-WxFK7JuZKKBLrHkI63NnhnFswS_TGb1v3qey4=" />
                </div>
            </section>
        </div>
    );
};

export default Gallery;