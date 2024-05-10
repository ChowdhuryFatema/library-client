import { useLoaderData } from "react-router-dom";


const AllBooks = () => {

    const books = useLoaderData();
    console.log(books);

    return (
        <div>
            
        </div>
    );
};

export default AllBooks;