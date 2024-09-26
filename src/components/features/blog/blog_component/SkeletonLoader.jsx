const SkeletonLoader = () => {
    return (
      <div className="animate-pulse w-[90%] m-auto py-12 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden mb-10">
        <div className="w-[80%] m-auto">
          <div className="h-60 bg-gray-300"></div>
          <div className="p-6 flex flex-col">
            <div className="h-6 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-4"></div>
            <div className="h-5 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SkeletonLoader;
  