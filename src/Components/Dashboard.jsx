import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { matches, userData } from "../Utils/DummyData";
import { auth, db } from "../Utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { TiHeartFullOutline } from "react-icons/ti";

function Dashboard() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        setUserDetails(user);
        if (user) {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          }
        }
      });
    };
    fetchUserData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-50 via-pink-50 to-red-50 py-12 px-4 sm:px-6 lg:px-8">
      {userDetails ? (
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-[1.01] transition-transform duration-300">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative">
                <img
                  src={userData.profilePic}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-pink-400 shadow-lg"
                />
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-3xl font-bold text-gray-800">{userData.name}</h2>
                <p className="text-gray-600 mt-2">
                  {userDetails.email} • {userData.age} years
                </p>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <Link to="/profilePage">
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Profile</h3>
              <p className="text-gray-700 leading-relaxed">{userData.bio}</p>
            </div>
          </Link>

          {/* Matches Section */}
          <Link to="/matches">
          <div className="space-y-6">
              <div className="flex items-center gap-3 group">
                <h3 className="text-3xl mt-8 ml-4 font-bold text-pink-400">My Matches</h3>
                <TiHeartFullOutline
                  size={30} 
                  className="text-pink-400 group-hover:scale-125 mt-8 transition-transform duration-300"
                />
              </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {matches.map((match) => (
                <div
                  key={match.id}
                  className="bg-white rounded-xl shadow-lg p-4 transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={match.image}
                      alt={match.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-amber-400"
                    />
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">{match.name}</h4>
                      <p className="text-gray-600 mt-1">
                        {match.age} • {match.location}
                      </p>
                      <button className="mt-2 text-amber-600 hover:text-amber-700 text-sm font-medium">
                        View Profile →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </Link>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;