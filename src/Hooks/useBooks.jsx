import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useBooks = () => {

    const {user} = useContext(AuthContext)


        const {data:books = [], isLoading, refetch} = useQuery({
        
            queryKey: ["books", user?.email],
            enabled: !! user?.email,
            queryFn: async () => {
                const res = await fetch(`https://library-server-teal.vercel.app/books?email=${user?.email}`, {credentials: 'include'});
                const data = await res.json();
                return data;


            }
        })
    
        return {books, isLoading, refetch};
};

export default useBooks;