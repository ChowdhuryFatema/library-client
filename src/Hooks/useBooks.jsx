import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useBooks = () => {

    const {user} = useContext(AuthContext)

    console.log(user);
        const {data:books=[], isLoading, refetch} = useQuery({
        
            queryKey: ["books"],
            queryFn: async () => {
                const res = await fetch(`http://localhost:5000/books?email=${user?.email}`, {credentials: 'include'});
                const data = await res.json();
                return data;
            }
        })
    
        return {books, isLoading, refetch};
};

export default useBooks;