import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";



const AllProducts = () => {

    const [products, setproducts] = useState([])
    const [search, setSearch] = useState('')
    const [sortOrder, setSortOrder] = useState('')
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [count, setCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);


    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()].map(item => item + 1);


    useEffect(() => {

        fetch(`http://localhost:3000/products?search=${search}&sortOrder=${sortOrder}&page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setproducts(data)

            });
    }, [search, sortOrder, currentPage, itemsPerPage]);

    useEffect(() => {
        fetch('http://localhost:3000/paginationcount')
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
            });
    }, [count, currentPage, pages]);

    const handleSearch = (e) => {
        e.preventDefault();
        const text = e.target.search.value;
        setSearch(text);
    };

    const handleSortOrderChange = (e) => {
        setSortOrder(e.target.value);
    };


    // pagination from here 
    const handleBtn = value => {
        setCurrentPage(value);

    };

    const handlePagination = value => {
        setCurrentPage(value);

    };

    const handleNext = () => {
        if (currentPage < numberOfPages) {
            handlePagination(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            handlePagination(currentPage - 1);
        }
    };


    return (
        <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>

            <h1 className="text-4xl text-center font-semibold my-8">All products</h1>
            <div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>


                    <form onSubmit={handleSearch}>
                        <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                name='search'
                                placeholder='search products'
                                aria-label='Enter Job Title'
                            />

                            <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-orange-400 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                                Search
                            </button>
                        </div>
                    </form>
                    <div>
                        <select
                            name='category'
                            id='category'
                            className='border p-4 rounded-md'
                            value={sortOrder}
                            onChange={handleSortOrderChange}
                        >

                            <option value=''>Sort By</option>
                            <option value='price-asc'>Price: Low to High</option>
                            <option value='price-desc'>Price: High to Low</option>
                            <option value='date-desc'>Date Added: Newest First</option>
                        </select>
                    </div>

                </div>
                <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {products.map(product => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>

            <div className='flex justify-center mt-12'>
                <button disabled={currentPage === 1}
                    onClick={handlePrevious} className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'>
                    <div className='flex items-center -mx-1'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M7 16l-4-4m0 0l4-4m-4 4h18'
                            />
                        </svg>

                        <span className='mx-1'>previous</span>
                    </div>
                </button>

                {pages.map(btnNum => (
                    <button
                        onClick={() => handleBtn(btnNum)}
                        key={btnNum}
                        className={` ${currentPage === btnNum ? 'bg-lime-500 text-gray-900' : 'bg-white text-gray-900'} px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline hover:bg-lime-700 hover:text-white`}>
                        {btnNum}
                    </button>
                ))}

                <button
                    disabled={currentPage === numberOfPages}
                    onClick={handleNext} className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
                    <div className='flex items-center -mx-1'>
                        <span className='mx-1'>Next</span>

                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default AllProducts;

