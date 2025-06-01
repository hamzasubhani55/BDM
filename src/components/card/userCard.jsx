function UserCard({ avatar, name, jobTitle, content, walletBalance, rating }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-[250px] md:w-[350px] space-y-4">
      <div className="flex items-center space-x-4">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="text-start">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{jobTitle}</p>
        </div>
      </div>

      <div className="text-sm text-gray-600 text-center">{content}</div>

      <div className="flex flex-col items-center">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${
                index < rating ? "text-yellow-400" : "text-gray-300"
              } fill-current`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        {walletBalance && (
          <p className="text-md text-pink-600 font-semibold mt-2">
            {walletBalance}
          </p>
        )}
      </div>
    </div>
  );
}

export default UserCard;
