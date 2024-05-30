import PropTypes from 'prop-types';

const SearchBook = ({handleSearch}) => {
    return (
        <form onSubmit={handleSearch} className="join w-full md:w-1/2 mx-auto flex justify-center">
            <input className="input input-bordered join-item w-full md:w-1/2" placeholder="Search" name="search" />
            <button className="btn join-item bg-gradient-to-r from-[#E855DE] text-white to-[#5400EE] font-bold">Search</button>
        </form>
    );
};

SearchBook.propTypes = {
    handleSearch: PropTypes.func,
}
export default SearchBook;