import { useQuery } from "@tanstack/react-query";

const useBooks = () => {
        const {data:books=[], isLoading, refetch} = useQuery({
        
            queryKey: ["books"],
            queryFn: async () => {
                const res = await fetch(import.meta.env.VITE_API_URL);
                const data = await res.json();
                return data;
            }
        })
    
        return {books, isLoading, refetch};
};

export default useBooks;