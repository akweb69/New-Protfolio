const Loading = () => {
    return (
        <div className="w-full h-screen fixed top-0 left-0 z-50 bg-[rgba(0,0,0,0.1)] backdrop-blur-[2px] flex justify-center items-center">
            <div className="relative">
                {/* Spinning ring */}
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-pink-500 border-t-transparent"></div>

                {/* Center glowing dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50"></div>
            </div>
        </div>
    );
};

export default Loading;
