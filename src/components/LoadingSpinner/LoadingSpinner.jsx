import { ClimbingBoxLoader } from "react-spinners";



const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center w-full min-h-[calc(100vh-76px)]">
            <ClimbingBoxLoader color="#36d7b7" />
        </div>
    );
};

export default LoadingSpinner;