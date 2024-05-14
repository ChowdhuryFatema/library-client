import { useContext, useEffect, useState } from "react";
// import useBooks from "../../Hooks/useBooks";
import BookCat from "./BookCat";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";


const Books = () => {

    const { user = {} } = useContext(AuthContext);

    console.log(user);

    const [books, setBooks] = useState([]);

    const url = `https://library-server-teal.vercel.app/books?email=${user?.email}`;
    useEffect(() => {

        axios.get(url, {withCredentials: true})
        .then(res => {
            setBooks(res.data);
        })


        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))


    }, [url]);

    return (
        <div className="max-w-7xl mx-auto px-5 my-20">
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