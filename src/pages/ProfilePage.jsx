import React, { useEffect, useState } from "react";
import { auth, db } from "../Utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { userData, stats } from "../Utils/DummyData";
import { FaEdit, FaMapMarkerAlt, FaEnvelope, FaBirthdayCake } from "react-icons/fa";

function Profile() {
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
    <div className="min-h-screen bg-gradient-to-tr from-purple-50 via-pink-50 to-red-50 py-12 px-4">
      {userDetails ? (
        <div className="max-w-2xl mx-auto">
          {/* Profile Card */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Cover Photo */}
            <div className="h-48 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>
            
            {/* Profile Content */}
            <div className="relative px-6 pb-8">
              {/* Profile Picture */}
              <div className="relative -mt-24 mb-6">
                <img
                  src={userData.profilePic}
                  alt="User Profile"
                  className="w-40 h-40 rounded-full border-4 border-white shadow-lg mx-auto object-cover"
                />
                <button className="absolute bottom-2 right-1/3 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
                  <FaEdit className="text-gray-600" />
                </button>
              </div>

              {/* User Info */}
              <div className="text-center space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800">{userData.name}</h3>
                  <div className="flex items-center justify-center gap-2 mt-2 text-gray-600">
                    <FaMapMarkerAlt className="text-pink-500" />
                    <span>{userData.location}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-center gap-12 py-4 border-y border-gray-100">
                  <div>
                    <div className="text-2xl font-bold text-gray-800">{stats.matches}</div>
                    <div className="text-sm text-gray-600">Matches</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">{stats.likes}</div>
                    <div className="text-sm text-gray-600">Likes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">{stats.matchRate}</div>
                    <div className="text-sm text-gray-600">Match Rate</div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4 px-8">
                  <div className="flex items-center gap-3 text-gray-600">
                    <FaEnvelope className="text-pink-500" />
                    <span>{userDetails.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <FaBirthdayCake className="text-pink-500" />
                    <span>{userData.age} years old</span>
                  </div>
                </div>

                {/* Bio */}
                <div className="bg-gray-50 p-6 rounded-2xl mt-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">About Me</h4>
                  <p className="text-gray-600 leading-relaxed">{userData.bio}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-4 justify-center">
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:opacity-90 transition-opacity">
                    Edit Profile
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                    Share Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
        </div>
      )}
    </div>
  );
}

export default Profile;