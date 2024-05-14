/* eslint-disable react-hooks/exhaustive-deps */
import { useLoaderData } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import Rating from "react-rating";
import BorrowedModal from "../BorrowedBooks/BorrowedModal";
import { useEffect, useState } from "react";
import axios from "axios";
import detailsImg from '../../assets/images/details.jpg';


const Details = () => {

    const book = useLoaderData()
    const [borrowed, setBorrowed] = useState([]);


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

    const allReadyAdded = borrowed.find(borrow => borrow.name == name) || {};


    useEffect(() => {
        axios.get('https://library-server-teal.vercel.app/borrowedBooks')
            .then(data => {

                setBorrowed(data.data)
            })

    }, [borrowed])


    return (
        <div className="mb-10">
            <div className="details-overlay relative z-20">
                <img className="md:w-full h-40 md:h-72 object-cover" src={detailsImg} alt="" />
                <div className="absolute top-2/4 left-2/4 -translate-x-[50%] -translate-y-[50%] z-50 w-full">
                    <h2 className="logo text-5xl lg:text-6xl font-bold text-center">Book Details</h2>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-5">
                <div className="dark:bg-gray-100 dark:text-gray-900">
                    <div className="container grid grid-cols-12 mx-auto dark:bg-gray-50">
                        <div className="dark:bg-gray-300 col-span-full lg:col-span-4">
                            <img className="md:py-20 md:w-full" src={image} alt="" />
                        </div>
                        <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">


                            <div className="w-full md:max-w-2xl md:px-6 py-5 md:py-16 space-y-5">
                                <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
                                    <div className="space-y-6">
                                        <h1 className="text-3xl md:text-4xl font-bold md:tracking-tight lg:text-5xl">{name}</h1>
                                        <div className="flex items-start justify-between w-full md:items-center dark:text-gray-600">
                                            <div className="flex items-center md:space-x-2">
                                                <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-300" />

                                                <p className="text-sm">{author}</p>
                                            </div>


                                            <div className="flex flex-wrap justify-between md:pt-5 space-x-2 text-xs dark:text-gray-600">


                                                <span className={`font-semibold btn btn-sm 
                        ${category === 'Novel' && 'bg-red-100 text-red-500'}
                        ${category === 'Drama' && 'bg-green-100 text-green-500'}
                        ${category === 'Thriller' && 'bg-blue-100 text-blue-500'}
                        ${category === 'History' && 'bg-yellow-100 text-yellow-500'}
                        `}>{category}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dark:text-gray-800">
                                        <p>{description}</p>
                                    </div>
                                </article>
                                <div>
                                    <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                                        <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"> <span>
                                            <Rating
                                                initialRating={rating}
                                                readonly
                                                emptySymbol={<IoIosStarOutline size={24} className="text-[#C9CAC9]" />}
                                                fullSymbol={<IoIosStar size={24} className="text-[#F2E650]" />}
                                            />
                                        </span></a>
                                        <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">Quantity : {allReadyAdded.name == name ? quantity - 1 : quantity}</a>

                                    </div>
                                    <div className="space-y-2">
                                        <p>{contents}</p>
                                    </div>
                                </div>


                                <button onClick={() => {
                                    document.getElementById('my_modal_3').showModal()
                                }} className="btn bg-gradient-to-r from-[#E855DE] text-white to-[#5400EE] font-bold text-lg border-none" disabled={allReadyAdded.name == name || quantity <= 0}>
                                    Borrow
                                </button>

                                <BorrowedModal
                                    name={name}
                                    image={image}
                                    category={category}
                                    rating={rating}
                                ></BorrowedModal>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;