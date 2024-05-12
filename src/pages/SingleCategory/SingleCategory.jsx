import { useLoaderData } from "react-router-dom";
import BookCard from "../AllBooks/BookCard";


const SingleCategory = () => {

    const category = useLoaderData();

    return (
        <div>
            <div className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                        <p className="font-serif text-sm dark:text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-14">
                        
                        
                       {
                        category.map(book => <BookCard 
                            key={book._id}
                            book={book}></BookCard>)
                       }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;