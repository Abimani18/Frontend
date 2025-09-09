export default function FolderCard(props) {
    return (
      <div className="relative w-72 rounded-3xl border border-gray-200 bg-gray-100 shadow-md mb-3  " style={{
        clipPath:
          "polygon(0 20%, 0 20%, 15% 0, 70% 0%, 75% 15%, 100% 15%,100% 100%,0 100%)"
  
      }}>
        {/* Inner panel shaped like a folder */}
        <div
          className="mx-4 mt-6 h-32  bg-gradient-to-b from-[#10294f] to-[#0b1f3b] rounded-md"
          style={{
            clipPath:
              "polygon(0 20%, 0 20%, 15% 0, 70% 0%, 75% 15%, 100% 15%,100% 100%,0 100%)",borderRadius:"10px"
  
          }}
        />
  
        {/* Bottom content */}
        <div className="flex items-center justify-between p-4">
          <p className="text-sm font-semibold text-gray-600">
            {props.message}
          </p>
          <button className="flex items-center gap-2 rounded-full bg-indigo-400 px-4 py-1.5 text-xs font-medium text-white hover:bg-indigo-500">
            Get Started
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7" />
              <path d="M8 7h9v9" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
  