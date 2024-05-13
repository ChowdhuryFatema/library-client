import { TfiViewListAlt } from "react-icons/tfi";
import { TfiViewGrid } from "react-icons/tfi";

import useBooks from "../../Hooks/useBooks";
import BookCard from "./BookCard";
import { useState } from "react";
import BookList from "./BookList";


const AllBooks = () => {

    const { books } = useBooks();


    const [viewList, setViewList] = useState(false);
    const [viewGrid, setViewGrid] = useState(true);
    const [filteredBooks, setFilteredBooks] = useState(books);

    const handleViewList = () => {
        setViewGrid(false)
        setViewList(true)
    }

    const handleViewGrid = () => {
        setViewList(false)
        setViewGrid(true)
    }

    const handleAvailableBooks = () => {
        const availableBooks = books.filter(book => book.quantity > 0);

        setFilteredBooks(availableBooks);
    }


    return (
        <div className="max-w-7xl mx-auto px-5">

            <div className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">

                <div className="flex justify-between items-center">

                    <div className="rounded-full bg-gradient-to-r from-[#E855DE] text-white to-[#5400EE]">
                        <button onClick={handleViewList} className="btn bg-transparent tooltip tooltip-bottom" data-tip="List layout"><TfiViewListAlt className="text-white"/></button>
                        <button onClick={handleViewGrid} className="btn bg-transparent tooltip tooltip-bottom" data-tip="Grid layout"><TfiViewGrid className="text-white"/></button>
                    </div>
                    <div>
                        <button onClick={handleAvailableBooks} className="btn bg-gradient-to-r from-[#E855DE] text-white to-[#5400EE] font-bold border-none">Show available books</button>
                    </div>


                </div>

                <div className="space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                        <p className="font-serif text-sm dark:text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-14">


                        {viewGrid &&
                            filteredBooks.map(book => <BookCard
                                key={book._id}
                                book={book}
                            ></BookCard>)
                        }
                    </div>



                    {
                        viewList &&
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>
                                            <label>
                                                <span>Edit</span>
                                            </label>
                                        </th>
                                        <th>Name</th>
                                        <th>Author</th>
                                        <th>Review</th>
                                        <th>Category</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        filteredBooks.map(book => <BookList
                                            key={book._id}
                                            book={book}
                                        ></BookList>)
                                    }

                                </tbody>


                            </table>
                        </div>
                    }



                </div>
            </div>
        </div>
    );
};

export default AllBooks;