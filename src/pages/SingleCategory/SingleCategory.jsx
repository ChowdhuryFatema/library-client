import { useLoaderData } from "react-router-dom";
import SingleCat from "./SingleCat";


const SingleCategory = () => {

    const category = useLoaderData();
    console.log(category);

    return (
        <div>
            <div className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-14">
                        
                        
                       {
                        category.map(book => <SingleCat
                            key={book._id}
                            book={book}></SingleCat>)
                       }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;