const CardList = ({ title, data, type }) => {
    return (
      <div className="max-w-6xl mx-auto p-3 mb-5">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl ">{title}</h2>
          <a href="#" className="text-blue-600 hover:underline text-sm">
            View more
          </a>
        </div>
  
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div key={index} className="bg-white border rounded-lg shadow-sm p-4">
              <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                {/* Adjust title font size based on type */}
                <h3 className={`truncate ${type === "news" ? "text-sm" : "text-lg"} font-semibold`}>
                  {item.title}
                </h3>
                <span className="text-sm text-gray-500">{item.date}</span>
              </div>
              <p className="mt-2 text-gray-700">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CardList;
  