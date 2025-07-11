import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const respose = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=30"
    );
    setData(respose.data);
    console.log(data);
  };

  // if we want the fuction run one time befor clicking the btn
  // getData() -- this is't working poperly
  useEffect(() => {
    // useEffect help us for using side redering like work on sidely
    getData();
  }, []); // empty [] meane run at least one time

  return (
    <div className="p-10">
      <button
        onClick={getData}
        className="text-xl bg-pink-700 p-5 py-3 rounded active:scale-90 hover:bg-amber-600 "
      >
        Get Data
      </button>
      <div className="p-5 mt-5 bg-purple-600">
        {data.map((e, idx) => (
          <>
            <div key={idx} className="bg-amber-500 rounded text-center">
              <img className="h-100 w-150" src={e.download_url} alt="" />
              <h1 className="text-center text-pink-500 bg">{e.author}</h1>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default App;
