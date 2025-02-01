import React, { useEffect, useState } from "react";
import { auth, db } from "../Utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { userData, stats } from "../Utils/DummyData";
import { FaEdit, FaMapMarkerAlt, FaEnvelope, FaBirthdayCake } from "react-icons/fa";


const ProfileStyle = {
  mainDiv: `min-h-screen bg-gradient-to-tr from-purple-50 via-pink-50 to-red-50 py-12 px-4`,
  card: `max-w-2xl mx-auto`,
  profileCard: `bg-white rounded-3xl shadow-xl overflow-hidden`,
  coverPhoto: `h-48 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500`,
  content: `relative px-6 pb-8`,
  picDiv: `relative -mt-24 mb-6`,
  userImage: `w-40 h-40 rounded-full border-4 border-white shadow-lg mx-auto object-cover`,
  editButton: `absolute bottom-2 right-1/3 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow`,
  userInfoDiv: `text-center space-y-6`,
  userName: `text-3xl font-bold text-gray-800`,
  iconDiv: `flex items-center justify-center gap-2 mt-2 text-gray-600`,
  statsDiv: `flex justify-center gap-12 py-4 border-y border-gray-100`,
  statsDetails: `text-2xl font-bold text-gray-800`,
  statsMLM: `text-sm text-gray-600`,
  RIcons: `text-pink-500`,
  contactDiv: `space-y-4 px-8`,
  contactIcons: `flex items-center gap-3 text-gray-600`,
  bioDiv: `bg-gray-50 p-6 rounded-2xl mt-6`,
  bioHeading: `text-lg font-semibold text-gray-800 mb-3`,
  userBio: `text-gray-600 leading-relaxed`,
  actionDiv: `flex gap-4 justify-center`,
  actionButton1: `px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:opacity-90 transition-opacity`,
  actionButton2: `px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors`,
  animationDiv: `flex justify-center items-center min-h-screen`,
  animationSpin: `animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500`,
}



const Profile = () =>  {
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
    <div className={ProfileStyle.mainDiv}>
      {userDetails ? (
        <div className={ProfileStyle.card}>
          <div className={ProfileStyle.profileCard}>
            <div className={ProfileStyle.coverPhoto}></div>
            <div className={ProfileStyle.content}>
              <div className={ProfileStyle.picDiv}>
                <img
                  src={userData.profilePic}
                  alt="User Profile"
                  className={ProfileStyle.userImage}
                />
                <button className={ProfileStyle.editButton}>
                  <FaEdit className="text-gray-600" />
                </button>
              </div>

              {/* User Info */}
              <div className={ProfileStyle.userInfoDiv}>
                <div>
                  <h3 className={ProfileStyle.userName}>{userData.name}</h3>
                  <div className={ProfileStyle.iconDiv}>
                    <FaMapMarkerAlt className={ProfileStyle.RIcons} />
                    <span>{userData.location}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className={ProfileStyle.statsDiv}>
                  <div>
                    <div className={ProfileStyle.statsDetails}>{stats.matches}</div>
                    <div className={ProfileStyle.statsMLM}>Matches</div>
                  </div>
                  <div>
                    <div className={ProfileStyle.statsDetails}>{stats.likes}</div>
                    <div className={ProfileStyle.statsMLM}>Likes</div>
                  </div>
                  <div>
                    <div className={ProfileStyle.statsDetails}>{stats.matchRate}</div>
                    <div className={ProfileStyle.statsMLM}>Match Rate</div>
                  </div>
                </div>

                <div className={ProfileStyle.contactDiv}>
                  <div className={ProfileStyle.contactIcons}>
                    <FaEnvelope className={ProfileStyle.RIcons} />
                    <span>{userDetails.email}</span>
                  </div>

                  <div className={ProfileStyle.contactIcons}>
                    <FaBirthdayCake className={ProfileStyle.RIcons}/>
                    <span>{userData.age} years old</span>
                  </div>
                </div>

                <div className={ProfileStyle.bioDiv}>
                  <h4 className={ProfileStyle.bioHeading}>About Me</h4>
                  <p className={ProfileStyle.userBio}>{userData.bio}</p>
                </div>

                <div className={ProfileStyle.actionDiv}>
                  <button className={ProfileStyle.actionButton1}>
                    Edit Profile
                  </button>
                  <button className={ProfileStyle.actionButton2}>
                    Share Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={ProfileStyle.animationDiv}>
          <div className={ProfileStyle.animationSpin}></div>
        </div>
      )}
    </div>
  );
}

export default Profile;