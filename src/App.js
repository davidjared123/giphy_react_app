import React from "react";
import "./App.css";
import ListOfGifs from "./componets/ListOfGifs";

function App() {
  // const [gifs, setGifs] = useState([]);

  return (
    <div className="App">
      <div className="App-content">
        <ListOfGifs keyword="Venezuela" />
      </div>
    </div>
  );
}

export default App;
