import { useLoaderData } from "react-router-dom";


const Details = () => {

    const book = useLoaderData()

    const {
        image,
        name,
        description,
        author,
        category,
        rating,
        contents,
        quantity
    } = book;


    return (
        <div className="max-w-7xl mx-auto px-5">
            <div className="dark:bg-gray-100 dark:text-gray-900">
                <div className="container grid grid-cols-12 mx-auto dark:bg-gray-50">
                    <div className="dark:bg-gray-300 col-span-full lg:col-span-4">
                        <img className="py-20" src={image} alt="" />
                    </div>
                    <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">


                        <div className="max-w-2xl px-6 py-16 space-y-12">
                            <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
                                <div className="space-y-6">
                                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{name}</h1>
                                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
                                        <div className="flex items-center md:space-x-2">
                                            <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
                                            <p className="text-sm">{author}</p>
                                        </div>
                                        <p className="flex-shrink-0 mt-3 text-sm md:mt-0">4 min read • 1,570 views</p>
                                    </div>
                                </div>
                                <div className="dark:text-gray-800">
                                    <p>{description}</p>
                                </div>
                            </article>
                            <div>
                                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                                    <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#MambaUI</a>
                                    <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#TailwindCSS</a>
                                    <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#Angular</a>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-lg font-semibold">Related posts</h4>
                                    <ul className="ml-4 space-y-1 list-disc">
                                        <li>
                                            <a rel="noopener noreferrer" href="#" className="hover:underline">Nunc id magna mollis</a>
                                        </li>
                                        <li>
                                            <a rel="noopener noreferrer" href="#" className="hover:underline">Duis molestie, neque eget pretium lobortis</a>
                                        </li>
                                        <li>
                                            <a rel="noopener noreferrer" href="#" className="hover:underline">Mauris nec urna volutpat, aliquam lectus sit amet</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;