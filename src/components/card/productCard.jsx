import { FaHeart, FaEye, FaStar } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className="max-w-[200px] bg-white rounded-lg shadow-sm p-3 relative">
      {/* Action Buttons */}
      <div className="absolute top-2 right-2 flex flex-col space-y-2">
        <button className="bg-white p-2 rounded-full shadow hover:bg-pink-100 transition-colors">
          <FaHeart className="text-pink-500 text-sm" />
        </button>
        <button className="bg-white p-2 rounded-full shadow hover:bg-purple-100 transition-colors">
          <FaEye className="text-purple-500 text-sm" />
        </button>
      </div>

      {/* Product Image */}
      <div className="flex justify-center mb-4">
        <img
          src="https://cdn.shopify.com/s/files/1/0256/2395/collections/women-s-jackets.jpg?v=1613472495"
          alt="The north coat"
          className="h-40 object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="text-sm px-2">
        <h3 className="text-gray-900 font-medium">The north coat</h3>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sky-500 font-semibold">$260</span>
          <span className="text-gray-400 line-through">$360</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2 text-yellow-500">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <FaStar key={i} className="text-xs" />
            ))}
          <span className="text-xs text-gray-600 ml-1">(65)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
