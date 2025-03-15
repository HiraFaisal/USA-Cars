const StatsSection = () => {
    const stats = [
      { value: "2505+", label: "Cars were sold per year" },
      { value: "15+", label: "Years of work" },
      { value: "50+", label: "Delivery in countries" },
    ];
  
    return (
      <div className="bg-yellow-50 p-9 mb-5 rounded-xl flex flex-col sm:flex-row justify-around items-center text-center max-w-6xl mx-auto gap-6 sm:gap-0">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-5xl sm:text-6xl font-bold text-yellow-500">{stat.value}</span>
            <span className="text-gray-600 text-lg sm:text-base">{stat.label}</span>
          </div>
        ))}
      </div>
    );
  };
  
  export default StatsSection;
  