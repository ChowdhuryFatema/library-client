import useBooks from "../../Hooks/useBooks";
import BookCat from "./BookCat";


const Books = () => {

    const { books } = useBooks();

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