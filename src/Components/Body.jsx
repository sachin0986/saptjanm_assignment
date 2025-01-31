import { IMG_URL } from "../Utils/Constants";
import ThreeSplitCart from "./ThreeSplitCart";
import Carousel from "./Corausal";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-between bg-black text-white px-6 md:px-10 py-16">
        
        {/* Left Content */}
        <div className="flex flex-col max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-6xl pt-6 lg:text-7xl font-bold mb-6">
            It's just one move away.
          </h1>
          <Link to="/signup">
            <button className="mt-4 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300">
              Join Now
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img 
            src={IMG_URL} 
            alt="main_logo" 
            className="w-full h-auto md:h-96 object-cover rounded-3xl shadow-lg"
          />
        </div>
      </div>

      {/* Other Sections */}
      <ThreeSplitCart />
      <Carousel />
    </>
  );
};

export default Body;