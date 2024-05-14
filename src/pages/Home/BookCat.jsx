import PropTypes from "prop-types";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const BookCat = ({ book }) => {

    const { image, category } = book;


    // const handleCatgory = cat => {
    //     console.log(cat);
    // }

    return (
        <Link to={`/books/${category}`} className="flex flex-col dark:bg-gray-50 rounded-md">
            <div className="cat-card flex justify-center items-center border bg-[#e8e8e838] relative">
                <div className="overlay2 py-10">
                    <img alt="" className="object-cover w-44 h-64   dark:bg-gray-500 " src={image} />
                </div>
                <div className="absolute search duration-500 hidden top-2/4 left-2/4 -translate-x-[50%] -translate-y-[50%]">
                    <IoSearch size={40} className="text-white" />
                </div>

                <div className={`category absolute top-0 left-0 w-24 h-24 text-sm
                        ${category === 'Novel' && 'bg-red-100 text-red-500'}
                        ${category === 'Drama' && 'bg-green-100 text-green-500'}
                        ${category === 'Thriller' && 'bg-blue-100 text-blue-500'}
                        ${category === 'History' && 'bg-yellow-100 text-yellow-500'}
                    `}>

                    <p className="-rotate-45">
                        <span className="font-semibold">{category}</span>

                    </p>

                </div>
            </div>
        </Link>
    );
};

BookCat.propTypes = {
    book: PropTypes.object,
}
export default BookCat;