import React from "react";
import { matchesData } from "../Utils/DummyData";
import { HiLocationMarker, HiChat } from "react-icons/hi";
import { IoHeartCircle } from "react-icons/io5";


const matchStyle = {
  mainDiv: `min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8`,
  h2: `text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent`,
  heartIcon: `text-pink-500 text-4xl animate-pulse `,
  matchesDiv: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`,
  matchMap: `bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`,
  matchImg: `w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105`,
  contentDiv: `flex justify-between items-start`,
  h3: `text-xl font-bold text-gray-800`,
  location: `flex items-center gap-1 text-gray-600 mt-1`,
  actionBtn1: `flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2.5 px-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity`,
  actionBtn2: `p-2.5 bg-pink-100 text-pink-500 rounded-xl hover:bg-pink-200 transition-colors`,  
}

const MyMatches = () => {
  return (
    <div className={matchStyle.mainDiv}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <h2 className={matchStyle.h2}>
            Your Matches
          </h2>
          <IoHeartCircle className={matchStyle.heartIcon}/>
        </div>
        
        <div className={matchStyle.matchesDiv}>
          {matchesData.map((match) => (
            <div key={match.id} className="group relative">
              <div className={matchStyle.matchMap}>
                {/* Image Container */}
                <div className="relative">
                  <img 
                    src={match.image} 
                    alt={match.name} 
                    className={matchStyle.matchImg}
                  />
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <div className={matchStyle.contentDiv}>
                    <div>
                      <h3 className={matchStyle.h3}>
                        {match.name}, {match.age}
                      </h3>
                      <div className={matchStyle.location}>
                        <HiLocationMarker className="text-pink-500" />
                        <span className="text-sm">{match.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="mt-4 flex gap-2">
                    <button className={matchStyle.actionBtn1}>
                      <HiChat className="text-lg" />
                      Chat Now
                    </button>
                    <button className={matchStyle.actionBtn2}>
                      <IoHeartCircle className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyMatches;