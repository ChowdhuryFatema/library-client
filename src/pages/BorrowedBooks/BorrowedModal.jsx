/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import modalImg from '../../assets/images/modal.png';
import Swal from "sweetalert2";
import axios from "axios";
import PropTypes from 'prop-types';


const BorrowedModal = ({name, image, category, rating}) => {


    const { user } = useContext(AuthContext);
    const [borrowed, setBorrowed] = useState([]);
    

    const handleBorrowedDate = e => {
        e.preventDefault();
        const form = e.target;
        const return_date = form.return_date.value;


        const date = {
            return_date,
            name, 
            image, 
            category,
            rating,
            timestamp: new Date().toLocaleDateString().split('/').join('-')
        }
        
    axios.post('https://library-server-teal.vercel.app/borrowedBooks', date, )
        .then(data => {
            console.log(data.data);

            if (data.data.insertedId) {
                Swal.fire({
                    text: "Borrowed Book Successfully!",
                    icon: "success"
                });
            }
        })
    }

    useEffect(() => {
        axios.get(`https://library-server-teal.vercel.app/borrowedBooks`)
            .then(data => {

                setBorrowed(data.data)
            })

    }, [borrowed])

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">

                    
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:p-5 lg:p-10 gap-5">
                        <div>
                            <img className="p-5 lg:p-0 w-full" src={modalImg} alt="" />
                        </div>
                        <form onSubmit={handleBorrowedDate} className="space-y-5">
                            <label>
                                <p className="py-3">Name</p>
                                <input className="border py-1 px-2 rounded w-full" type="text" value={user.displayName} disabled />
                            </label>
                            <label>
                                <p className="py-3">Email</p>
                                <input className="border py-1 px-2 rounded w-full" type="email" value={user.email} disabled />
                            </label>                       
                            <label>
                                <p className="py-3">Return Date</p>
                                <input className="border py-1 px-2 rounded w-full" name="return_date" type="date" placeholder="Return Date" />
                            </label>
                            <button onClick={()=>document.getElementById('my_modal_3').close()} type="submit" className="btn bg-gradient-to-r from-[#E855DE] text-white to-[#5400EE] font-bold border-none">
                                Submit
                            </button>
                            <a onClick={()=>document.getElementById('my_modal_3').close()} className="btn bg-transparent font-bold border text-[#AF34E4] ml-3 border-[#AF34E4]" >
                                Cancel
                            </a>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};


BorrowedModal.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    quantity: PropTypes.string,
    bookId: PropTypes.string,
    rating: PropTypes.string,
}
export default BorrowedModal;