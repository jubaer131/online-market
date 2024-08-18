

const ProductCard = ({ product }) => {

    const { image, productName, description, price, productDateTime, rating, category } = product
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
            <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">

                <h2 className="text-xl font-semibold tracking-wide">{productName}</h2>
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600"> Category : {category}</span>
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600"> Price : {price}</span>
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600"> Rating : {rating}</span>
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">productDateTime : {productDateTime} </span>
            </div>
            <p className="dark:text-gray-800">{description}</p>
        </div>
    );
};

export default ProductCard;