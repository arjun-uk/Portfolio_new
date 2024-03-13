import React from "react";
import android from "../assets/android.png";
import java from "../assets/java.png";
import retrofit from "../assets/retrofit.png";
import reactImage from "../assets/react.png";
import kotlin from "../assets/kotlin.png";
import realm from "../assets/realm.png";
import github from "../assets/github.png";
import restApi from "../assets/rest_api.png";
import python from "../assets/python.png";
import firebase from "../assets/firebase.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: android,
      title: "Android",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: java,
      title: "Java",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: retrofit,
      title: "Retrofit",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: kotlin,
      title: "Kotlin",
      style: "shadow-white",
    },

    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: python,
      title: "Python",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: realm,
      title: "Realm",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: firebase,
      title: "Firebase",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="h-20 w-30 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
