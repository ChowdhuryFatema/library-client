import axios from 'axios';
import PropTypes from 'prop-types';

const BorrowedBook = ({ borrowedBook, setData, data }) => {

    const {
        _id,
        image,
        name,
        category,
        timestamp,
        return_date,
    } = borrowedBook;


    const handleReturn = id => {
        console.log(id);

        axios.delete(`http://localhost:5000/borrowedBooks/${_id}`)
        .then(data => {
            console.log(data.data);
        })

        const remaining = data.filter(item => item._id !== id)
        setData(remaining)
    }

    return (
        <div className="flex flex-col dark:bg-gray-50 rounded-md">
            <div className="flex justify-center items-center py-10 border bg-[#e8e8e838]">
                <img alt="" className="object-cover w-28 dark:bg-gray-500" src={image} />
            </div>
            <div className="flex flex-col flex-1 p-6 shadow-md">
                <div className="flex justify-between">

                </div>

                <h1 className="flex-1 py-2 text-2xl font-semibold leading-snug">{name}</h1>

                <div className="flex flex-wrap justify-between pt-5 space-x-2 text-xs dark:text-gray-600">


                    <span className={`font-semibold btn btn-sm 
                ${category === 'Novel' && 'bg-red-100 text-red-500'}
                ${category === 'Drama' && 'bg-green-100 text-green-500'}
                ${category === 'Thriller' && 'bg-blue-100 text-blue-500'}
                ${category === 'History' && 'bg-yellow-100 text-yellow-500'}
                `}>{category}</span>

                </div>

                <p>Borrowed Date:  {timestamp}</p>

                <p>Return Date: {return_date}</p>

                <button onClick={() => handleReturn(_id)} className="btn bg-gradient-to-r from-[#E855DE] text-white to-[#5400EE] font-bold text-lg border-none">
                    Return
                </button>
            </div>
        </div>
    );
};


BorrowedBook.propTypes = {
    borrowedBook: PropTypes.object,
    setData: PropTypes.func,
    data: PropTypes.array

}
export default BorrowedBook;