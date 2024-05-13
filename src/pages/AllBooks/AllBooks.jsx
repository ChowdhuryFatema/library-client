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

    const handleViewList = () => {
        setViewGrid(false)
        setViewList(true)
    }

    const handleViewGrid = () => {
        setViewList(false)
        setViewGrid(true)
    }


    return (
        <div>
            <div>
                <button onClick={handleViewList} className="btn"><TfiViewListAlt /></button>
                <button onClick={handleViewGrid} className="btn"><TfiViewGrid /></button>
            </div>
            <div className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                        <p className="font-serif text-sm dark:text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-14">


                        {viewGrid &&
                            books.map(book => <BookCard
                                key={book._id}
                                book={book}></BookCard>)
                        }
                    </div>


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

                                {viewList &&
                                    books.map(book => <BookList
                                        key={book._id}
                                        book={book}
                                    ></BookList>)
                                }

                            </tbody>


                        </table>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AllBooks;