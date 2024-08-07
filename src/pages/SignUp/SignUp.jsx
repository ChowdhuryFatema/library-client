import { Link, useNavigate } from "react-router-dom";
import signUpImg from '../../assets/images/login.png';
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";


const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false)
    const { createUser, updateUserProfile, logOutUser } = useContext(AuthContext);

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, e) => {

        const { name, email, photo, password } = data;

        if (password.length < 6) {
            return toast.error("Your password must be at least 6 characters")
        }
        else if (!/[A-Z]/.test(password)) {
            return toast.error('Your password should contain at least one capital letter')
        }
        else if (!/[@#$%^&*]/.test(password)) {
            return toast.error('Your password should contain at least one special character')
        }

        createUser(email, password)
            .then(result => {
                console.log(result);

                logOutUser();
                navigate('/login');

                Swal.fire({
                    text: "User Created Successfully!",
                    icon: "success"
                });
                e.target.reset();

                updateUserProfile(name, photo);

            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message,
                });
            })

    }


    return (
        <div className="">
            <div className="max-w-6xl mx-auto px-5 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center shadow-lg">
                    <div className="p-10" >
                        <div className="mb-4">
                            <div className="mb-10">
                                <h2 className="text-4xl md:text-5xl font-bold heading relative logo text-center">Sign Up</h2>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="space-y-2">
                                <input type="text" name="name" placeholder="Name" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" {...register("name", { required: true })} />
                                {errors.name && <span className="text-red-500 text-sm">This field is required</span>}

                                <input type="email" name="email" placeholder="Email" className="border-b border-[rgb(91,91,91)] py-3 outline-none w-full bg-transparent" {...register("email", { required: true })} />

                                {errors.email && <span className="text-red-500 text-sm">This field is required</span>}

                                <input type="url" name="photo" placeholder="Photo URL" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" {...register("photo", { required: true })} />
                                {errors.photo && <span className="text-red-500 text-sm">This field is required</span>}

                                <div className="relative">
                                    <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" className="border-b border-[#5B5B5B] py-3 outline-none w-full bg-transparent" {...register("password", { required: true })} />

                                    <p
                                        onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2">

                                        {showPassword ?
                                            <LuEye size={20} /> :
                                            <LuEyeOff size={20} />}
                                    </p>
                                </div>

                                {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
                                <br />
                                <input type="checkbox" name="" id="" />

                                <span className="ml-2 text-sm">I agree the Terms and Conditions</span>
                                <div className="pt-4">
                                    <button className="btn w-full bg-gradient-to-r from-[#E855DE] text-white to-[#5400EE] font-bold text-lg">Sign Up</button>
                                </div>
                                <p className="text-center text-sm">Already have an account?
                                    <Link to="/login" className="underline font-semibold text-blue-500"> Sign In</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div>
                        <img src={signUpImg} alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignUp;