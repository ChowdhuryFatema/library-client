import axios from 'axios';
import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";

const BorrowedBook = ({ borrowedBook, setData, data }) => {

    const {
        _id,
        image,
        name,
        category,
        timestamp,
        return_date,
        rating,
    } = borrowedBook;



    const handleReturn = id => {

        axios.delete(`https://library-server-teal.vercel.app/borrowedBooks/${_id}`)
            .then(data => {
                console.log(data.data);
            })

        const remaining = data.filter(item => item._id !== id)
        setData(remaining)
    }

    return (
        <>
        <div className="grid grid-cols-3 items-center dark:bg-gray-50 rounded-md shadow-md gap-3">
            <div className="flex col-span-1 justify-center items-center border bg-[#e8e8e838] relative h-full">
                <img alt="" className="object-cover w-48 h-36 md:h-40 p-5 dark:bg-gray-500 scale-110 hover:scale-125 duration-500" src={image} />
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
            <div className="flex col-span-2 flex-col flex-1 space-y-3 pt-1">
                <h1 className="text-xl md:text-2xl font-semibold leading-snug">{name}</h1>
                <p className='text-sm'><span className='font-semibold'>Borrowed Date:</span>  {timestamp}</p>
                <p className='text-sm'><span className='font-semibold'>Return Date:</span> {return_date}</p>
                <span>
                        <Rating
                            initialRating={rating}
                            readonly
                            emptySymbol={<IoIosStarOutline size={24} className="text-[#C9CAC9]" />}
                            fullSymbol={<IoIosStar size={24} className="text-[#F2E650]" />}
                        /></span>
                <div>
                    <button onClick={() => handleReturn(_id)} className="btn bg-gradient-to-r from-[#E855DE] text-white to-[#5400EE] font-bold btn-sm border-none">
                        Return
                    </button>
                    <div className="flex flex-wrap justify-between pt-5 space-x-2 text-xs dark:text-gray-600">
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};


BorrowedBook.propTypes = {
    borrowedBook: PropTypes.object,
    setData: PropTypes.func,
    data: PropTypes.array

}
export default BorrowedBook;