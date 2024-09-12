import React, { useState } from "react";

const Home = () => {
  const [n, setN] = useState(0);
  return (
    <div>
      <h1>Home Page：{n}</h1>
      <button onClick={() => setN(n + 1)}>加一</button>
    </div>
  );
};

export default Home;
