// components/SkeletonLoader.jsx
const SkeletonLoader = () => {
    return (
      <div className="min-h-screen px-6 py-20 flex flex-col gap-8 animate-pulse">
        <div className="w-1/2 h-6 bg-slate-700 rounded"></div>
        <div className="w-full h-40 bg-slate-800 rounded"></div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2 h-32 bg-slate-800 rounded"></div>
          <div className="w-full sm:w-1/2 h-32 bg-slate-800 rounded"></div>
        </div>
        <div className="w-full h-16 bg-slate-800 rounded"></div>
        <div className="w-3/4 h-6 bg-slate-700 rounded"></div>
      </div>
    );
  };
  
  export default SkeletonLoader;
  