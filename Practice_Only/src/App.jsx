import React from "react";
import Card from "./components/Card";

const App = () => {
  const data = [
    {
      name: "Alice Johnson",
      city: "New York",
      age: 29,
      profession: "Software Engineer",
      title: "Full Stack Developer",
    },
    {
      name: "Ravi Sharma",
      city: "Mumbai",
      age: 34,
      profession: "Digital Marketer",
      title: "SEO & Ads Expert",
    },
    {
      name: "Lina Wang",
      city: "Beijing",
      age: 27,
      profession: "Graphic Designer",
      title: "Creative Artist",
    },
    {
      name: "Carlos Martinez",
      city: "Madrid",
      age: 41,
      profession: "Teacher",
      title: "High School Math Educator",
    },
    {
      name: "Fatima Noor",
      city: "Dhaka",
      age: 31,
      profession: "Entrepreneur",
      title: "Founder of GreenTech BD",
    },
  ];

  return (
    <div className="p-10">
      {data.map((e) => (
        <>
          <Card name={e.name} city={e.city} age={e.age} profession={e.profession} title={e.title} />
        </>
      ))}
    </div>
  );
};

export default App;
