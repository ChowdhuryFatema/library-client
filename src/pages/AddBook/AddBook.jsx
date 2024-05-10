// import { useContext } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddBook = () => {


    // const { user } = useContext(AuthContext)

    const handleAddBook = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const description = form.description.value;
        const author = form.author.value;
        const category = form.category.value;
        const rating = form.rating.value;


        const newBook = {
            image,
            name,
            description,
            author,
            category,
            rating
        }
        console.log(newBook)

        axios.post('http://localhost:5000/books', newBook)
            .then(data => {
                console.log(data.data);

                if (data.data.insertedId) {
                    Swal.fire({
                        text: "Book Added Successfully!",
                        icon: "success"
                    });
                    form.reset()
                }
            })
    }

    return (
        <div className="add-book min-h-[calc(100vh-80px)] relative">
            <div className="overlay1">
                <div className="max-w-5xl mx-auto px-5 py-10 relative z-50">
                    <div className="mb-8">
                        <h2 className="text-red text-3xl md:text-5xl text-red font-semibold text-center text-white">Add Tourists Spot</h2>
                    </div>
                    <form onSubmit={handleAddBook} className="space-y-2 md:space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">


                            <div className="space-y-2">
                                <p className="text-white text-lg">Photo URL</p>
                                <input type="url" name="image" placeholder="Photo URL" className="border py-3 px-2 outline-none w-full bg-transparent text-white rounded-md" />
                            </div>
                            <div className="space-y-2">
                                <p className="text-white text-lg">Book Name</p>
                                <input type="text" name="name" placeholder="Book Name" className="border py-3 px-2 outline-none w-full bg-transparent text-white rounded-md" />
                            </div>
                        </div>

                        <div>
                            <div className="space-y-2">
                                <p className="text-white text-lg">Short description</p>
                                <textarea name="description" placeholder="Short description" rows={8} className="border py-3 px-2 outline-none w-full bg-transparent text-white rounded-md" ></textarea>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-5">
                            <div className="space-y-2">
                                <p className="text-white text-lg">Author Name</p>
                                <input type="text" name="author" placeholder="Author Name" className="border py-3 px-2 outline-none w-full bg-transparent text-white rounded-md" />
                            </div>


                            <div className="space-y-2">
                            <p className="text-white text-lg">Category</p>
                            <select name="category" className="border px-2 outline-none w-full bg-transparent text-white rounded-md py-3">
                                <option className="py-5 outline-none w-full bg-transparent">Select Category</option>
                                <option className="text-black" value="Novel">Novel</option>
                                <option className="text-black" value="Thriller">Thriller</option>
                                <option className="text-black" value="History">History</option>
                                <option className="text-black" value="Drama">Drama</option>
                            </select>
                            </div>


                            <div className="space-y-2">
                            <p className="text-white text-lg">Rating</p>
                            <select name="rating" className="border px-2 outline-none w-full bg-transparent text-white rounded-md py-3">
                                <option className="py-5 outline-none w-full bg-transparent">Select Rating</option>
                                <option className="text-black" value="1">1</option>
                                <option className="text-black" value="2">2</option>
                                <option className="text-black" value="3">3</option>
                                <option className="text-black" value="4">4</option>
                                <option className="text-black" value="5">5</option>
                            </select>
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

export default AddBook;