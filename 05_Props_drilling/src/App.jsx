import React from "react";
import "./App.css";
import Card from "./components/Card";
const App = () => {
  const user = [
    {
      name: "Ariana Gomez",
      age: 26,
      city: "New York",
      profession: "Graphic Designer",
      love_word: "passion",
    },
    {
      name: "Rahim Uddin",
      age: 31,
      city: "Dhaka",
      profession: "Software Engineer",
      love_word: "devotion",
    },
    {
      name: "Lina Chen",
      age: 24,
      city: "Shanghai",
      profession: "Content Creator",
      love_word: "warmth",
    },
    {
      name: "Carlos Rivera",
      age: 29,
      city: "Madrid",
      profession: "Chef",
      love_word: "romance",
    },
    {
      name: "Emily Johnson",
      age: 35,
      city: "Toronto",
      profession: "Teacher",
      love_word: "loyalty",
    },
  ];

  return (
    <>
      <div>
        {user.map((e, idx) => (
          <Card
            key={idx}
            name={e.name}
            city={e.city}
            age={e.age}
            profession={e.profession}
            love_word={e.love_word}
          />
        ))}
      </div>
    </>
  );
};

export default App;
