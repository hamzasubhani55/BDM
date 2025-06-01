function StatCard({ icon, stat, label }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center w-64">
      <img src={icon} alt="stat icon" className="w-16 h-16 mb-4" />
      <h3 className="text-2xl font-bold text-pink-600">{stat}</h3>
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  );
}

export default StatCard;
