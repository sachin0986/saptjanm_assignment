import React from "react";
import { Link } from "react-router-dom";
import { IMG_URL } from "../Utils/Constants";

const MainImageStyle = {
    mainDiv: `relative flex flex-col-reverse md:flex-row items-center justify-between bg-black text-white px-6 md:px-10 py-16`,
    left: `flex flex-col max-w-lg text-center md:text-left`,
    right: `w-full md:w-1/2`,
    h1: `text-4xl md:text-6xl pt-6 lg:text-7xl font-bold mb-6`,
    button: `mt-4 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300`,
    image: `w-full h-auto md:h-96 object-cover rounded-3xl shadow-lg`,
}


const MainImage = () => {
    return(
      <div className={MainImageStyle.mainDiv}>
        
      <div className={MainImageStyle.left}>
        <h1 className={MainImageStyle.h1}>
          It's just one move away.
        </h1>
        <Link to="/signup">
          <button className={MainImageStyle.button}>
            Join Now
          </button>
        </Link>
      </div>

      <div className={MainImageStyle.right}>
        <img 
          src={IMG_URL} 
          alt="main_logo" 
          className={MainImageStyle.image}
        />
      </div>
    </div>
    )
}

export default MainImage;