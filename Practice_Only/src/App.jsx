import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const respose = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=100"
    );

    setData(respose.data);
  };
  console.log(data);

  useEffect(() => {  // redering by sidely
    getData();
  }, []);

  return (
    <div>
      <div className="p-10 text-center">
        <button
          onClick={getData}
          className="text-2xl mb-2 bg-pink-600 rounded px-4 py-3 hover:bg-amber-700 active:scale-90 cursor-pointer"
        >
          Get Data
        </button>
        {data.map((e) => (
          <div className="bg-purple-500 p-3">
            <img src={e.download_url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
