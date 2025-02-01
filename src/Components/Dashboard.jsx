import React, { useState, useEffect } from "react";
import { Link, matchPath } from "react-router-dom";
import { matches, userData } from "../Utils/DummyData";
import { auth, db } from "../Utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { TiHeartFullOutline } from "react-icons/ti";


const DashStyle = {
  mainDiv: `min-h-screen bg-gradient-to-tr from-purple-50 via-pink-50 to-red-50 py-12 px-4 sm:px-6 lg:px-8`,
  container: `max-w-6xl mx-auto space-y-8`,
  profileCard: `bg-white rounded-2xl shadow-xl p-6 transform hover:scale-[1.01] transition-transform duration-300`,
  ProfileImageDiv: ``,
  profileImage: `w-32 h-32 rounded-full object-cover border-4 border-pink-400 shadow-lg`,
  userDetails: `text-center sm:text-left`,
  userName: `text-3xl font-bold text-gray-800`,
  userPara: `text-gray-600 mt-2`,
  profile: `bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300>`,
  profileDetails: `text-2xl font-bold text-gray-800 mb-4`,
  bio: `text-gray-700 leading-relaxed`,
  matchDiv: `flex items-center gap-3 group"`,
  matchHeading: `text-3xl mt-8 ml-4 font-bold text-pink-400`,
  matchIcon: `text-pink-400 group-hover:scale-125 mt-8 transition-transform duration-300`,
  mapDiv: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`,
  matchMap: `bg-white rounded-xl shadow-lg p-4 transform hover:scale-[1.02] transition-all duration-300 cursor-pointer`,
  mapDetails: `flex items-center gap-4`,
  matcheImg: `w-20 h-20 rounded-full object-cover border-2 border-amber-400`,
  matchName: `text-xl font-semibold text-gray-800`,
  matchPara: `text-gray-600 mt-1`,
  button: `mt-2 text-amber-600 hover:text-amber-700 text-sm font-medium`,
  animation: `flex justify-center items-center min-h-screen`,
  animationSpinner: `animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white`,
}

const Dashboard = () => {
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
    <div className={DashStyle.mainDiv}>
      {userDetails ? (
        <div className={DashStyle.container}>
          <div className={DashStyle.profileCard}>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative">
                <img
                  src={userData.profilePic}
                  alt="Profile"
                  className={DashStyle.profileImage}
                />
              </div>
              <div className={DashStyle.userDetails}>
                <h2 className={DashStyle.userName}>{userData.name}</h2>
                <p className={DashStyle.userPara}>
                  {userDetails.email} • {userData.age} years
                </p>
              </div>
            </div>
          </div>

          <Link to="/profilePage">
            <div className={DashStyle.profile}>
              <h3 className={DashStyle.profileDetails}>Your Profile</h3>
              <p className={DashStyle.bio}>{userData.bio}</p>
            </div>
          </Link>

          {/* Matches Section */}
          <Link to="/matches">
          <div className="space-y-6">
              <div className={DashStyle.matchDiv}>
                <h3 className={DashStyle.matchHeading}>My Matches</h3>
                <TiHeartFullOutline
                  size={30} 
                  className={DashStyle.matchIcon}
                />
              </div>
            <div className={DashStyle.mapDiv}>
              {matches.map((match) => (
                <div
                  key={match.id}
                  className={DashStyle.matchMap}
                >
                  <div className={DashStyle.mapDetails}>
                    <img
                      src={match.image}
                      alt={match.name}
                      className={DashStyle.matcheImg}
                    />
                    <div>
                      <h4 className={DashStyle.matchName}>{match.name}</h4>
                      <p className={DashStyle.matchPara}>
                        {match.age} • {match.location}
                      </p>
                      <button className={DashStyle.button}>
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
        <div className={DashStyle.animation}>
          <div className={DashStyle.animationSpinner}></div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;