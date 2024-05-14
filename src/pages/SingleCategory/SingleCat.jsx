import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";

const SingleCat = ({ book }) => {
    const { _id, image, author, name, category, rating } = book;


    return (
        <div className="flex flex-col dark:bg-gray-50 rounded-md">
            <div className="flex justify-center items-center py-10 border 
            bg-[#e8e8e886]">
                <img alt="" className="object-cover w-40 h-52  my-5 scale-110 hover:scale-125 duration-500 dark:bg-gray-500" src={image} />
            </div>
            <div className="flex flex-col flex-1 p-6 shadow-md">
                <div className="flex justify-between">
                    <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">
                        <span className="font-semibold">Author - </span>{author}
                    </a>
                </div>
                <h1 className="flex-1 py-2 text-2xl font-semibold leading-snug">{name}</h1>

                <div className="flex flex-wrap justify-between pt-1 space-x-2 text-xs dark:text-gray-600">
                    <span>
                        <Rating
                            initialRating={rating}
                            readonly
                            emptySymbol={<IoIosStarOutline size={24} className="text-[#C9CAC9]" />}
                            fullSymbol={<IoIosStar size={24} className="text-[#F2E650]" />}
                        /></span>

                    <span className={`font-semibold btn btn-sm 
                        ${category === 'Novel' && 'bg-red-100 text-red-500'}
                        ${category === 'Drama' && 'bg-green-100 text-green-500'}
                        ${category === 'Thriller' && 'bg-blue-100 text-blue-500'}
                        ${category === 'History' && 'bg-yellow-100 text-yellow-500'}
                        `}>{category}</span>
                </div>
                <Link to={`/details/${_id}`} className="btn mt-5 bg-gradient-to-r from-[#E855DE] text-white to-[#5400EE] font-bold text-lg border-none">
                    View Details
                </Link>
            </div>
        </div>
    );
};
SingleCat.propTypes = {
    book: PropTypes.object,
}


export default SingleCat;