import { useLoaderData } from "react-router-dom";
import BorrowedBook from "./BorrowedBook";
import { useState } from "react";


const BorrowedBooks = () => {

    const borrowedBooks = useLoaderData();
    const [data, setData] = useState(borrowedBooks)

    return (
        <div className="max-w-7xl mx-auto px-5 my-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-14">
                {
                    data.map(borrowedBook => <BorrowedBook
                        key={borrowedBook._id}
                        borrowedBook={borrowedBook}
                        setData={setData}
                        data={data}></BorrowedBook>)
                }
            </div>
        </div>
    );
};

export default BorrowedBooks;