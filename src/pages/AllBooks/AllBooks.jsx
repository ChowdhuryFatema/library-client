import { TfiViewListAlt } from "react-icons/tfi";
import { TfiViewGrid } from "react-icons/tfi";
import useBooks from "../../Hooks/useBooks";
import BookCard from "./BookCard";
import { useEffect, useState } from "react";
import BookList from "./BookList";
import { Helmet } from "react-helmet-async";


const AllBooks = () => {

    const [viewList, setViewList] = useState(false);
    const [viewGrid, setViewGrid] = useState(true);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [search, setSearch] = useState('');
    const { books, refetch } = useBooks(search, setSearch);

    console.log(books);


    useEffect(() => {
        refetch();
    }, [search, refetch])

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

    const handleSearch = e => {
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearch(searchText);
        e.target.reset();

    }

    return (
        <>
            <Helmet>
                <title>Library | All Books</title>
            </Helmet>
            <div className="max-w-7xl mx-auto px-5">
                <div className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">

                    <div className="space-y-8">
                        <div className="mb-16 md:mb-20">
                            <h2 className="text-4xl md:text-5xl font-bold heading relative logo text-center">All Books</h2>
                        </div>

                        {/* larg device  */}
                        <div className="hidden md:flex flex-col md:flex-row justify-between items-center gap-5">

                            <div>
                                <button onClick={handleAvailableBooks} className="btn bg-gradient-to-r bg-transparent logo font-bold border border-[#d64adf]">Show available books</button>
                            </div>
                            <form onSubmit={handleSearch} className="join">
                                <input className="input input-bordered join-item" placeholder="Search" name="search"/>
                                <button className="btn join-item bg-gradient-to-r from-[#E855DE] text-white to-[#5400EE] font-bold">Search</button>
                            </form>

                            <div className="rounded-full bg-gradient-to-r from-[#E855DE] text-white to-[#5400EE]">
                                <button onClick={handleViewList} className="btn bg-transparent tooltip tooltip-bottom hover:bg-[#D64ADF]" data-tip="List layout"><TfiViewListAlt className="text-white" /></button>
                                <button onClick={handleViewGrid} className="btn bg-transparent tooltip tooltip-left hover:bg-[#D64ADF]" data-tip="Grid layout"><TfiViewGrid className="text-white" /></button>
                            </div>
                        </div>

                        {/* small device */}
                        <div className="md:hidden flex flex-col md:flex-row justify-between items-center gap-5">
                            <form className="join w-full">
                                <input className="input input-bordered join-item w-full" placeholder="Search" name="search"/>
                                <button className="btn join-item bg-gradient-to-r from-[#E855DE] text-white to-[#5400EE] font-bold">Search</button>
                            </form>
                            <div className="flex justify-between gap-5 w-full">
                                <div>
                                    <button onClick={handleAvailableBooks} className="btn bg-gradient-to-r bg-transparent logo font-bold border border-[#d64adf]">Show available books</button>
                                </div>
                                <div className="rounded-full bg-gradient-to-r from-[#E855DE] text-white to-[#5400EE]">
                                    <button onClick={handleViewList} className="btn bg-transparent tooltip tooltip-bottom hover:bg-[#D64ADF]" data-tip="List layout"><TfiViewListAlt className="text-white" /></button>
                                    <button onClick={handleViewGrid} className="btn bg-transparent tooltip tooltip-left hover:bg-[#D64ADF]" data-tip="Grid layout"><TfiViewGrid className="text-white" /></button>
                                </div>
                            </div>
                        </div>


                        {viewGrid &&
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-14">

                                {
                                    filteredBooks.length > 0 ?

                                        filteredBooks.map(book => <BookCard
                                            key={book._id}
                                            book={book}
                                        ></BookCard>)

                                        :

                                        books.map(book => <BookCard
                                            key={book._id}
                                            book={book}
                                        ></BookCard>)
                                }

                            </div>
                        }
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

                                        {filteredBooks.length > 0 ?

                                            filteredBooks.map(book => <BookList
                                                key={book._id}
                                                book={book}
                                            ></BookList>)

                                            :
                                            books.map(book => <BookList
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
        </>
    );
};

export default AllBooks;