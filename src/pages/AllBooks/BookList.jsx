import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import Rating from "react-rating";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";

const BookList = ({ book }) => {

    const { _id, image, author, name, category, rating } = book;

    return (


        <>
            <tr>
                <th>
                    <Link to={`/update/${_id}`}>
                        <FaRegEdit size={20} />
                    </Link>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="w-12 h-20">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>

                        </div>
                    </div>
                </td>
                <td>
                    <div className="text-sm opacity-50">
                        {author}
                    </div>
                </td>

                <td>
                    <span>
                        <Rating
                            initialRating={rating}
                            readonly
                            emptySymbol={<IoIosStarOutline size={24} className="text-[#C9CAC9]" />}
                            fullSymbol={<IoIosStar size={24} className="text-[#F2E650]" />}
                        /></span>
                </td>
                <td>
                    <span className={`font-semibold btn btn-sm 
                        ${category === 'Novel' && 'bg-red-100 text-red-500'}
                        ${category === 'Drama' && 'bg-green-100 text-green-500'}
                        ${category === 'Thriller' && 'bg-blue-100 text-blue-500'}
                        ${category === 'History' && 'bg-yellow-100 text-yellow-500'}
                        `}>{category}</span>

                </td>
            </tr>
        </>
    );
};


BookList.propTypes = {
    book: PropTypes.object,
}
export default BookList;