import { useContext, useEffect, useState } from "react";
// import useBooks from "../../Hooks/useBooks";
import BookCat from "./BookCat";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";


const Books = () => {

    const { user = {} } = useContext(AuthContext);

    console.log(user);

    const [books, setBooks] = useState([]);

    
    useEffect(() => {

        axios.get('https://library-server-teal.vercel.app/booksCat')
        .then(res => {
            setBooks(res.data);
        })


    }, []);

    return (
        <div className="max-w-7xl mx-auto px-5">
            <div className="py-8 md:py-14">
                <h2 className="text-5xl font-bold heading relative ml-16 logo">Books</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">


                {
                    books.slice(0, 4).map(book => <BookCat 
                        key={book._id}
                        book={book}></BookCat>)
                }


            </div>
        </div>
    );
};

export default Books;