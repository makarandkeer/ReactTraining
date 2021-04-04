import logo from "./logo.svg";
import React from "react";
import "./App.css";
import axios from "axios";

const { useState } = React;

const getApiData = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/photos?id=${id}`);
};

function App() {
  const [apiOutput, setApiOutput] = useState("");
  const [userPhoto, setUserPhoto] = useState();
  const [counter, setCounter] = useState(1);

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <button
        onClick={() => {
          setCounter(counter + 1);
          setApiOutput("Rendering data.......");
          getApiData(counter).then(({ data }) => {
            setApiOutput(JSON.stringify(data));
            setUserPhoto(data[0].thumbnailUrl);
          });
        }}
      >
        Get Next Image
      </button>

      <div>
        <p>{apiOutput}</p>
        <p>{userPhoto}</p>
      </div>
      <img src={userPhoto} alt=""></img>
    </div>
  );
}

export default App;
