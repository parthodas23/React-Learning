import React from "react";

const Card = (props) => {
  console.log(props); // clg-- as a obj
  return (
    <div className="bg-black text-white p-8 rounded inline-block text-center m-2">
      <h1 className="text-3xl mb-3">{props.name}</h1>
      <h2 className="text-2xl text-green-700">{props.city}</h2>
      <h3 className="text-xl mt-2 text-purple-500">{props.age}</h3>
      <h4 className="text-xl text-yellow-600">{props.profession}</h4>
      <h2 className="text-2xl text-red-600">{props.love_word}</h2>
      <button className="bg-gray-500 px-2 py-2 rounded cursor-pointer mt-4">Add Friend</button>
    </div>
  );
};

export default Card;
