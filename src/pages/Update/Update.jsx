
import axios from "axios";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const Update = () => {


    const singleBook = useLoaderData()
    const {
        _id,
        image,
        name,
        author,
        category,
        rating,
    } = singleBook

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const author = form.author.value;
        const category = form.category.value;
        const rating = form.rating.value;


        const updatedBook = {
            image,
            name,
            author,
            category,
            rating,
        }
        console.log(updatedBook)

        axios.put(`http://localhost:5000/books/${_id}`, updatedBook)
        .then(data => {
            console.log(data.data);

            if (data.data.modifiedCount > 0) {
                Swal.fire({
                    text: "Book Updated Successfully!",
                    icon: "success"
                });
                form.reset()
            }
        })
    }


    return (
        <div className="add-book min-h-[calc(100vh-80px)] relative">
            <div className="overlay1">
                <div className="max-w-5xl mx-auto px-5 py-16 relative z-50">
                    <div className="mb-8">
                        <h2 className="text-red text-3xl md:text-5xl text-red font-semibold text-center text-white">Update</h2>
                    </div>
                    <form onSubmit={handleUpdate} className="space-y-2 md:space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">


                            <div className="space-y-2">
                                <p className="text-white text-lg">Photo URL</p>
                                <input type="url" defaultValue={image} name="image" placeholder="Photo URL" className="border py-3 px-2 outline-none w-full bg-transparent text-white rounded-md" />
                            </div>
                            <div className="space-y-2">
                                <p className="text-white text-lg">Book Name</p>
                                <input type="text" name="name" defaultValue={name} placeholder="Book Name" className="border py-3 px-2 outline-none w-full bg-transparent text-white rounded-md" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-5">



                            <div className="space-y-2">
                                <p className="text-white text-lg">Category</p>
                                <select name="category" className="border px-2 outline-none w-full bg-transparent text-white rounded-md py-3">
                                    
                                    <option selected={category === 'Novel'}  className="text-black" value="Novel">Novel</option>
                                    <option selected={category === 'Thriller'}  className="text-black" value="Thriller">Thriller</option>
                                    <option selected={category === 'History'}  className="text-black" value="History">History</option>
                                    <option selected={category === 'Drama'}  className="text-black" value="Drama">Drama</option>
                                </select>
                            </div>


                            <div className="space-y-2">
                                <p className="text-white text-lg">Rating</p>
                                <select name="rating" className="border px-2 outline-none w-full bg-transparent text-white rounded-md py-3">
                                    
                                    <option selected={rating == 1} className="text-black" value="1">1</option>
                                    <option selected={rating == 2} className="text-black" value="2">2</option>
                                    <option selected={rating == 3} className="text-black" value="3">3</option>
                                    <option selected={rating == 4} className="text-black" value="4">4</option>
                                    <option selected={rating == 5} className="text-black" value="5">5</option>
                                </select>
                            </div>
                        </div>




                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">

                            <div className="space-y-2">
                                <p className="text-white text-lg">Author Name</p>
                                <input type="text" defaultValue={author} name="author" placeholder="Author Name" className="border py-3 px-2 outline-none w-full bg-transparent text-white rounded-md" />
                            </div>



                        </div>


                        <div className="pt-5">
                            <button className="btn bg-gradient-to-r from-[#E855DE] text-white border-none to-[#5400EE] font-bold text-lg">Add Book</button>
                        </div>



                    </form>
                </div>
            </div>

        </div>
    );
};

export default Update;