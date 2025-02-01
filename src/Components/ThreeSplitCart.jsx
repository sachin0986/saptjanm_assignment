import React from "react";
import { THREE_IMG_ONE, THREE_IMG_TWO, THREE_IMG_THREE } from "../Utils/Constants";

const SplitCardStyle = {
  mainDiv: `max-w-7xl mx-auto py-12 font-[Inter] px-4 sm:px-6 lg:px-8`,
  heading: `text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 text-center sm:text-left p-4 sm:p-8 pt-14`,
  cardCont: `flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10 mb-14 p-4 sm:p-6 justify-center`,
  listItems: `w-full sm:w-1/2 lg:w-1/3`,
  cardDiv: `overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300`,
  cardImage: `rounded-3xl h-48 sm:h-56 md:h-64 w-full object-cover`,
  h2: `"text-2xl sm:text-3xl lg:text-4xl font-semibold mt-4 text-gray-800"`,
  p: `text-gray-600 text-base sm:text-lg mt-2`,
}

const ThreeSplitCart = () => {
  return (
    <div className={SplitCardStyle.mainDiv}>
      <h1 className={SplitCardStyle.heading}>
        We’re more than just dating
      </h1>

      {/* Cards Container */}
      <ul className={SplitCardStyle.cardCont}>
        {/* Card 1 */}
        <li className={SplitCardStyle.listItems}>
          <div className={SplitCardStyle.cardDiv}>
            <img
              src={THREE_IMG_ONE}
              alt="date-1"
              className={SplitCardStyle.cardImage}
            />
          </div>
          <h2 className={SplitCardStyle.h2}>
            Meet someone
          </h2>
          <p className={SplitCardStyle.p}>
            Find someone you actually want to date, then go ahead and Make the First Move.
          </p>
        </li>

        {/* Card 2 */}
        <li className={SplitCardStyle.listItems}>
          <div className={SplitCardStyle.cardDiv}>
            <img
              src={THREE_IMG_TWO}
              alt="friends"
              className={SplitCardStyle.cardImage}
            />
          </div>
          <h2 className={SplitCardStyle.h2}>
            Find new Friends
          </h2>
          <p className={SplitCardStyle.p}>
            Meet someone like you. Or unlike you. Make new friends and find new things to do together.
          </p>
        </li>

        {/* Card 3 */}
        <li className={SplitCardStyle.listItems}>
          <div className={SplitCardStyle.cardDiv}>
            <img
              src={THREE_IMG_THREE}
              alt="career"
              className={SplitCardStyle.cardImage}
            />
          </div>
          <h2 className={SplitCardStyle.h2}>
            Move Life with Us.
          </h2>
          <p className={SplitCardStyle.p}>
            Find friends with work benefits. Connect with business professionals to find your next job, mentor, or career.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ThreeSplitCart;