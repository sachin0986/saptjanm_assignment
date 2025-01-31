import React from "react";
import { matchesData } from "../Utils/DummyData";
import { HiLocationMarker, HiChat } from "react-icons/hi";
import { IoHeartCircle } from "react-icons/io5";

const MyMatches = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Your Matches
          </h2>
          <IoHeartCircle className="text-pink-500 text-4xl animate-pulse" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {matchesData.map((match) => (
            <div key={match.id} className="group relative">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image Container */}
                <div className="relative">
                  <img 
                    src={match.image} 
                    alt={match.name} 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {match.name}, {match.age}
                      </h3>
                      <div className="flex items-center gap-1 text-gray-600 mt-1">
                        <HiLocationMarker className="text-pink-500" />
                        <span className="text-sm">{match.location}</span>
                      </div>
                    </div>
                    <div className="h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300" />
                  </div>
                  
                  {/* Actions */}
                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2.5 px-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                      <HiChat className="text-lg" />
                      Chat Now
                    </button>
                    <button className="p-2.5 bg-pink-100 text-pink-500 rounded-xl hover:bg-pink-200 transition-colors">
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